
# 🎨 Generador de Paletas de Colores

Aplicación web interactiva que permite generar paletas de colores aleatorias en distintos formatos (HEX, HSL, RGBA), con una interfaz simple y responsive.

---

## 🚀 Instrucciones de uso (Manual de usuario)

1. Seleccioná la cantidad de colores (6, 8 o 9).
2. Hacé click en el botón **"Generar nueva paleta"**.
3. Visualizá la paleta generada en pantalla.
4. Elegí el formato de color (HEX, HSL o RGBA).
5. Hacé click sobre cualquier color para copiar su código.

---

## 🛠️ Decisiones técnicas (Manual técnico)

- **Lenguajes utilizados:** HTML, CSS y JavaScript (sin frameworks).
- **Arquitectura simple:** Separación de responsabilidades en 3 archivos:
  - `index.html` → estructura de la app  
  - `styles.css` → estilos, layout y responsive  
  - `script.js` → lógica de generación y eventos  
- **Generación de colores:**
  - Uso de valores aleatorios RGB.
  - Conversión manual a HSL.
  - Formateo a HEX y RGBA.
- **Interactividad:**
  - Eventos `click` y `change` para manejar selección y generación.
  - Feedback visual dinámico (mensajes y animaciones).
- **Responsive design:**
  - Uso de media queries para adaptar la grilla de la paleta según el dispositivo.
- **UX/UI:**
  - Microinteracciones (hover, copiado, feedback).
  - Diseño minimalista enfocado en claridad.

---

## 💻 Ejecución local

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
```
---

## 💻 Pasos para descargar y ejecutar la aplicación de forma local

Seguí estos pasos aunque no tengas experiencia en programación:

1. **Descargar el proyecto**
   - Entrá al repositorio de GitHub.
   - Hacé click en el botón verde **"Code"**.
   - Seleccioná **"Download ZIP"**.
   - Se va a descargar un archivo comprimido en tu computadora.

2. **Descomprimir el archivo**
   - Buscá el archivo descargado (generalmente en "Descargas").
   - Hacé click derecho → **"Extraer todo"** o **"Descomprimir"**.
   - Se va a crear una carpeta con el proyecto.

3. **Abrir la aplicación**
   - Entrá a la carpeta que se creó.
   - Buscá el archivo llamado **index.html**.
   - Hacé doble click sobre ese archivo.
   - Se va a abrir automáticamente en tu navegador.

👉 Listo. Ya podés usar la app sin instalar nada más.

---

## 🌐 Acceso a la aplicación online

1. Hacé click en el siguiente enlace:

👉 **[VER APLICACIÓN ONLINE](ACA_VAS_A_PONER_TU_LINK_DE_GITHUB_PAGES)**

2. El sitio se va a abrir automáticamente en tu navegador.

👉 No necesitás descargar ni instalar nada. Podés usar la app directamente desde el link.

---

## 🚧 Posibles mejoras

- **Bloqueo de colores (lock):** permitir fijar un color para no perderlo al generar nuevas paletas.
- **Exportación de paletas:** descargar en formatos como PNG o guardar como archivo JSON.
- **Historial de paletas:** guardar combinaciones generadas previamente.
- **Accesibilidad:** mejorar contraste y agregar etiquetas para lectores de pantalla.
- **Copiado múltiple:** opción para copiar toda la paleta de una vez.
- **Modo oscuro/claro:** toggle de tema visual.
- **Animaciones más avanzadas:** transiciones más suaves al generar nuevas paletas.
- **Persistencia de datos:** guardar selección del usuario en localStorage.
- **Optimización mobile:** mejorar distribución y tamaño de elementos en pantallas pequeñas.
- **Internacionalización:** soporte para múltiples idiomas.

👉 Estas mejoras permiten llevar la app a un nivel más profesional y listo para producción.