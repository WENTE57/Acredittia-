import smtplib
import logging
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from ..config import settings
from .jobs import tarea

log = logging.getLogger("acredittia.email")

@tarea("enviar_email")
def enviar_email(to_email: str, subject: str, html_body: str) -> None:
    """Envía un correo electrónico en segundo plano usando la configuración SMTP."""
    if not settings.smtp_host:
        log.warning("Simulando envío de email (SMTP no configurado). Destino: %s, Asunto: %s", to_email, subject)
        log.debug("Contenido: %s", html_body)
        return

    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = settings.email_from
    msg["To"] = to_email

    msg.attach(MIMEText(html_body, "html"))

    try:
        with smtplib.SMTP(settings.smtp_host, settings.smtp_port) as server:
            server.starttls()
            if settings.smtp_user and settings.smtp_password:
                server.login(settings.smtp_user, settings.smtp_password)
            server.send_message(msg)
        log.info("Email enviado a %s: %s", to_email, subject)
    except Exception as e:
        log.exception("Fallo enviando email a %s", to_email)
        raise e  # Lanzar excepción para que celery aplique max_retries si es necesario

def despachar_alerta_email(db, company_id, evento_clave: str, titulo: str, descripcion: str):
    """Evalúa preferencias y encola correos para los usuarios de la empresa."""
    from sqlalchemy import select
    from ..models import NotificacionPreferencia, User
    from .jobs import enqueue

    prefs = db.scalars(select(NotificacionPreferencia).where(
        NotificacionPreferencia.company_id == company_id,
        NotificacionPreferencia.evento == evento_clave
    )).all()
    
    empresa_pref = next((p for p in prefs if p.user_id is None), None)
    email_empresa = empresa_pref.canal_email if empresa_pref else True
    
    excepciones = {p.user_id: p.canal_email for p in prefs if p.user_id is not None}
    
    usuarios = db.scalars(select(User).where(
        User.company_id == company_id,
        User.activo == True,
        User.status == "approved"
    )).all()
    
    html = f"<h3>{titulo}</h3><p>{descripcion}</p><p><small>Este es un aviso automático de Acredittia.</small></p>"
    
    for u in usuarios:
        manda_email = excepciones.get(u.id, email_empresa)
        if manda_email:
            enqueue("enviar_email", to_email=u.email, subject=titulo, html_body=html)

