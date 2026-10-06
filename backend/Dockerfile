FROM python:3.11-slim

# Evitar prompts interactivos y buffering de python
ENV DEBIAN_FRONTEND=noninteractive \
    PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1

# Directorio de trabajo
WORKDIR /app

# Instalar dependencias del sistema necesarias para Scapy y herramientas de red WiFi
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libpcap-dev \
    tcpdump \
    wireless-tools \
    iw \
    net-tools \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Instalar dependencias de Python
COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# Copiar el código fuente del backend
COPY . .

# Exponer el puerto de la API FastAPI
EXPOSE 8000

# Comando de inicio del servidor
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
