"""Pruebas para el módulo de Certificación Laboral (Períodos Laborales)."""
import uuid
from datetime import date

def test_crud_periodos_laborales(client, user_token, session):
    # Asumimos que la fixture de test db ya tiene contratos listos de los seeds o creamos uno si es necesario.
    # Obtener el contrato_id del usuario desde la DB o crear un contrato para la prueba.
    
    # 1. Obtener la compañía
    resp = client.get("/api/v1/auth/me", headers={"Authorization": f"Bearer {user_token}"})
    assert resp.status_code == 200
    company_id = resp.json()["company_id"]
    
    # Obtener un contrato (o crear uno para la prueba)
    resp = client.get("/api/v1/contratos", headers={"Authorization": f"Bearer {user_token}"})
    assert resp.status_code == 200
    contratos = resp.json()["items"]
    
    if not contratos:
        # Create a basic contrato if not exists
        resp = client.get("/api/v1/faenas", headers={"Authorization": f"Bearer {user_token}"})
        faena_id = resp.json()["items"][0]["id"]
        
        payload = {
            "nombre": "Contrato Test Periodos",
            "codigo": "C-TEST-01",
            "faena_id": faena_id,
            "fecha_inicio": "2026-01-01",
            "fecha_termino": "2026-12-31"
        }
        resp = client.post("/api/v1/contratos", json=payload, headers={"Authorization": f"Bearer {user_token}"})
        assert resp.status_code == 200
        contrato_id = resp.json()["id"]
    else:
        contrato_id = contratos[0]["id"]
        
    # 2. Crear un periodo laboral
    payload = {
        "nombre": "Septiembre 2026",
        "tipo": "mensual",
        "fecha_inicio": "2026-09-01",
        "fecha_fin": "2026-09-30"
    }
    resp = client.post(f"/api/v1/contratos/{contrato_id}/periodos", json=payload, headers={"Authorization": f"Bearer {user_token}"})
    assert resp.status_code == 200
    periodo_id = resp.json()["id"]
    assert resp.json()["nombre"] == "Septiembre 2026"
    assert resp.json()["estado"] == "abierto"
    
    # 3. Listar periodos
    resp = client.get(f"/api/v1/contratos/{contrato_id}/periodos", headers={"Authorization": f"Bearer {user_token}"})
    assert resp.status_code == 200
    assert len(resp.json()["items"]) >= 1
    
    # 4. Obtener detalle
    resp = client.get(f"/api/v1/periodos/{periodo_id}", headers={"Authorization": f"Bearer {user_token}"})
    assert resp.status_code == 200
    assert resp.json()["id"] == periodo_id
    
    # 5. Patch periodo
    patch_payload = {
        "estado": "en_revision"
    }
    resp = client.patch(f"/api/v1/periodos/{periodo_id}", json=patch_payload, headers={"Authorization": f"Bearer {user_token}"})
    assert resp.status_code == 200
    assert resp.json()["estado"] == "en_revision"
    
    # 6. Delete periodo
    resp = client.delete(f"/api/v1/periodos/{periodo_id}", headers={"Authorization": f"Bearer {user_token}"})
    assert resp.status_code == 204
    
    # Verificar que fue borrado
    resp = client.get(f"/api/v1/periodos/{periodo_id}", headers={"Authorization": f"Bearer {user_token}"})
    assert resp.status_code == 404
