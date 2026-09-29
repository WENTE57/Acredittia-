import requests

url = "http://localhost:8001/api/v1/personal"
headers = {"Content-Type": "application/json"}
data = {
    "contrato_id": None,
    "nombre": "juan",
    "rut": "123432121",
    "cargo": None,
    "estado": "proc"
}

try:
    # Intentionally omitted token to see if it even reaches the route
    pass
