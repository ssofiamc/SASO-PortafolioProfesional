DEMO REEL

Copia aquí el video final con el nombre exacto:
  demo-reel.mp4

Después, en index.html:
1. En el elemento <source data-src="assets/video/demo-reel.mp4">, cambia `data-src` por `src`.
2. En el elemento `<video id="demo-reel-video">`, elimina el atributo `hidden`.
3. Añade el atributo `hidden` al contenedor `<div id="reel-placeholder">`.

El elemento <source> conserva la ruta relativa en `data-src` para evitar una solicitud fallida mientras el video todavía no existe.
