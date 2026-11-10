/*
 * SASO — Portafolio profesional
 * JavaScript vanilla: navegación móvil, animaciones al entrar en viewport,
 * y ficha modal accesible con galería para los cinco proyectos.
 */

const projects = {
  jugos: {
    number: "01",
    title: "Jugos Naturales y Medicinales",
    subtitle: "Usabilidad y accesibilidad",
    accent: "#f4a04f",
    tags: ["UX/UI", "Usabilidad", "Accesibilidad", "Prototipado"],
    gallery: [
      { file: "Portada.png", label: "Portada del proyecto" },
      { file: "Analisis.png", label: "01 · Análisis" },
      { file: "Desarrollo.png", label: "02 · Desarrollo" },
      { file: "Resultado.png", label: "03 · Resultado" }
    ],
    description: "Análisis y propuesta de mejora de una aplicación desarrollada por InnovaSoft Apps, disponible en Google Play Store, cuyo propósito es ofrecer recetas de jugos naturales con propiedades medicinales según las preferencias y necesidades del usuario.",
    analysis: "La aplicación presentaba dificultades de organización, jerarquía visual y navegación. La ausencia de búsqueda y filtrado, los bloques extensos de texto, la poca separación entre elementos y la falta de consistencia entre pantallas afectaban la consulta de las recetas.",
    development: "Se utilizaron un mapa de empatía y una ficha de user persona para comprender la perspectiva y las necesidades del usuario objetivo. A partir de ese análisis se trabajaron decisiones de diseño relacionadas con la paleta de color, búsqueda, organización, configuración e iconografía.",
    result: "La propuesta reorganiza la jerarquía y distribución de los elementos, establece una estructura visual consistente e incorpora búsqueda por ingredientes o beneficios. También simplifica la navegación mediante secciones e iconografía diferenciadas. El resultado se presenta como un prototipo visual e interactivo.",
    note: "El proyecto documenta una propuesta de rediseño UX/UI y su prototipo; no se presenta como una aplicación publicada por la autora."
  },
  dossier: {
    number: "02",
    title: "Diseño de Dossier de Ventas",
    subtitle: "Producción multimedia · Universo Cacciatori",
    accent: "#a40f19",
    tags: ["Diseño editorial", "Identidad visual", "Narrativa", "Flipbook"],
    gallery: [
      { file: "Portada.png", label: "Portada del proyecto" },
      { file: "Analisis.png", label: "01 · Análisis" },
      { file: "Desarrollo.png", label: "02 · Desarrollo" },
      { file: "Resultado.png", label: "03 · Resultado" }
    ],
    description: "Diseño de una pieza editorial para presentar el proyecto audiovisual Cacciatori y comunicar sus aspectos principales de forma clara, visual y atractiva. El dossier reúne identidad, concepto, público, personajes, narrativa y marketing dentro de una misma propuesta.",
    analysis: "La investigación se centró en comprender el universo de terror psicológico de Cacciatori, su público y los referentes que definen su atmósfera. El concepto se construye desde el contraste entre la elegancia de la alta cocina y el horror, que evoluciona progresivamente del orden al caos. El público definido corresponde a adultos jóvenes de 18 a 35 años.",
    development: "El proyecto pasó de L’Angolo a Cacciatori para construir una identidad propia y reforzar la idea de acecho presente en la narrativa. La identidad visual se desarrolló desde el concepto “El Secreto del Corte”, combinando códigos de la alta cocina italiana con elementos de terror. Se registran las tipografías Monellos y Who asks Satan, y los colores rojo, verde, blanco y negro. La composición cambia junto con la historia: inicia limpia y elegante y se deforma progresivamente.",
    result: "El concept art, el moodboard, los personajes y la narrativa se integraron en una propuesta editorial con jerarquía y continuidad visual. La selección de imágenes, tipografías, recursos gráficos y composición trasladó la identidad de Cacciatori al dossier, presentado como flipbook.",
    note: "El contenido y el público se describen según el dossier incluido en el portafolio."
  },
  burger: {
    number: "03",
    title: "Mr. Burguer Good",
    subtitle: "Diseño y desarrollo de sitio web",
    accent: "#efc31e",
    tags: ["Diseño web", "HTML", "CSS", "JavaScript", "GitHub"],
    gallery: [
      { file: "Portada.png", label: "Portada del proyecto" },
      { file: "Analisis.png", label: "01 · Análisis" },
      { file: "Desarrollo.png", label: "02 · Desarrollo" },
      { file: "Resultado.png", label: "03 · Resultado" }
    ],
    description: "Diseño y desarrollo web para una cadena ficticia de restaurantes de hamburguesas. La propuesta construye una presencia digital para la marca e integra la presentación de productos, información de locales y opciones de pedido.",
    analysis: "El concepto del sitio debía tener una estética moderna, llamativa y dinámica, capaz de destacar los productos y transmitir la personalidad de la marca. Cada página debía conservar una identidad gráfica coherente y cumplir una función específica.",
    development: "La propuesta partió de una paleta de negro, púrpura y dorado, que evolucionó hacia negro, amarillo y naranja durante la implementación. Se definieron arquitectura visual y composición de contenidos en Figma. La maquetación se realizó con HTML, CSS y JavaScript bajo una estructura modular, y el trabajo en equipo se gestionó con GitHub y control de versiones.",
    result: "Se desarrollaron las páginas de inicio, menú, locales, pedidos y buzón de sugerencias. La plataforma integra fotografías de productos, carruseles, botones, iconografía y navegación. Entre sus interacciones se encuentran el carrusel de inicio, la navegación entre páginas y un carrito que permite agregar, eliminar y consultar el total de los productos seleccionados.",
    note: "El proyecto se describe como una plataforma para una marca ficticia; el portafolio documenta trabajo realizado en equipo."
  },
  sustancia: {
    number: "04",
    title: "Creación de tráiler de La Sustancia",
    subtitle: "Edición de audio y video",
    accent: "#b31c98",
    tags: ["Edición", "Montaje", "Tipografía", "Audio"],
    gallery: [
      { file: "Portada.png", label: "Portada del proyecto" },
      { file: "Analisis.png", label: "01 · Análisis" },
      { file: "Desarrollo.png", label: "02 · Desarrollo" },
      { file: "Resultado.png", label: "03 · Resultado" }
    ],
    description: "Creación de un tráiler a partir de la película La Sustancia. El reto consistía en condensar su universo en una pieza audiovisual que despertara curiosidad y anticipara una atmósfera inquietante sin revelar toda la historia.",
    analysis: "La propuesta toma como punto de partida el contraste entre la estética de la belleza idealizada y las imágenes de transformación y horror corporal. El público objetivo corresponde a espectadores interesados en el cine de terror, el horror corporal y las propuestas audiovisuales con tensión psicológica y reflexiones sobre belleza e identidad.",
    development: "Se investigó la tipografía de referencia de la película para conservar su identidad visual en títulos y créditos. Se recopilaron clips de momentos relevantes y visualmente impactantes. La música característica de la película sirvió como guía para establecer el ritmo; los cortes se sincronizaron con ella y se aplicaron efectos a textos y títulos, tomando como inspiración secuencias de créditos de Kyle Cooper.",
    result: "El tráiler integra selección de escenas, tipografía y montaje musical en una pieza continua y dinámica. Combina planos de la película, detalles corporales y escenas de su universo visual para presentar el contraste entre la búsqueda de perfección y sus consecuencias.",
    note: "La sección de Demo Reel del sitio es independiente de este proyecto y queda preparada para incorporar una compilación audiovisual propia."
  },
  cacciatori: {
    number: "05",
    title: "Creación de Universo Multimedia",
    subtitle: "Ingeniería en Multimedia · Cacciatori / Yomi Studio",
    accent: "#e31b27",
    tags: ["Transmedia", "Narrativa", "Videojuego", "Identidad visual"],
    gallery: [
      { file: "Portada.png", label: "Portada del proyecto" },
      { file: "Analisis.png", label: "01 · Análisis" },
      { file: "Desarrollo.png", label: "02 · Desarrollo" },
      { file: "Resultado.png", label: "03 · Resultado" }
    ],
    description: "Desarrollo de un universo narrativo de ficción propio centrado en el terror psicológico. Cacciatori tomó como inspiración la leyenda urbana bogotana de L’Angolo di Gigi, asociada a rumores sobre el uso de carne humana en un restaurante italiano.",
    analysis: "El reto consistía en construir una historia coherente, definir sus personajes y establecer una identidad visual capaz de conectar diferentes productos y experiencias multimedia. El público objetivo se definió como adultos jóvenes de 18 a 35 años interesados en terror psicológico, suspenso, videojuegos, historias basadas en crímenes reales, leyendas urbanas y narrativas transmedia.",
    development: "Se creó Yomi Studio como estudio enfocado en la creación, producción y desarrollo de productos multimedia. Su identidad toma como referencia el concepto japonés de Yomi, asociado al mundo de los muertos, y lo relaciona con la idea de gula y disfrute por la comida. Se estableció una historia principal ambientada en la actualidad y relatos complementarios para explorar otros momentos y personajes.",
    result: "El universo se expandió mediante el videojuego Cacciatori como producto principal, el juego de mesa Prede, un teaser audiovisual, la narrativa interactiva Secretos de Cacciatori en Twine y el cómic Ossessione. Twine profundiza en la infancia del Chef Cacciatori; Ossessione presenta a Natalia, una admiradora que desarrolla una obsesión con el Chef. También se plantea un espacio web para presentar Yomi Studio, sus servicios y el universo Cacciatori.",
    note: "El portafolio presenta el espacio web como una propuesta planteada y no como un sitio ya publicado."
  }
};

const projectFolders = {
  jugos: "jugos",
  dossier: "dossier-cacciatori",
  burger: "mr-burger-good",
  sustancia: "la-sustancia",
  cacciatori: "universo-cacciatori"
};

// Menú responsive.
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

function closeMenu() {
  if (!menuToggle || !mainNav) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menú");
  mainNav.classList.remove("is-open");
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
    mainNav.classList.toggle("is-open", !isOpen);
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

// Música de fondo, iniciada únicamente por interacción del usuario.
const backgroundAudio = document.querySelector("#background-audio");
const audioToggle = document.querySelector("#audio-toggle");
const audioToggleIcon = audioToggle?.querySelector(".audio-toggle-icon");
const audioVolume = document.querySelector("#audio-volume");
const audioStatus = document.querySelector("#audio-status");

if (backgroundAudio && audioToggle && audioToggleIcon && audioVolume && audioStatus) {
  backgroundAudio.volume = Number(audioVolume.value);

  const updateAudioControls = () => {
    const isPlaying = !backgroundAudio.paused && backgroundAudio.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA;
    audioToggle.setAttribute("aria-pressed", String(isPlaying));
    audioToggle.setAttribute("aria-label", isPlaying ? "Pausar música de fondo" : "Reproducir música de fondo");
    audioToggleIcon.textContent = isPlaying ? "Ⅱ" : "▶";
    audioStatus.textContent = isPlaying ? "Reproduciendo" : "En pausa";
  };

  audioToggle.addEventListener("click", async () => {
    if (window.location.protocol === "file:") {
      audioStatus.textContent = "Abre con Live Server";
      return;
    }

    if (!backgroundAudio.paused) {
      backgroundAudio.pause();
      return;
    }

    audioStatus.textContent = "Cargando música…";
    try {
      await backgroundAudio.play();
    } catch (error) {
      if (backgroundAudio.paused && error instanceof DOMException && error.name === "AbortError") return;
      audioToggle.setAttribute("aria-pressed", "false");
      audioToggle.setAttribute("aria-label", "Reproducir música de fondo");
      audioToggleIcon.textContent = "▶";
      audioStatus.textContent = "No se pudo reproducir la pista";
      console.error("No se pudo iniciar la música de fondo.", error);
    }
  });

  backgroundAudio.addEventListener("playing", updateAudioControls);
  backgroundAudio.addEventListener("pause", updateAudioControls);
  backgroundAudio.addEventListener("error", () => {
    audioToggle.setAttribute("aria-pressed", "false");
    audioToggle.setAttribute("aria-label", "Reproducir música de fondo");
    audioToggleIcon.textContent = "▶";
    audioStatus.textContent = "No se pudo cargar la pista";
  });
  audioVolume.addEventListener("input", () => {
    backgroundAudio.volume = Number(audioVolume.value);
  });
}

// Aparición progresiva de los bloques al desplazarse.
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

// Balanceo físico de la credencial del hero.
const idCardScene = document.querySelector("[data-id-card-scene]");
const idCard = idCardScene?.querySelector(".id-card-hanger");

if (idCardScene && idCard) {
  let angle = 0;
  let angularVelocity = 0;
  let animationFrame = 0;
  let activePointer = null;
  let pointerStartAngle = 0;
  let cardStartAngle = 0;
  let previousMoveTime = 0;
  let dragMoved = false;
  let suppressClick = false;

  const clampAngle = (value) => Math.max(-55, Math.min(55, value));
  const pointerAngle = (event) => {
    const bounds = idCardScene.getBoundingClientRect();
    const anchorX = bounds.left + bounds.width / 2;
    const anchorY = bounds.top + 13;
    return Math.atan2(event.clientX - anchorX, event.clientY - anchorY) * (180 / Math.PI);
  };
  const setAngle = (value) => {
    angle = clampAngle(value);
    idCard.style.setProperty("--card-angle", `${angle}deg`);
  };
  const animateSwing = (time) => {
    const delta = Math.min((time - previousMoveTime) / 1000, 0.032);
    previousMoveTime = time;
    angularVelocity += -90 * Math.sin(angle * (Math.PI / 180)) * delta;
    angularVelocity *= Math.exp(-5.4 * delta);
    setAngle(angle + angularVelocity * delta);

    if (Math.abs(angle) < 0.08 && Math.abs(angularVelocity) < 0.5) {
      setAngle(0);
      angularVelocity = 0;
      animationFrame = 0;
      return;
    }
    animationFrame = window.requestAnimationFrame(animateSwing);
  };
  const startSwing = () => {
    if (!animationFrame) {
      previousMoveTime = performance.now();
      animationFrame = window.requestAnimationFrame(animateSwing);
    }
  };
  const releaseCard = (event) => {
    if (event.pointerId !== activePointer) return;
    activePointer = null;
    suppressClick = dragMoved;
    idCard.classList.remove("is-dragging");
    startSwing();
  };

  idCard.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 && event.pointerType === "mouse") return;
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    }
    activePointer = event.pointerId;
    pointerStartAngle = pointerAngle(event);
    cardStartAngle = angle;
    dragMoved = false;
    suppressClick = false;
    angularVelocity = 0;
    previousMoveTime = performance.now();
    idCard.classList.add("is-dragging");
    idCard.setPointerCapture(event.pointerId);
    event.preventDefault();
  });

  idCard.addEventListener("pointermove", (event) => {
    if (event.pointerId !== activePointer) return;
    const pointerDelta = pointerAngle(event) - pointerStartAngle;
    if (Math.abs(pointerDelta) > 1) dragMoved = true;
    const nextAngle = clampAngle(cardStartAngle - pointerDelta);
    const now = performance.now();
    const delta = Math.max((now - previousMoveTime) / 1000, 0.001);
    angularVelocity = Math.max(-120, Math.min(120, (nextAngle - angle) / delta));
    previousMoveTime = now;
    setAngle(nextAngle);
  });

  idCard.addEventListener("pointerup", releaseCard);
  idCard.addEventListener("pointercancel", releaseCard);
  idCard.addEventListener("lostpointercapture", releaseCard);
  idCard.addEventListener("click", (event) => {
    if (suppressClick && event.detail > 0) {
      event.preventDefault();
      suppressClick = false;
      return;
    }
    suppressClick = false;
    const isFlipped = idCard.classList.toggle("is-flipped");
    idCard.setAttribute(
      "aria-label",
      isFlipped
        ? "Reverso del carné. Haz clic para volver al retrato."
        : "Carné con tu foto al frente y tu tarjeta al reverso. Arrastra para balancearlo, haz clic para girarlo o usa las flechas del teclado."
    );
  });
  idCard.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    angularVelocity += event.key === "ArrowLeft" ? 150 : -150;
    startSwing();
  });
}

// Utilidades para construir el contenido del diálogo sin inyectar HTML dinámico.
const dialog = document.querySelector("#project-dialog");
const dialogContent = document.querySelector("#dialog-content");
const dialogShell = document.querySelector(".dialog-shell");
const dialogClose = document.querySelector(".dialog-close");
let activeProject = null;
let activeGalleryIndex = 0;
let lastTrigger = null;

function createElement(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function createStoryBlock(number, title, copy) {
  const block = createElement("section", "story-block");
  const heading = createElement("h3");
  heading.append(createElement("span", "", number), document.createTextNode(title));
  block.append(heading, createElement("p", "", copy));
  return block;
}

function updateGallery() {
  if (!activeProject || !dialogContent) return;
  const current = activeProject.gallery[activeGalleryIndex];
  const image = dialogContent.querySelector(".dialog-gallery-frame img");
  const caption = dialogContent.querySelector(".gallery-caption");
  const counter = dialogContent.querySelector(".gallery-counter");
  const base = `assets/images/projects/${projectFolders[activeProject.key]}/`;
  image.src = base + current.file;
  image.alt = `${activeProject.title}: ${current.label.toLowerCase()}`;
  caption.textContent = current.label;
  counter.textContent = `${String(activeGalleryIndex + 1).padStart(2, "0")} / ${String(activeProject.gallery.length).padStart(2, "0")}`;
}

function moveGallery(direction) {
  if (!activeProject) return;
  const length = activeProject.gallery.length;
  activeGalleryIndex = (activeGalleryIndex + direction + length) % length;
  updateGallery();
}

function renderProject(project, key) {
  activeProject = { ...project, key };
  activeGalleryIndex = 0;
  dialogShell.style.setProperty("--dialog-accent", project.accent);
  dialogContent.replaceChildren();

  const heading = createElement("header", "dialog-heading");
  const headingText = createElement("div");
  headingText.append(
    createElement("span", "dialog-number", `${project.number} / PROYECTO`),
    createElement("h2", "", project.title),
    createElement("p", "dialog-subtitle", project.subtitle)
  );
  const tagList = createElement("div", "dialog-tags");
  project.tags.forEach((tag) => tagList.append(createElement("span", "", tag)));
  heading.append(headingText, tagList);

  const grid = createElement("div", "dialog-grid");
  const gallery = createElement("div", "dialog-gallery");
  const frame = createElement("div", "dialog-gallery-frame");
  const galleryImage = document.createElement("img");
  galleryImage.loading = "eager";
  galleryImage.decoding = "async";
  frame.append(galleryImage);
  const controls = createElement("div", "gallery-controls");
  const captionGroup = createElement("div");
  captionGroup.append(
    createElement("span", "gallery-caption"),
    createElement("span", "gallery-counter")
  );
  const actions = createElement("div", "gallery-actions");
  const previous = createElement("button", "", "←");
  previous.type = "button";
  previous.setAttribute("aria-label", "Imagen anterior");
  previous.addEventListener("click", () => moveGallery(-1));
  const next = createElement("button", "", "→");
  next.type = "button";
  next.setAttribute("aria-label", "Imagen siguiente");
  next.addEventListener("click", () => moveGallery(1));
  actions.append(previous, next);
  controls.append(captionGroup, actions);
  gallery.append(frame, controls);

  const story = createElement("div", "dialog-story");
  story.append(
    createElement("p", "dialog-description", project.description),
    createStoryBlock("01", "Análisis", project.analysis),
    createStoryBlock("02", "Desarrollo", project.development),
    createStoryBlock("03", "Resultado", project.result)
  );
  grid.append(gallery, story);

  const note = createElement("p", "dialog-note", project.note);
  dialogContent.append(heading, grid, note);
  updateGallery();
}

if (dialog && dialogContent && dialogShell) {
  document.querySelectorAll("[data-project]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const key = trigger.dataset.project;
      const project = projects[key];
      if (!project) return;
      lastTrigger = trigger;
      renderProject(project, key);
      dialog.showModal();
      document.body.classList.add("dialog-open");
      dialogClose?.focus();
    });
  });

  dialogClose?.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
    if (lastTrigger && document.contains(lastTrigger)) lastTrigger.focus();
  });
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") moveGallery(-1);
    if (event.key === "ArrowRight") moveGallery(1);
  });
}

// Año automático en el pie de página.
const yearNode = document.querySelector("#current-year");
if (yearNode) yearNode.textContent = String(new Date().getFullYear());
