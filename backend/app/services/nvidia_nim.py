import json
import logging
import os
from pathlib import Path

logger = logging.getLogger("acredittia.nvidia_nim")

def extraer_requisitos_job(file_path: str, contexto: str, payload_extraido: dict) -> None:
    """Simula la llamada a Nvidia NIM / OpenCode.
    Actualmente escribe los resultados en la carpeta ../Consultas.
    """
    try:
        # Construir la ruta relativa hacia ../Consultas/
        base_dir = Path(__file__).resolve().parent.parent.parent.parent.parent
        consultas_dir = base_dir / "Consultas"
        
        # Crear directorio si no existe
        consultas_dir.mkdir(parents=True, exist_ok=True)
        
        # Archivo de salida
        output_file = consultas_dir / f"ultimo_arranque_{contexto}.json"
        
        # Mock de request a IA (OpenCode/Nvidia NIM). En realidad aquÃ­ se harÃ­a 
        # un post request usando httpx a build.nvidia.com. 
        # Como es simulado, simplemente tomamos el payload_extraido y lo guardamos
        
        datos_para_cliente = {
            "mensaje": "Resultado extraÃ­do por Asistente IA (Mock OpenCode/Nvidia NIM)",
            "archivo_origen": file_path,
            "contexto": contexto,
            "resultados": payload_extraido
        }
        
        with open(output_file, "w", encoding="utf-8") as f:
            json.dump(datos_para_cliente, f, indent=2, ensure_ascii=False)
            
        logger.info(f"Resultados de IA escritos en {output_file}")
        
    except Exception as e:
        logger.error(f"Error en extraer_requisitos_job: {e}")


def revisar_documento_job(file_path: str, contexto: str, payload_extraido: dict) -> None:
    """Simula la revision de un documento regular usando IA.
    Guarda el resultado en la carpeta Consultas.
    """
    try:
        base_dir = Path(__file__).resolve().parent.parent.parent.parent.parent
        consultas_dir = base_dir / "Consultas"
        consultas_dir.mkdir(parents=True, exist_ok=True)
        output_file = consultas_dir / f"ultima_revision_doc.json"
        
        datos_para_cliente = {
            "mensaje": f"Resultado de revision por Asistente IA ({'Llama 3.2 NIM' if payload_extraido else 'Mock OpenCode/Nvidia NIM'})",
            "archivo_origen": file_path,
            "contexto": contexto,
            "resultados": payload_extraido
        }
        
        with open(output_file, "w", encoding="utf-8") as f:
            json.dump(datos_para_cliente, f, indent=2, ensure_ascii=False)
            
        logger.info(f"Resultados de IA de revision escritos en {output_file}")
        
    except Exception as e:
        logger.error(f"Error en revisar_documento_job: {e}")

