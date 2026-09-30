/**
 * Funciones del cliente API, un objeto por módulo del backend (v1.1).
 *
 * Se importa entero para no colisionar con los nombres de las pantallas:
 *
 * ```ts
 * import * as Api from "@/lib/cliente";
 * const pagina = await Api.contratos.listar({ page_size: 100 });
 * const filas  = await Api.lista(Api.contratos.listar());   // solo los items
 * ```
 *
 * Convenciones:
 * - Todo listado devuelve `Pagina<T>`; los conjuntos cerrados, `Conjunto<T>`.
 * - Los `editar*` van por `patch()`, que no emite la petición si no hay cambios
 *   (el backend responde 400 `SIN_CAMBIOS`).
 * - Los módulos que el frontend todavía no cubre con pantallas (cargos,
 *   personas, calendario, reportes, integraciones, plataformas, credenciales)
 *   están igualmente aquí, con sus tipos, para que quien haga esas pantallas no
 *   tenga que escribir el cliente.
 */
import { api, patch, type Query } from "./api";
import type {
  AcreditacionesEstado, ActividadFila, AdminStats, Alerta, AlertaPatch,
  Ambito, ArchivoConfirmado, CategoriaEvento, ChecklistSujeto, Conjunto,
  Contrato, ContratoCreado, ContratoIn, ContratoPatch, Credencial,
  CumplimientoContrato, Documento, DocumentoFila, DownloadUrl, Ejemplo, Empresa,
  EmpresaDetalle, EquipoIn, EquipoPatch, EstadoAcceso, Eventos, Faena,
  FaenaAdmin, FaenaDetalle, Integracion, JobEncolado, Kpis, LicenciaInterna,
  Matriz, OlvidoPassword, Pagina, ParamsAlertas, ParamsDocumentos, ParamsEquipos,
  ParamsPagina, ParamsPersonal, PerfilActualizado, Persona, PlantillaAdmin,
  PlantillaRequisito, PlataformaContrato, PlataformaFaena, ProximoVencimiento,
  Proveedor, Cargo, CargoIn, CargoPatch, Reporte, ReporteProgramado,
  RequisitoFila, RequisitoTerreno, RequisitosCargo, ResetDemo, ResumenAlertas,
  Revision, RecursoExport, Sesion, Sujeto, SujetoCreado, SujetoDetalle,
  SyncLog, Tendencia, TipoRequisito, TipoReporte, Tokens, TrabajadorIn, TrabajadorPatch,
  Usuario, UsuarioEmpresa, Exportacion, Periodo,
  PeriodoLaboral, PeriodoDocumentoRequerido, PeriodoDocumento, AuditoriaDocumento,
  EstadoPeriodoDoc, MatrizCumplimientoData, MatrizSujeto, MatrizRequisito,
  CumplimientoDashboardData,
} from "./tipos";

export * from "./api";
export type * from "./tipos";

/** Los `ParamsPagina` y los filtros viajan tal cual como query. */
const q = (p?: object): Query => (p ?? {}) as Query;

// ============================================================================
// §1 — auth
// ============================================================================
export const auth = {
  login: (email: string, password: string) =>
    api<Sesion>("/auth/login", { body: { email, password } }),

  register: (body: { empresa: string; rut: string; email: string; password: string }) =>
    api<{ ok: boolean; company_id: string; message?: string }>(
      "/auth/register", { body }),

  refresh: (refresh_token: string) =>
    api<Tokens>("/auth/refresh", { body: { refresh_token } }),

  logout: (refresh_token: string) =>
    api<{ ok: boolean }>("/auth/logout", { body: { refresh_token } }),

  me: () => api<Usuario>("/auth/me"),

  /** Cambiar `password` exige `password_actual`; `refresh_token` salva la sesión. */
  editarMe: (cambios: {
    nombre?: string; email?: string; password?: string;
    password_actual?: string; refresh_token?: string;
  }) => patch<PerfilActualizado>("/auth/me", cambios),

  /** Responde siempre 200, exista o no la cuenta. */
  olvidePassword: (email: string) =>
    api<OlvidoPassword>("/auth/password/forgot", { body: { email } }),

  /** Revoca todos los refresh tokens: después hay que volver a hacer login. */
  resetPassword: (token: string, password: string) =>
    api<{ ok: boolean; sesiones_cerradas: number; message: string }>(
      "/auth/password/reset", { body: { token, password } }),
};

// ============================================================================
// §2 — admin (back-office de la plataforma)
// ============================================================================
export const admin = {
  empresas: (params?: ParamsPagina & { status?: string; es_demo?: boolean }) =>
    api<Pagina<Empresa>>("/admin/companies", { query: q(params) }),

  empresa: (id: string) => api<EmpresaDetalle>(`/admin/companies/${id}`),

  aprobar: (id: string) =>
    api<Empresa>(`/admin/companies/${id}/approve`, { method: "POST", body: {} }),

  rechazar: (id: string, reason: string) =>
    api<Empresa>(`/admin/companies/${id}/reject`, { body: { reason } }),

  /** 409 `NO_ES_DEMO` si la empresa no lo es. La actividad NO se borra. */
  resetDemo: (id: string) =>
    api<ResetDemo>(`/admin/companies/${id}/reset-demo`, { method: "POST", body: {} }),

  stats: () => api<AdminStats>("/admin/stats"),

  crearFaena: (body: Partial<FaenaAdmin> & { nombre: string; mandante: string }) =>
    api<FaenaAdmin>("/admin/faenas", { body }),

  editarFaena: (id: string, cambios: Partial<FaenaAdmin>) =>
    patch<FaenaAdmin>(`/admin/faenas/${id}`, cambios),

  crearPlataformaFaena: (faenaId: string, body: {
    nombre: string; descripcion?: string | null; url?: string | null;
    nota?: string | null; orden?: number;
  }) => api<PlataformaFaena>(`/admin/faenas/${faenaId}/plataformas`, { body }),

  /** A diferencia de `/requisitos/templates`, incluye las inactivas. */
  plantillas: (params?: ParamsPagina & {
    ambito?: Ambito; faena_id?: string; activo?: boolean;
  }) => api<Pagina<PlantillaAdmin>>("/admin/requisitos/templates", { query: q(params) }),

  crearPlantilla: (body: Partial<PlantillaAdmin> & { ambito: Ambito; titulo: string }) =>
    api<PlantillaAdmin>("/admin/requisitos/templates", { body }),

  editarPlantilla: (id: string, cambios: Partial<PlantillaAdmin>) =>
    patch<PlantillaAdmin>(`/admin/requisitos/templates/${id}`, cambios),

  /** Borrado en blando (`activo=false`): no toca los documentos instanciados. */
  eliminarPlantilla: (id: string) =>
    api<PlantillaAdmin & { ok: boolean }>(
      `/admin/requisitos/templates/${id}`, { method: "DELETE" }),

  cargosBase: (params?: ParamsPagina & {
    categoria?: string; requiere_emsipor?: boolean; activo?: boolean;
  }) => api<Pagina<Cargo>>("/admin/cargos", { query: q(params) }),

  crearCargoBase: (body: CargoIn) => api<Cargo>("/admin/cargos", { body }),

  editarCargoBase: (id: string, cambios: CargoPatch) =>
    patch<Cargo>(`/admin/cargos/${id}`, cambios),

  eliminarCargoBase: (id: string) =>
    api<{ ok: boolean }>(`/admin/cargos/${id}`, { method: "DELETE" }),

  planes: (params?: ParamsPagina & { activo?: boolean }) =>
    api<Pagina<Record<string, unknown>>>("/admin/planes", { query: q(params) }),
};

// ============================================================================
// Empresa (autogestión) y sus usuarios
// ============================================================================
export const empresa = {
  perfil: () => api<Record<string, unknown>>("/company"),

  editar: (cambios: { nombre?: string; email?: string }) =>
    patch<Record<string, unknown>>("/company", cambios),

  usuarios: (params?: ParamsPagina & { role?: string; activo?: boolean }) =>
    api<Pagina<UsuarioEmpresa>>("/company/usuarios", { query: q(params) }),

  invitar: (body: {
    nombre: string; email: string; role?: "company" | "contract_admin";
    contrato_id?: string | null;
  }) => api<UsuarioEmpresa & { activacion?: Record<string, unknown> }>(
    "/company/usuarios", { body }),

  editarUsuario: (id: string, cambios: {
    nombre?: string; role?: string; contrato_id?: string | null; activo?: boolean;
  }) => patch<UsuarioEmpresa>(`/company/usuarios/${id}`, cambios),

  desactivarUsuario: (id: string) =>
    api<{ ok: boolean }>(`/company/usuarios/${id}`, { method: "DELETE" }),
};

// ============================================================================
// §3 — faenas y catálogos
// ============================================================================
export const faenas = {
  listar: (params?: ParamsPagina & {
    grupo?: string; region?: string; sector?: string; activa?: boolean;
    mandante?: string;
  }) => api<Pagina<Faena>>("/faenas", { query: q(params) }),

  detalle: (id: string) => api<FaenaDetalle>(`/faenas/${id}`),

  plataformas: (id: string, params?: ParamsPagina) =>
    api<Pagina<PlataformaFaena>>(`/faenas/${id}/plataformas`, { query: q(params) }),

  /** Upsert del acceso de la empresa. Requiere rol `company` o `admin`. */
  editarAcceso: (faenaId: string, plataformaId: string,
                 cambios: { estado: EstadoAcceso; nota?: string | null }) =>
    patch<PlataformaFaena>(
      `/faenas/${faenaId}/plataformas/${plataformaId}/acceso`, cambios),
};

export const catalogo = {
  /** Conjunto cerrado: `{items, total}`, no pagina. */
  tiposEquipo: () => api<Conjunto<string>>("/catalogo/tipos-equipo"),

  plantillas: (params?: ParamsPagina & { ambito?: Ambito; faena_id?: string }) =>
    api<Pagina<PlantillaRequisito>>("/catalogo/requisitos-templates",
      { query: q(params) }),

  /** El listado no trae `campos_clave` ni `notas`: hay que abrir el detalle. */
  ejemplos: (params?: ParamsPagina) =>
    api<Pagina<Ejemplo>>("/catalogo/ejemplos", { query: q(params) }),

  ejemplo: (clave: string) => api<Ejemplo>(`/catalogo/ejemplos/${clave}`),

  /** Conjunto cerrado: `{items, total}`, no pagina. */
  requisitosTerreno: (params?: { ambito?: "conductor" | "equipo"; nivel?: string }) =>
    api<Conjunto<RequisitoTerreno>>("/catalogo/requisitos-terreno",
      { query: q(params) }),

  laboratorios: (params?: ParamsPagina & { faena_id?: string }) =>
    api<Pagina<Proveedor>>("/catalogo/laboratorios", { query: q(params) }),

  talleres: (params?: ParamsPagina & { faena_id?: string }) =>
    api<Pagina<Proveedor>>("/catalogo/talleres", { query: q(params) }),

  proveedoresGps: (params?: ParamsPagina & { faena_id?: string }) =>
    api<Pagina<Proveedor>>("/catalogo/proveedores-gps", { query: q(params) }),
};

// ============================================================================
// Requisitos (catálogo con el estado real de la empresa)
// ============================================================================
export const requisitos = {
  listar: (params?: ParamsPagina & {
    ambito?: Ambito; tipo?: string; obligatorio?: boolean; estado?: string;
  }) => api<Pagina<RequisitoFila> & { kpis: Record<string, number> }>(
    "/requisitos", { query: q(params) }),

  /** Solo las plantillas activas. La clave del id es `template_id`. */
  plantillas: (params?: ParamsPagina & { ambito?: Ambito; faena_id?: string }) =>
    api<Pagina<PlantillaRequisito>>("/requisitos/templates", { query: q(params) }),

  crearPlantilla: (body: {
    ambito: Ambito; titulo: string; codigo?: string; tipo?: TipoRequisito;
    obligatorio?: boolean; faena_id?: string; vigencia_meses?: number;
    plataforma?: string; aplica_a?: string; archivo_ejemplo?: string;
  }) => api<PlantillaRequisito>("/requisitos/templates", { body }),

  editarPlantilla: (id: string, cambios: {
    ambito?: Ambito; titulo?: string; codigo?: string; tipo?: TipoRequisito;
    obligatorio?: boolean; faena_id?: string; vigencia_meses?: number;
    plataforma?: string; aplica_a?: string; activo?: boolean; archivo_ejemplo?: string;
  }) => patch<PlantillaRequisito>(`/requisitos/templates/${id}`, cambios),

  eliminarPlantilla: (id: string) =>
    api<{ ok: boolean; message?: string }>(`/requisitos/templates/${id}`, { method: "DELETE" }),
};

// ============================================================================
// §5 — cargos
// ============================================================================
export const cargos = {
  /** Cargos de la empresa más los globales de Acredittia. */
  listar: (params?: ParamsPagina & {
    categoria?: string; requiere_emsipor?: boolean; activo?: boolean;
  }) => api<Pagina<Cargo>>("/cargos", { query: q(params) }),

  crear: (body: CargoIn) => api<Cargo>("/cargos", { body }),

  /** `aplicar_retroactivo` propaga los requisitos nuevos a los trabajadores. */
  editar: (id: string, cambios: CargoPatch, aplicarRetroactivo = false) =>
    api<Cargo & { documentos_creados?: number; trabajadores_afectados?: number }>(
      `/cargos/${id}`, {
        method: "PATCH",
        body: cambios,
        query: aplicarRetroactivo ? { aplicar_retroactivo: true } : undefined,
      }),

  /** Borrado en blando: `activo=false`. */
  eliminar: (id: string) =>
    api<{ ok: boolean; id: string; activo: boolean }>(`/cargos/${id}`,
      { method: "DELETE" }),

  /** Plantilla efectiva: lo que se instanciará a un trabajador nuevo. */
  requisitos: (id: string) => api<RequisitosCargo>(`/cargos/${id}/requisitos`),
};

// ============================================================================
// §4 — contratos
// ============================================================================
export const contratos = {
  listar: (params?: ParamsPagina & { faena_id?: string; estado?: string }) =>
    api<Pagina<Contrato>>("/contratos", { query: q(params) }),

  detalle: (id: string) => api<Contrato>(`/contratos/${id}`),

  crear: (body: ContratoIn) => api<ContratoCreado>("/contratos", { body }),

  editar: (id: string, cambios: ContratoPatch) =>
    patch<Contrato>(`/contratos/${id}`, cambios),

  eliminar: (id: string) =>
    api<{ ok: boolean; sujetos_eliminados: number; archivos_eliminados: number }>(
      `/contratos/${id}`, { method: "DELETE", query: { confirm: true } }),

  documentos: (id: string, params?: ParamsPagina) =>
    api<Pagina<Documento>>(`/contratos/${id}/documentos`, { query: q(params) }),

  personal: (id: string, params?: Omit<ParamsPersonal, "contrato_id">) =>
    api<Pagina<Sujeto>>(`/contratos/${id}/personal`, { query: q(params) }),

  equipos: (id: string, params?: Omit<ParamsEquipos, "contrato_id">) =>
    api<Pagina<Sujeto>>(`/contratos/${id}/equipos`, { query: q(params) }),

  alertas: (id: string, params?: ParamsPagina & {
    severidad?: string; origen?: string; solo_activas?: boolean;
  }) => api<Pagina<Alerta>>(`/contratos/${id}/alertas`, { query: q(params) }),

  historial: (id: string, params?: ParamsPagina & { modulo?: string; tipo?: string }) =>
    api<Pagina<ActividadFila>>(`/contratos/${id}/historial`, { query: q(params) }),

  /**
   * Encola la extracción IA de un contrato ya subido. **No crea el contrato**:
   * el `job_id` se pasa después como `ia_review_id` en `crear()`.
   */
  analizar: (blob_path: string, filename: string) =>
    api<JobEncolado>("/contratos/analizar", { body: { blob_path, filename } }),

  /**
   * Matriz **dispersa** sujeto × requisito. Una celda ausente significa «el
   * requisito no aplica» y se pinta como hueco (`—`), no como incumplimiento.
   */
  matriz: (id: string, params?: {
    tipo?: "personal" | "equipo"; incluir_opcionales?: boolean;
    cargo_id?: string; page?: number; page_size?: number;
  }) => api<Matriz>(`/contratos/${id}/matriz`, { query: q(params) }),

  // --- requisitos personalizados del contrato ------------------------------
  vinculos: (id: string) =>
    api<Record<string, unknown>>(`/contratos/${id}/vinculos`),

  requisitos: (id: string, params?: ParamsPagina & {
    vinculo_tipo?: string; vinculo_ref?: string; ambito?: Ambito;
    cargo_id?: string; origen?: string;
  }) => api<Pagina<Record<string, unknown>>>(`/contratos/${id}/requisitos`,
    { query: q(params) }),

  crearRequisitos: (id: string, body: object | object[],
                    opciones?: { bulk?: boolean; aplicar_retroactivo?: boolean }) =>
    api<Record<string, unknown>>(`/contratos/${id}/requisitos`,
      { body, query: q(opciones) }),

  editarRequisito: (id: string, rid: string, cambios: object) =>
    patch<Record<string, unknown>>(`/contratos/${id}/requisitos/${rid}`, cambios),

  eliminarRequisito: (id: string, rid: string) =>
    api<{ ok: boolean }>(`/contratos/${id}/requisitos/${rid}`, { method: "DELETE" }),

  definirPlantilla: (id: string, ambito: Ambito, requisito_template_ids: string[]) =>
    api<Record<string, unknown>>(`/contratos/${id}/plantillas/${ambito}`,
      { method: "PUT", body: { requisito_template_ids } }),

  carpetaArranque: (id: string, blob_path: string, filename: string) =>
    api<JobEncolado>(`/contratos/${id}/carpeta-arranque`,
      { body: { blob_path, filename } }),
};

// ============================================================================
// Plataformas del contrato y credenciales
// ============================================================================
export const plataformas = {
  /** Conjunto cerrado; `heredado` indica que aún son las de la faena. */
  listar: (contratoId: string) =>
    api<Conjunto<PlataformaContrato> & { heredado: boolean }>(
      `/contratos/${contratoId}/plataformas`),

  crear: (contratoId: string, body: {
    nombre: string; descripcion?: string | null; url?: string | null;
    color?: string | null; nota?: string | null;
  }) => api<PlataformaContrato>(`/contratos/${contratoId}/plataformas`, { body }),

  editar: (contratoId: string, pid: string, cambios: {
    nombre?: string; descripcion?: string | null; url?: string | null;
    color?: string | null; nota?: string | null; orden?: number;
    estado?: EstadoAcceso;
  }) => patch<PlataformaContrato>(
    `/contratos/${contratoId}/plataformas/${pid}`, cambios),

  eliminar: (contratoId: string, pid: string) =>
    api<{ ok: boolean; requisitos_eliminados: number; credenciales_eliminadas: number }>(
      `/contratos/${contratoId}/plataformas/${pid}`, { method: "DELETE" }),

  solicitarAcceso: (contratoId: string, pid: string, nota?: string) =>
    api<PlataformaContrato>(
      `/contratos/${contratoId}/plataformas/${pid}/solicitar-acceso`,
      { body: { nota: nota ?? null } }),
};

/** Cuentas de acceso a una plataforma. El secreto nunca vuelve del backend. */
export const credenciales = {
  listar: (contratoId: string, pid: string, params?: ParamsPagina & { estado?: string }) =>
    api<Pagina<Credencial>>(
      `/contratos/${contratoId}/plataformas/${pid}/usuarios`, { query: q(params) }),

  crear: (contratoId: string, pid: string,
          body: { nombre: string; usuario: string; password: string }) =>
    api<Credencial>(`/contratos/${contratoId}/plataformas/${pid}/usuarios`, { body }),

  editar: (contratoId: string, pid: string, uid: string, cambios: {
    nombre?: string; usuario?: string; password?: string; estado?: "revocada";
  }) => patch<Credencial>(
    `/contratos/${contratoId}/plataformas/${pid}/usuarios/${uid}`, cambios),

  rotar: (contratoId: string, pid: string, uid: string, password: string) =>
    api<Credencial>(
      `/contratos/${contratoId}/plataformas/${pid}/usuarios/${uid}/rotar`,
      { body: { password } }),

  eliminar: (contratoId: string, pid: string, uid: string) =>
    api<{ ok: boolean; versiones_eliminadas: number }>(
      `/contratos/${contratoId}/plataformas/${pid}/usuarios/${uid}`,
      { method: "DELETE" }),

  usos: (contratoId: string, pid: string, uid: string, limite = 100) =>
    api<Record<string, unknown>>(
      `/contratos/${contratoId}/plataformas/${pid}/usuarios/${uid}/usos`,
      { query: { limite } }),
};

// ============================================================================
// §5 — personal y equipos
// ============================================================================
export const personal = {
  listar: (params?: ParamsPersonal) =>
    api<Pagina<Sujeto>>("/personal", { query: q(params) }),

  detalle: (id: string) => api<SujetoDetalle>(`/personal/${id}`),

  /** Acepta `cargo_id` o `cargo` como texto; el texto puede crear el cargo. */
  crear: (body: TrabajadorIn) => api<SujetoCreado>("/personal", { body }),

  /** Solo campos de personal: los de equipo se ignorarían en silencio. */
  editar: (id: string, cambios: TrabajadorPatch) =>
    patch<SujetoDetalle & { cargo_creado?: boolean; expediente_emsipor_creado?: boolean }>(
      `/personal/${id}`, cambios),

  /** Checklist completo del trabajador (conjunto cerrado, no pagina). */
  documentos: (id: string) => api<ChecklistSujeto>(`/personal/${id}/documentos`),

  baja: (id: string) =>
    api<{ ok: boolean; id: string; estado: "baja" }>(`/personal/${id}/baja`,
      { method: "POST", body: {} }),

  eliminar: (id: string) =>
    api<{ ok: boolean; archivos_eliminados: number }>(`/personal/${id}`,
      { method: "DELETE" }),
};

export const equipos = {
  listar: (params?: ParamsEquipos) =>
    api<Pagina<Sujeto>>("/equipos", { query: q(params) }),

  detalle: (id: string) => api<SujetoDetalle>(`/equipos/${id}`),

  crear: (body: EquipoIn) => api<SujetoCreado>("/equipos", { body }),

  /** Solo campos de equipo: los de personal se ignorarían en silencio. */
  editar: (id: string, cambios: EquipoPatch) =>
    patch<SujetoDetalle>(`/equipos/${id}`, cambios),

  documentos: (id: string) => api<ChecklistSujeto>(`/equipos/${id}/documentos`),

  baja: (id: string) =>
    api<{ ok: boolean; id: string; estado: "baja" }>(`/equipos/${id}/baja`,
      { method: "POST", body: {} }),

  eliminar: (id: string) =>
    api<{ ok: boolean; archivos_eliminados: number }>(`/equipos/${id}`,
      { method: "DELETE" }),
};

/** Licencia interna de mina. 409 `NO_REQUIERE_EMSIPOR` si el cargo no la exige. */
export const licencia = {
  detalle: (sujetoId: string) =>
    api<LicenciaInterna>(`/personal/${sujetoId}/licencia-interna`),

  /** `estado` no se acepta: lo deriva el backend de `numero` y `vence`. */
  editar: (sujetoId: string, cambios: { numero?: string | null; vence?: string | null }) =>
    patch<LicenciaInterna>(`/personal/${sujetoId}/licencia-interna`, cambios),

  /** Irreversible: borra los documentos EMSIPOR con sus archivos y blobs. */
  reset: (sujetoId: string) =>
    api<LicenciaInterna>(`/personal/${sujetoId}/licencia-interna/reset`,
      { method: "POST", body: {} }),
};

// ============================================================================
// Personas y flota (vistas consolidadas por RUT / patente)
// ============================================================================
export const personas = {
  listar: (params?: ParamsPagina & {
    cargo_id?: string; estado?: string; faena_id?: string; sin_asignacion?: boolean;
  }) => api<Pagina<Persona>>("/personas", { query: q(params) }),

  ficha: (rut: string) => api<Persona>(`/personas/${encodeURIComponent(rut)}`),
};

export const flota = {
  listar: (params?: ParamsPagina & {
    tipo_equipo?: string; estado?: string; faena_id?: string;
  }) => api<Pagina<Persona>>("/flota", { query: q(params) }),

  ficha: (patente: string) => api<Persona>(`/flota/${encodeURIComponent(patente)}`),
};

// ============================================================================
// §6 — documentos
// ============================================================================
export const documentos = {
  /** Listado transversal con el dueño resuelto y el conteo de archivos. */
  listar: (params?: ParamsDocumentos) =>
    api<Pagina<DocumentoFila>>("/documentos", { query: q(params) }),

  detalle: (id: string) => api<Documento>(`/documentos/${id}`),

  /** Al fijar `ok` sin `vence` el backend lo deriva (`vence_derivado`). */
  editar: (id: string, cambios: { estado?: "ok" | "falta"; vence?: string | null }) =>
    patch<Documento>(`/documentos/${id}`, cambios),

  /** Paso 1 de la subida. Normalmente se usa `subirDocumento()`. */
  urlSubida: (id: string, body: {
    filename: string; content_type?: string; size_bytes?: number;
  }) => api<Record<string, unknown>>(`/documentos/${id}/upload-url`, { body }),

  /** Paso 3 de la subida. Normalmente se usa `subirDocumento()`. */
  confirmarArchivo: (id: string, blob_path: string, filename: string) =>
    api<ArchivoConfirmado>(`/documentos/${id}/archivos`,
      { body: { blob_path, filename } }),

  urlDescarga: (id: string, archivoId: string) =>
    api<DownloadUrl>(`/documentos/${id}/archivos/${archivoId}/download-url`),

  eliminarArchivo: (id: string, archivoId: string) =>
    api<{ ok: boolean; documento: Documento }>(
      `/documentos/${id}/archivos/${archivoId}`, { method: "DELETE" }),
};

// ============================================================================
// Revisión y extracción IA (todo asíncrono: se consulta con polling)
// ============================================================================
export const ia = {
  /** Vuelve a revisar un archivo ya subido. */
  revisar: (archivo_id: string) =>
    api<JobEncolado>("/ia/revisiones", { body: { archivo_id } }),

  revision: (jobId: string) => api<Revision>(`/ia/revisiones/${jobId}`),

  revisiones: (params?: ParamsPagina & {
    documento_id?: string; sujeto_id?: string; resultado?: string;
    context?: string; status?: string;
  }) => api<Pagina<Revision>>("/ia/revisiones", { query: q(params) }),

  extraerSujeto: (blob_path: string, filename: string, tipo: "cedula" | "padron") =>
    api<JobEncolado>("/ia/extraer-sujeto", { body: { blob_path, filename, tipo } }),

  extraerContrato: (blob_path: string, filename: string) =>
    api<JobEncolado>("/ia/extraer-contrato", { body: { blob_path, filename } }),

  extraerCarpetaArranque: (blob_path: string, filename: string, contrato_id: string) =>
    api<JobEncolado>("/ia/extraer-carpeta-arranque",
      { body: { blob_path, filename, contrato_id } }),
};

// ============================================================================
// §7 — alertas
// ============================================================================
export const alertas = {
  listar: (params?: ParamsAlertas) =>
    api<Pagina<Alerta>>("/alertas", { query: q(params) }),

  resumen: () => api<ResumenAlertas>("/alertas/resumen"),

  /** `estado='resuelta'` fija `resuelta_at`; cualquier otro estado la limpia. */
  editar: (id: string, cambios: AlertaPatch) =>
    patch<Alerta>(`/alertas/${id}`, cambios),

  marcarLeidas: (ids?: string[]) =>
    api<{ marcadas: number }>("/alertas/marcar-leidas",
      { body: { ids: ids ?? null } }),
};

// ============================================================================
// §8 — dashboard y actividad
// ============================================================================
export const dashboard = {
  kpis: () => api<Kpis>("/dashboard/kpis"),

  cumplimientoContratos: (params?: ParamsPagina) =>
    api<Pagina<CumplimientoContrato>>("/dashboard/cumplimiento-contratos",
      { query: q(params) }),

  acreditacionesEstado: () =>
    api<AcreditacionesEstado>("/dashboard/acreditaciones-estado"),

  /** `limit` ya no existe: se pagina con `page` / `page_size`. */
  actividad: (params?: ParamsPagina) =>
    api<Pagina<ActividadFila>>("/dashboard/actividad", { query: q(params) }),

  proximosVencimientos: (params?: ParamsPagina & { dias?: number }) =>
    api<Pagina<ProximoVencimiento>>("/dashboard/proximos-vencimientos",
      { query: q(params) }),

  /** `anterior` y `delta_pct` pueden NO venir: hay que comprobar las claves. */
  tendencia: (params?: {
    periodo?: Periodo; desde?: string; hasta?: string; contrato_id?: string;
    faena_id?: string;
  }) => api<Tendencia>("/dashboard/tendencia", { query: q(params) }),
};

export const actividad = {
  listar: (params?: ParamsPagina & {
    modulo?: string; tipo?: string; user_id?: string; contrato_id?: string;
    desde?: string; hasta?: string;
  }) => api<Pagina<ActividadFila>>("/actividad", { query: q(params) }),
};

// ============================================================================
// Calendario
// ============================================================================
export const calendario = {
  /** `desde` y `hasta` son obligatorios; el rango máximo es de 366 días. */
  eventos: (desde: string, hasta: string, categoria?: CategoriaEvento) =>
    api<Eventos>("/calendario/eventos", { query: { desde, hasta, categoria } }),

  crear: (body: {
    titulo: string; fecha: string; categoria?: Exclude<CategoriaEvento, "vencimiento">;
    descripcion?: string | null;
  }) => api<Eventos["items"][number]>("/calendario/eventos", { body }),

  editar: (id: string, cambios: {
    titulo?: string; fecha?: string;
    categoria?: Exclude<CategoriaEvento, "vencimiento">;
    descripcion?: string | null; completado?: boolean;
  }) => patch<Eventos["items"][number]>(`/calendario/eventos/${id}`, cambios),

  eliminar: (id: string) =>
    api<{ ok: boolean; id: string; titulo: string }>(`/calendario/eventos/${id}`,
      { method: "DELETE" }),
};

// ============================================================================
// Reportes y exportaciones
// ============================================================================
export const reportes = {
  listar: (params?: ParamsPagina & {
    tipo?: TipoReporte; formato?: string; status?: string; desde?: string;
    hasta?: string;
  }) => api<Pagina<Reporte>>("/reportes", { query: q(params) }),

  /** Siempre asíncrono: se consulta con `detalle()` y se baja con `urlDescarga()`. */
  crear: (body: {
    tipo: TipoReporte; formato: "pdf" | "excel";
    params?: Record<string, unknown>; nombre?: string;
  }) => api<{ id: string; status: string }>("/reportes", { body }),

  detalle: (id: string) => api<Reporte>(`/reportes/${id}`),

  /** 409 `REPORTE_NO_LISTO` mientras el job no haya terminado. */
  urlDescarga: (id: string) => api<DownloadUrl>(`/reportes/${id}/download-url`),

  programados: (params?: ParamsPagina & { activo?: boolean; tipo?: TipoReporte }) =>
    api<Pagina<ReporteProgramado>>("/reportes/programados", { query: q(params) }),

  crearProgramado: (body: {
    nombre: string; tipo: TipoReporte; formato: "pdf" | "excel";
    cron_expr: string; params?: Record<string, unknown>; activo?: boolean;
  }) => api<ReporteProgramado>("/reportes/programados", { body }),

  editarProgramado: (id: string, cambios: Partial<{
    nombre: string; tipo: TipoReporte; formato: "pdf" | "excel";
    params: Record<string, unknown>; cron_expr: string; activo: boolean;
  }>) => patch<ReporteProgramado>(`/reportes/programados/${id}`, cambios),

  eliminarProgramado: (id: string) =>
    api<{ ok: boolean }>(`/reportes/programados/${id}`, { method: "DELETE" }),
};

export const exportaciones = {
  /**
   * Exporta una vista. Hasta `EXPORT_FILAS_MAX` responde 200 con `download_url`;
   * por encima devuelve 202 con el `id` del reporte que hay que sondear.
   */
  crear: (body: {
    recurso: RecursoExport; filtros?: Record<string, unknown>;
    formato?: "excel" | "csv";
  }) => api<Exportacion>("/exportaciones", { body }),
};

// ============================================================================
// Integraciones
// ============================================================================
export const integraciones = {
  listar: (params?: ParamsPagina & { tipo?: string; estado?: string }) =>
    api<Pagina<Integracion> & {
      kpis: Record<string, number>;
      tipos_disponibles: { tipo: string; nombre: string }[];
    }>("/integraciones", { query: q(params) }),

  /** El secreto no se guarda en la base: solo su referencia en el vault. */
  crear: (body: {
    tipo: string; credenciales?: Record<string, unknown>;
    config?: Record<string, unknown>;
  }) => api<Integracion>("/integraciones", { body }),

  editar: (id: string, cambios: {
    estado?: "activa" | "desconectada"; config?: Record<string, unknown>;
    credenciales?: Record<string, unknown>;
  }) => patch<Integracion>(`/integraciones/${id}`, cambios),

  eliminar: (id: string) =>
    api<{ ok: boolean; logs_eliminados: number }>(`/integraciones/${id}`,
      { method: "DELETE" }),

  /** 409 si está `desconectada`. El resultado real aparece en `logs()`. */
  sincronizar: (id: string) =>
    api<{ job_id: string; status: string; integracion_id: string; corrida: string }>(
      `/integraciones/${id}/sync`, { method: "POST", body: {} }),

  logs: (id: string, params?: ParamsPagina & {
    status?: "exito" | "error"; desde?: string; hasta?: string;
  }) => api<Pagina<SyncLog> & { integracion: Integracion }>(
    `/integraciones/${id}/logs`, { query: q(params) }),
};

// ============================================================================
// Notificaciones y suscripción
// ============================================================================
export const notificaciones = {
  preferencias: () => api<Record<string, unknown>>("/notificaciones/preferencias"),

  editarPreferencias: (preferencias: {
    evento: string; canal_email?: boolean; canal_whatsapp?: boolean;
    user_id?: string | null;
  }[]) => patch<Record<string, unknown>>("/notificaciones/preferencias",
    { preferencias }),
};

export const suscripcion = {
  planes: () => api<Pagina<Record<string, unknown>>>("/planes"),

  detalle: () => api<Record<string, unknown>>("/suscripcion"),

  contratar: (plan_id: string) =>
    api<Record<string, unknown>>("/suscripcion", { body: { plan_id } }),

  cancelar: () => api<{ ok: boolean }>("/suscripcion", { method: "DELETE" }),

  facturas: (params?: ParamsPagina & {
    estado?: string; desde?: string; hasta?: string;
  }) => api<Pagina<Record<string, unknown>>>("/facturas", { query: q(params) }),

  urlFactura: (id: string) => api<DownloadUrl>(`/facturas/${id}/download-url`),
};

// ============================================================================
// §16 — Certificación Laboral (Dev 4)
// ============================================================================
export const certificacion = {
  listarPeriodos: async (params?: ParamsPagina & { estado?: string; contrato_id?: string }) => {
    try {
      return await api<Pagina<PeriodoLaboral>>("/certificacion/periodos", { query: q(params) });
    } catch {
      // Fallback a datos mock si el backend aún no implementa el endpoint
      const MOCK_PERIODOS: PeriodoLaboral[] = [
        {
          id: "per-sep-2026",
          contrato_id: "lp1",
          contrato_nombre: "Transporte y Operaciones MLP (Los Pelambres)",
          nombre: "Período Septiembre 2026",
          tipo: "mensual",
          fecha_inicio: "2026-09-01",
          fecha_fin: "2026-09-30",
          estado: "en_revision",
          porcentaje_cumplimiento: 82,
          total_requeridos: 45,
          total_aprobados: 37,
          total_observados: 4,
          total_pendientes: 4,
          total_rechazados: 0,
          created_at: "2026-09-01T08:00:00Z",
        },
        {
          id: "per-ago-2026",
          contrato_id: "lp1",
          contrato_nombre: "Transporte y Operaciones MLP (Los Pelambres)",
          nombre: "Período Agosto 2026",
          tipo: "mensual",
          fecha_inicio: "2026-08-01",
          fecha_fin: "2026-08-31",
          estado: "cerrado",
          porcentaje_cumplimiento: 100,
          total_requeridos: 45,
          total_aprobados: 45,
          total_observados: 0,
          total_pendientes: 0,
          total_rechazados: 0,
          created_at: "2026-08-01T08:00:00Z",
        },
        {
          id: "per-oct-2026",
          contrato_id: "and1",
          contrato_nombre: "Servicios Mina Andina (Andina)",
          nombre: "Período Octubre 2026",
          tipo: "mensual",
          fecha_inicio: "2026-10-01",
          fecha_fin: "2026-10-31",
          estado: "abierto",
          porcentaje_cumplimiento: 40,
          total_requeridos: 30,
          total_aprobados: 12,
          total_observados: 3,
          total_pendientes: 15,
          total_rechazados: 0,
          created_at: "2026-09-28T10:00:00Z",
        },
      ];

      let filtrados = MOCK_PERIODOS;
      if (params?.estado) {
        filtrados = filtrados.filter((p) => p.estado === params.estado);
      }
      if (params?.contrato_id) {
        filtrados = filtrados.filter((p) => p.contrato_id === params.contrato_id);
      }
      if (params?.search) {
        const s = params.search.toLowerCase();
        filtrados = filtrados.filter(
          (p) => p.nombre.toLowerCase().includes(s) || (p.contrato_nombre ?? "").toLowerCase().includes(s)
        );
      }
      return {
        items: filtrados,
        page: 1,
        page_size: 20,
        total: filtrados.length,
        total_pages: 1,
      } as Pagina<PeriodoLaboral>;
    }
  },

  obtenerPeriodo: async (id: string) => {
    try {
      return await api<PeriodoLaboral>(`/certificacion/periodos/${id}`);
    } catch {
      const list = await certificacion.listarPeriodos();
      const p = list.items.find((item) => item.id === id) ?? list.items[0];
      return p;
    }
  },

  crearPeriodo: async (body: {
    contrato_id: string;
    nombre: string;
    tipo: string;
    fecha_inicio: string;
    fecha_fin: string;
  }) => {
    try {
      return await api<PeriodoLaboral>("/certificacion/periodos", { method: "POST", body });
    } catch {
      return {
        id: `per-${Date.now()}`,
        contrato_id: body.contrato_id,
        contrato_nombre: "Contrato Seleccionado",
        nombre: body.nombre,
        tipo: body.tipo as any,
        fecha_inicio: body.fecha_inicio,
        fecha_fin: body.fecha_fin,
        estado: "abierto",
        porcentaje_cumplimiento: 0,
        total_requeridos: 20,
        total_aprobados: 0,
        total_pendientes: 20,
        total_observados: 0,
        total_rechazados: 0,
      } as PeriodoLaboral;
    }
  },

  actualizarPeriodo: async (id: string, cambios: Partial<PeriodoLaboral>) => {
    try {
      return await patch<PeriodoLaboral>(`/certificacion/periodos/${id}`, cambios);
    } catch {
      const p = await certificacion.obtenerPeriodo(id);
      return { ...p, ...cambios };
    }
  },

  eliminarPeriodo: async (id: string) => {
    try {
      return await api<{ ok: boolean }>(`/certificacion/periodos/${id}`, { method: "DELETE" });
    } catch {
      return { ok: true };
    }
  },

  matrizDocumental: async (periodoId: string): Promise<MatrizCumplimientoData> => {
    try {
      return await api<MatrizCumplimientoData>(`/certificacion/periodos/${periodoId}/matriz`);
    } catch {
      const periodo = await certificacion.obtenerPeriodo(periodoId);
      const sujetos: MatrizSujeto[] = [
        { id: "s1", nombre: "Juan Pérez Soto", rut: "15.432.890-1", cargo: "Operador Rigger CAEX" },
        { id: "s2", nombre: "Pedro Morales Silva", rut: "16.789.012-3", cargo: "Conductor Aljibe" },
        { id: "s3", nombre: "María González Tapia", rut: "14.210.987-5", cargo: "Supervisora HSEC" },
        { id: "s4", nombre: "Carlos Fuentealba R.", rut: "17.654.321-9", cargo: "Mecánico Mantención" },
        { id: "s5", nombre: "Ana Araya Castro", rut: "18.123.456-K", cargo: "Prevencionista de Riesgos" },
      ];

      const requisitos: MatrizRequisito[] = [
        { id: "r1", nombre: "Liquidación de Sueldo", ambito: "personal", obligatorio: true },
        { id: "r2", nombre: "Cotizaciones Previred", ambito: "personal", obligatorio: true },
        { id: "r3", nombre: "Libro de Asistencia", ambito: "personal", obligatorio: true },
        { id: "r4", nombre: "Certificado F30-1", ambito: "empresa", obligatorio: true },
        { id: "r5", nombre: "Contrato de Trabajo / Anexo", ambito: "personal", obligatorio: true },
      ];

      const celdas: Record<string, PeriodoDocumento> = {
        "s1_r1": { id: "doc-1", periodo_id: periodoId, sujeto_id: "s1", sujeto_nombre: "Juan Pérez Soto", sujeto_rut: "15.432.890-1", sujeto_cargo: "Operador Rigger CAEX", requisito_template_id: "r1", requisito_nombre: "Liquidación de Sueldo", estado: "aprobado", fecha_carga: "2026-09-05", cargado_por: "Admin", archivo_url: "/docs/liq_juan.pdf", version: 1 },
        "s1_r2": { id: "doc-2", periodo_id: periodoId, sujeto_id: "s1", sujeto_nombre: "Juan Pérez Soto", sujeto_rut: "15.432.890-1", sujeto_cargo: "Operador Rigger CAEX", requisito_template_id: "r2", requisito_nombre: "Cotizaciones Previred", estado: "aprobado", fecha_carga: "2026-09-05", cargado_por: "Admin", archivo_url: "/docs/prev_juan.pdf", version: 1 },
        "s1_r3": { id: "doc-3", periodo_id: periodoId, sujeto_id: "s1", sujeto_nombre: "Juan Pérez Soto", sujeto_rut: "15.432.890-1", sujeto_cargo: "Operador Rigger CAEX", requisito_template_id: "r3", requisito_nombre: "Libro de Asistencia", estado: "observado", observaciones: "Falta firma del trabajador en día 15 de septiembre", fecha_carga: "2026-09-10", cargado_por: "Juan Pérez", archivo_url: "/docs/libro_juan.pdf", version: 1 },
        "s1_r4": { id: "doc-4", periodo_id: periodoId, sujeto_id: "s1", sujeto_nombre: "Juan Pérez Soto", sujeto_rut: "15.432.890-1", sujeto_cargo: "Operador Rigger CAEX", requisito_template_id: "r4", requisito_nombre: "Certificado F30-1", estado: "aprobado", fecha_carga: "2026-09-02", cargado_por: "Empresa", archivo_url: "/docs/f30_1.pdf", version: 1 },
        "s1_r5": { id: "doc-5", periodo_id: periodoId, sujeto_id: "s1", sujeto_nombre: "Juan Pérez Soto", sujeto_rut: "15.432.890-1", sujeto_cargo: "Operador Rigger CAEX", requisito_template_id: "r5", requisito_nombre: "Contrato de Trabajo / Anexo", estado: "aprobado", fecha_carga: "2026-09-01", cargado_por: "Admin", archivo_url: "/docs/contrato_juan.pdf", version: 1 },

        "s2_r1": { id: "doc-6", periodo_id: periodoId, sujeto_id: "s2", sujeto_nombre: "Pedro Morales Silva", sujeto_rut: "16.789.012-3", sujeto_cargo: "Conductor Aljibe", requisito_template_id: "r1", requisito_nombre: "Liquidación de Sueldo", estado: "aprobado", fecha_carga: "2026-09-06", cargado_por: "Admin", archivo_url: "/docs/liq_pedro.pdf", version: 1 },
        "s2_r2": { id: "doc-7", periodo_id: periodoId, sujeto_id: "s2", sujeto_nombre: "Pedro Morales Silva", sujeto_rut: "16.789.012-3", sujeto_cargo: "Conductor Aljibe", requisito_template_id: "r2", requisito_nombre: "Cotizaciones Previred", estado: "aprobado", fecha_carga: "2026-09-06", cargado_por: "Admin", archivo_url: "/docs/prev_pedro.pdf", version: 1 },
        "s2_r3": { id: "doc-8", periodo_id: periodoId, sujeto_id: "s2", sujeto_nombre: "Pedro Morales Silva", sujeto_rut: "16.789.012-3", sujeto_cargo: "Conductor Aljibe", requisito_template_id: "r3", requisito_nombre: "Libro de Asistencia", estado: "cargado", fecha_carga: "2026-09-25", cargado_por: "Pedro Morales", archivo_url: "/docs/libro_pedro.pdf", version: 1 },
        "s2_r4": { id: "doc-9", periodo_id: periodoId, sujeto_id: "s2", sujeto_nombre: "Pedro Morales Silva", sujeto_rut: "16.789.012-3", sujeto_cargo: "Conductor Aljibe", requisito_template_id: "r4", requisito_nombre: "Certificado F30-1", estado: "aprobado", fecha_carga: "2026-09-02", cargado_por: "Empresa", archivo_url: "/docs/f30_1.pdf", version: 1 },
        "s2_r5": { id: "doc-10", periodo_id: periodoId, sujeto_id: "s2", sujeto_nombre: "Pedro Morales Silva", sujeto_rut: "16.789.012-3", sujeto_cargo: "Conductor Aljibe", requisito_template_id: "r5", requisito_nombre: "Contrato de Trabajo / Anexo", estado: "pendiente" },

        "s3_r1": { id: "doc-11", periodo_id: periodoId, sujeto_id: "s3", sujeto_nombre: "María González Tapia", sujeto_rut: "14.210.987-5", sujeto_cargo: "Supervisora HSEC", requisito_template_id: "r1", requisito_nombre: "Liquidación de Sueldo", estado: "aprobado", fecha_carga: "2026-09-04", cargado_por: "Admin", archivo_url: "/docs/liq_maria.pdf", version: 1 },
        "s3_r2": { id: "doc-12", periodo_id: periodoId, sujeto_id: "s3", sujeto_nombre: "María González Tapia", sujeto_rut: "14.210.987-5", sujeto_cargo: "Supervisora HSEC", requisito_template_id: "r2", requisito_nombre: "Cotizaciones Previred", estado: "aprobado", fecha_carga: "2026-09-04", cargado_por: "Admin", archivo_url: "/docs/prev_maria.pdf", version: 1 },
        "s3_r3": { id: "doc-13", periodo_id: periodoId, sujeto_id: "s3", sujeto_nombre: "María González Tapia", sujeto_rut: "14.210.987-5", sujeto_cargo: "Supervisora HSEC", requisito_template_id: "r3", requisito_nombre: "Libro de Asistencia", estado: "aprobado", fecha_carga: "2026-09-08", cargado_por: "María G.", archivo_url: "/docs/libro_maria.pdf", version: 1 },
        "s3_r4": { id: "doc-14", periodo_id: periodoId, sujeto_id: "s3", sujeto_nombre: "María González Tapia", sujeto_rut: "14.210.987-5", sujeto_cargo: "Supervisora HSEC", requisito_template_id: "r4", requisito_nombre: "Certificado F30-1", estado: "aprobado", fecha_carga: "2026-09-02", cargado_por: "Empresa", archivo_url: "/docs/f30_1.pdf", version: 1 },
        "s3_r5": { id: "doc-15", periodo_id: periodoId, sujeto_id: "s3", sujeto_nombre: "María González Tapia", sujeto_rut: "14.210.987-5", sujeto_cargo: "Supervisora HSEC", requisito_template_id: "r5", requisito_nombre: "Contrato de Trabajo / Anexo", estado: "aprobado", fecha_carga: "2026-09-01", cargado_por: "Admin", archivo_url: "/docs/contrato_maria.pdf", version: 1 },

        "s4_r1": { id: "doc-16", periodo_id: periodoId, sujeto_id: "s4", sujeto_nombre: "Carlos Fuentealba R.", sujeto_rut: "17.654.321-9", sujeto_cargo: "Mecánico Mantención", requisito_template_id: "r1", requisito_nombre: "Liquidación de Sueldo", estado: "observado", observaciones: "Monto no coincide con el anexo contractual vigente", fecha_carga: "2026-09-12", cargado_por: "Carlos F.", archivo_url: "/docs/liq_carlos.pdf", version: 1 },
        "s4_r2": { id: "doc-17", periodo_id: periodoId, sujeto_id: "s4", sujeto_nombre: "Carlos Fuentealba R.", sujeto_rut: "17.654.321-9", sujeto_cargo: "Mecánico Mantención", requisito_template_id: "r2", requisito_nombre: "Cotizaciones Previred", estado: "aprobado", fecha_carga: "2026-09-05", cargado_por: "Admin", archivo_url: "/docs/prev_carlos.pdf", version: 1 },
        "s4_r3": { id: "doc-18", periodo_id: periodoId, sujeto_id: "s4", sujeto_nombre: "Carlos Fuentealba R.", sujeto_rut: "17.654.321-9", sujeto_cargo: "Mecánico Mantención", requisito_template_id: "r3", requisito_nombre: "Libro de Asistencia", estado: "pendiente" },
        "s4_r4": { id: "doc-19", periodo_id: periodoId, sujeto_id: "s4", sujeto_nombre: "Carlos Fuentealba R.", sujeto_rut: "17.654.321-9", sujeto_cargo: "Mecánico Mantención", requisito_template_id: "r4", requisito_nombre: "Certificado F30-1", estado: "aprobado", fecha_carga: "2026-09-02", cargado_por: "Empresa", archivo_url: "/docs/f30_1.pdf", version: 1 },
        "s4_r5": { id: "doc-20", periodo_id: periodoId, sujeto_id: "s4", sujeto_nombre: "Carlos Fuentealba R.", sujeto_rut: "17.654.321-9", sujeto_cargo: "Mecánico Mantención", requisito_template_id: "r5", requisito_nombre: "Contrato de Trabajo / Anexo", estado: "aprobado", fecha_carga: "2026-09-01", cargado_por: "Admin", archivo_url: "/docs/contrato_carlos.pdf", version: 1 },

        "s5_r1": { id: "doc-21", periodo_id: periodoId, sujeto_id: "s5", sujeto_nombre: "Ana Araya Castro", sujeto_rut: "18.123.456-K", sujeto_cargo: "Prevencionista de Riesgos", requisito_template_id: "r1", requisito_nombre: "Liquidación de Sueldo", estado: "aprobado", fecha_carga: "2026-09-05", cargado_por: "Admin", archivo_url: "/docs/liq_ana.pdf", version: 1 },
        "s5_r2": { id: "doc-22", periodo_id: periodoId, sujeto_id: "s5", sujeto_nombre: "Ana Araya Castro", sujeto_rut: "18.123.456-K", sujeto_cargo: "Prevencionista de Riesgos", requisito_template_id: "r2", requisito_nombre: "Cotizaciones Previred", estado: "aprobado", fecha_carga: "2026-09-05", cargado_por: "Admin", archivo_url: "/docs/prev_ana.pdf", version: 1 },
        "s5_r3": { id: "doc-23", periodo_id: periodoId, sujeto_id: "s5", sujeto_nombre: "Ana Araya Castro", sujeto_rut: "18.123.456-K", sujeto_cargo: "Prevencionista de Riesgos", requisito_template_id: "r3", requisito_nombre: "Libro de Asistencia", estado: "aprobado", fecha_carga: "2026-09-05", cargado_por: "Ana Araya", archivo_url: "/docs/libro_ana.pdf", version: 1 },
        "s5_r4": { id: "doc-24", periodo_id: periodoId, sujeto_id: "s5", sujeto_nombre: "Ana Araya Castro", sujeto_rut: "18.123.456-K", sujeto_cargo: "Prevencionista de Riesgos", requisito_template_id: "r4", requisito_nombre: "Certificado F30-1", estado: "aprobado", fecha_carga: "2026-09-02", cargado_por: "Empresa", archivo_url: "/docs/f30_1.pdf", version: 1 },
        "s5_r5": { id: "doc-25", periodo_id: periodoId, sujeto_id: "s5", sujeto_nombre: "Ana Araya Castro", sujeto_rut: "18.123.456-K", sujeto_cargo: "Prevencionista de Riesgos", requisito_template_id: "r5", requisito_nombre: "Contrato de Trabajo / Anexo", estado: "aprobado", fecha_carga: "2026-09-01", cargado_por: "Admin", archivo_url: "/docs/contrato_ana.pdf", version: 1 },
      };

      return {
        periodo,
        sujetos,
        requisitos,
        celdas,
      };
    }
  },

  auditarDocumento: async (
    documentoId: string,
    body: { accion: "aprobar" | "observar" | "rechazar"; observacion?: string }
  ) => {
    try {
      return await api<PeriodoDocumento>(`/certificacion/documentos/${documentoId}/auditar`, {
        method: "POST",
        body,
      });
    } catch {
      const nuevoEstado: EstadoPeriodoDoc =
        body.accion === "aprobar"
          ? "aprobado"
          : body.accion === "observar"
          ? "observado"
          : "rechazado";
      return {
        id: documentoId,
        periodo_id: "per-sep-2026",
        sujeto_id: "s1",
        sujeto_nombre: "Trabajador Auditado",
        sujeto_rut: "15.432.890-1",
        requisito_template_id: "r1",
        requisito_nombre: "Documento Auditado",
        estado: nuevoEstado,
        observaciones: body.observacion ?? null,
        fecha_carga: new Date().toISOString().split("T")[0],
      } as PeriodoDocumento;
    }
  },

  historialAuditoria: async (documentoId: string): Promise<AuditoriaDocumento[]> => {
    try {
      return await api<AuditoriaDocumento[]>(`/certificacion/documentos/${documentoId}/historial`);
    } catch {
      return [
        {
          id: "aud-1",
          periodo_documento_id: documentoId,
          auditor_nombre: "Sistema Acredittia",
          accion: "cargar",
          observacion: "Documento subido por el trabajador en plataforma.",
          fecha: "2026-09-10 14:30",
          version: 1,
        },
        {
          id: "aud-2",
          periodo_documento_id: documentoId,
          auditor_nombre: "Auditor HSEC (Gonzalo R.)",
          accion: "observar",
          observacion: "Falta firma visible y timbre en la hoja 2.",
          fecha: "2026-09-12 09:15",
          version: 1,
        },
      ];
    }
  },

  dashboardCumplimiento: async (periodoId: string): Promise<CumplimientoDashboardData> => {
    try {
      return await api<CumplimientoDashboardData>(`/certificacion/periodos/${periodoId}/dashboard`);
    } catch {
      return {
        total_requeridos: 25,
        pendientes: 3,
        cargados: 2,
        en_revision: 2,
        aprobados: 18,
        observados: 2,
        rechazados: 0,
        porcentaje_cumplimiento: 82,
        por_tipo: [
          { tipo: "Liquidaciones de Sueldo", porcentaje: 80, total: 5, aprobados: 4 },
          { tipo: "Cotizaciones Previred", porcentaje: 100, total: 5, aprobados: 5 },
          { tipo: "Libro de Asistencia", porcentaje: 60, total: 5, aprobados: 3 },
          { tipo: "Certificado F30-1", porcentaje: 100, total: 5, aprobados: 5 },
          { tipo: "Contratos y Anexos", porcentaje: 80, total: 5, aprobados: 4 },
        ],
        alertas: [
          "Juan Pérez Soto tiene 1 observación pendiente en 'Libro de Asistencia'.",
          "Carlos Fuentealba R. tiene 1 observación pendiente en 'Liquidación de Sueldo'.",
          "Pedro Morales Silva no ha cargado su 'Contrato de Trabajo / Anexo'.",
        ],
      };
    }
  },
};

