Calculadora de Tiempo Trabajado
Aplicación web para calcular el tiempo trabajado a partir de documentos PDF, generar reportes en PDF/Word y almacenar resultados.
Requisitos

Python 3.9+
Git
Cuenta en GitHub
Cuenta en Vercel

Configuración Local

Clona el repositorio:git clone <URL_DEL_REPOSITORIO>
cd calculadora-tiempo-trabajo


Crea y activa un entorno virtual:python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate


Instala las dependencias:pip install -r backend/requirements.txt


Ejecuta el servidor:uvicorn backend.main:app --reload


Abre http://localhost:8000 en tu navegador.

Despliegue en Vercel

Sube el proyecto a GitHub:git add .
git commit -m "Inicial"
git push origin main


Conecta Vercel a tu repositorio:
Ve a vercel.com.
Crea un nuevo proyecto e importa tu repositorio.
Configura el directorio raíz como / y acepta las configuraciones predeterminadas.


Despliega el proyecto. Vercel detectará vercel.json y configurará todo automáticamente.

Uso

Selecciona un usuario (Usuario 1, 2 o 3).
Sube un archivo PDF.
Opcionalmente, ingresa una fecha de finalización (dd/mm/aa).
Haz clic en "Calcular" para ver los resultados y descargar los reportes.

