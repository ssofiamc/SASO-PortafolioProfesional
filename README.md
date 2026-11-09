# SASO — Portafolio profesional

Sitio web estático de Sara Sofia Moreno Castro. Está construido con HTML5, CSS3 y JavaScript vanilla, sin dependencias de compilación ni instalación de paquetes. Está preparado para publicarse directamente desde GitHub Pages.

## Estructura

```text
SASO-PortafolioProfesional/
├── index.html
├── README.md
├── .nojekyll
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    ├── docs/
    │   └── HV_SSMC.pdf
    ├── images/
    │   ├── brand/
    │   │   ├── favicon.svg
    │   │   └── saso-cover.jpg
    │   ├── custom/
    │   │   └── README.txt
    │   └── projects/
    │       ├── jugos/
    │       ├── dossier-cacciatori/
    │       ├── mr-burger-good/
    │       ├── la-sustancia/
    │       └── universo-cacciatori/
    └── video/
        └── README.txt
```

Cada carpeta de proyecto contiene cuatro imágenes extraídas y optimizadas del PDF: `portada.jpg`, `analisis.jpg`, `desarrollo.jpg` y `resultado.jpg`. Se utilizan en las tarjetas y en la galería de detalle.

## Publicar en GitHub Pages

1. Crea el repositorio **SASO-PortafolioProfesional** en GitHub.
2. Sube el contenido de esta carpeta a la raíz del repositorio. Es importante que `index.html` quede en la raíz, no dentro de otra carpeta.
3. Abre **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Selecciona la rama `main` y la carpeta `/ (root)`, y guarda.
6. Cuando GitHub Pages termine el despliegue, la web estará disponible en la URL que GitHub indique. Para un repositorio de proyecto normalmente tendrá esta forma: `https://TU-USUARIO.github.io/SASO-PortafolioProfesional/`.

No necesitas cambiar rutas ni configurar una carpeta `dist`: todos los enlaces a archivos internos son relativos y funcionan bajo la ruta del repositorio.

## Actualizar imágenes y recursos

- **Imágenes de proyectos:** reemplaza los JPG dentro de `assets/images/projects/[carpeta-del-proyecto]/`. Conserva los nombres de archivo para no modificar el código.
- **Gráficos propios:** usa `assets/images/custom/` para ilustraciones, vectores exportados, texturas o recursos adicionales. Si agregas uno a la página, enlázalo desde `index.html` con una ruta relativa.
- **Hoja de vida:** reemplaza `assets/docs/HV_SSMC.pdf` por la versión actualizada conservando el mismo nombre. El botón de descarga ya apunta a esa ruta.
- **Demo Reel:** copia el video final en `assets/video/demo-reel.mp4`. Después abre `index.html`: cambia `data-src` por `src` en el elemento `<source data-src="assets/video/demo-reel.mp4">`, elimina `hidden` del elemento `<video id="demo-reel-video">` y añade `hidden` al contenedor `<div id="reel-placeholder">`. El reproductor nativo ya está configurado para controles y reproducción en línea.
- **Datos de contacto:** actualiza los enlaces del bloque `id="contacto"` en `index.html` cuando cambien.

## Personalizar contenido de los proyectos

Las fichas ampliadas y las galerías se encuentran en `assets/js/main.js`, dentro del objeto `projects`. Cada ficha tiene descripción, análisis, desarrollo, resultado, etiquetas, color identificador y las cuatro imágenes de su galería. Las tarjetas se encuentran en `index.html` y se vinculan con cada ficha mediante `data-project`.

Los colores individuales de proyecto están definidos en `index.html` mediante `--project-accent` y en `assets/js/main.js` mediante `accent`:

| Proyecto | Color identificador |
|---|---|
| Jugos Naturales y Medicinales | Naranja |
| Dossier de Ventas / Cacciatori | Rojo oscuro |
| Mr. Burguer Good | Amarillo |
| La Sustancia | Magenta |
| Universo Cacciatori | Rojo |

## Consideraciones

- El diseño es responsive y contempla navegación móvil, movimiento reducido del sistema, foco visible y un diálogo accesible para el detalle de los proyectos.
- La animación de entrada usa `IntersectionObserver`; el resto del sitio continúa funcionando si el navegador no lo soporta.
- Las tipografías Barlow Condensed y DM Sans se cargan desde Google Fonts. Si no hay conexión, se usan alternativas del sistema.
- El PDF original del portafolio no se incluye en el repositorio porque pesa aproximadamente 368 MB, por encima del límite de 100 MB por archivo de GitHub. En su lugar se incluyen imágenes web optimizadas de las páginas de cada proyecto. La hoja de vida original sí está incluida en `assets/docs/`.
- No se añadieron enlaces de demostración para proyectos que no muestran una URL pública en los documentos de origen.

## Ejecutar localmente

Puedes abrir `index.html` directamente en el navegador. Para probarlo con un servidor local, desde esta carpeta ejecuta:

```bash
python -m http.server 8000
```

Luego visita `http://localhost:8000`.
