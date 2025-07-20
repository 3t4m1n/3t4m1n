/*
   FUNCIONALIDAD DE LA GALERÍA DE IMÁGENES
   Lightbox interactivo con búsqueda y filtros
*/

// Datos de las imágenes de la galería
const imagenesGaleria = [
  {
    id: "abbey-road-cover",
    titulo: "Abbey Road - The Beatles",
    artista: "The Beatles",
    categoria: "portadas-iconicas",
    etiquetas: ["Beatles", "Rock", "Portada", "Icónica"],
    descripcion:
      "La icónica portada de Abbey Road, fotografiada por Iain Macmillan en 1969. Los cuatro Beatles cruzando la calle se convirtió en una de las imágenes más reconocibles de la música.",
    imagen: "/placeholder.svg?height=400&width=400",
    año: "1969",
  },
  {
    id: "woodstock-crowd",
    titulo: "Multitud en Woodstock",
    artista: "Festival de Woodstock",
    categoria: "eventos-historicos",
    etiquetas: ["Woodstock", "Festival", "1969", "Hippie"],
    descripcion:
      "La masiva multitud que se reunió en Woodstock en 1969, creando uno de los momentos más icónicos de la historia de la música.",
    imagen: "/placeholder.svg?height=400&width=600",
    año: "1969",
  },
  {
    id: "hendrix-guitar",
    titulo: "Jimi Hendrix en Woodstock",
    artista: "Jimi Hendrix",
    categoria: "actuaciones-legendarias",
    etiquetas: ["Hendrix", "Guitarra", "Woodstock", "Rock"],
    descripcion:
      "Jimi Hendrix tocando su legendaria versión del himno nacional estadounidense en Woodstock, un momento que definió una generación.",
    imagen: "/placeholder.svg?height=500&width=400",
    año: "1969",
  },
  {
    id: "elvis-portrait",
    titulo: "El Rey del Rock and Roll",
    artista: "Elvis Presley",
    categoria: "retratos-iconicos",
    etiquetas: ["Elvis", "Rock and Roll", "Rey", "Retrato"],
    descripcion:
      "Un retrato icónico de Elvis Presley, el hombre que cambió la música popular para siempre y se ganó el título de Rey del Rock and Roll.",
    imagen: "/placeholder.svg?height=500&width=400",
    año: "1956",
  },
  {
    id: "dark-side-moon",
    titulo: "The Dark Side of the Moon",
    artista: "Pink Floyd",
    categoria: "portadas-iconicas",
    etiquetas: ["Pink Floyd", "Prisma", "Portada", "Progresivo"],
    descripcion:
      "La portada minimalista pero poderosa de The Dark Side of the Moon, diseñada por Storm Thorgerson, se convirtió en un símbolo del rock progresivo.",
    imagen: "/placeholder.svg?height=400&width=400",
    año: "1973",
  },
  {
    id: "live-aid-queen",
    titulo: "Queen en Live Aid",
    artista: "Queen",
    categoria: "actuaciones-legendarias",
    etiquetas: ["Queen", "Live Aid", "Freddie Mercury", "Concierto"],
    descripcion:
      "La legendaria actuación de Queen en Live Aid 1985, considerada una de las mejores presentaciones en vivo de la historia del rock.",
    imagen: "/placeholder.svg?height=400&width=600",
    año: "1985",
  },
  {
    id: "nevermind-cover",
    titulo: "Nevermind - Nirvana",
    artista: "Nirvana",
    categoria: "portadas-iconicas",
    etiquetas: ["Nirvana", "Grunge", "Nevermind", "90s"],
    descripcion:
      "La controvertida pero icónica portada de Nevermind de Nirvana, que capturó el espíritu del grunge y los años 90.",
    imagen: "/placeholder.svg?height=400&width=400",
    año: "1991",
  },
  {
    id: "bob-dylan-electric",
    titulo: "Dylan se vuelve eléctrico",
    artista: "Bob Dylan",
    categoria: "eventos-historicos",
    etiquetas: ["Bob Dylan", "Folk", "Eléctrico", "Newport"],
    descripcion:
      "El momento controvertido cuando Bob Dylan tocó con guitarra eléctrica en el Newport Folk Festival de 1965, cambiando la música folk para siempre.",
    imagen: "/placeholder.svg?height=400&width=500",
    año: "1965",
  },
  {
    id: "madonna-portrait",
    titulo: "La Reina del Pop",
    artista: "Madonna",
    categoria: "retratos-iconicos",
    etiquetas: ["Madonna", "Pop", "Reina", "80s"],
    descripcion:
      "Madonna en su época dorada de los 80s, cuando se estableció como la Reina del Pop y revolucionó la industria musical.",
    imagen: "/placeholder.svg?height=500&width=400",
    año: "1984",
  },
  {
    id: "thriller-cover",
    titulo: "Thriller - Michael Jackson",
    artista: "Michael Jackson",
    categoria: "portadas-iconicas",
    etiquetas: ["Michael Jackson", "Thriller", "Pop", "Rey"],
    descripcion:
      "La portada del álbum más vendido de todos los tiempos, Thriller de Michael Jackson, que definió los años 80.",
    imagen: "/placeholder.svg?height=400&width=400",
    año: "1982",
  },
  {
    id: "johnny-cash-prison",
    titulo: "Johnny Cash en Folsom Prison",
    artista: "Johnny Cash",
    categoria: "actuaciones-legendarias",
    etiquetas: ["Johnny Cash", "Country", "Prisión", "Live"],
    descripcion:
      "Johnny Cash actuando en la prisión de Folsom en 1968, una de las grabaciones en vivo más influyentes de la historia del country.",
    imagen: "/placeholder.svg?height=400&width=500",
    año: "1968",
  },
  {
    id: "kraftwerk-robots",
    titulo: "Kraftwerk - Los Robots",
    artista: "Kraftwerk",
    categoria: "retratos-iconicos",
    etiquetas: ["Kraftwerk", "Electrónica", "Robots", "Alemán"],
    descripcion:
      "Los pioneros alemanes de la música electrónica Kraftwerk, fotografiados con su estética robótica característica.",
    imagen: "/placeholder.svg?height=400&width=500",
    año: "1978",
  },
]

// Estado de la galería
const estadoGaleria = {
  categoriaActiva: "todas",
  terminoBusqueda: "",
  imagenActual: 0,
  imagenesVisibles: [],
  lightboxAbierto: false,
}

// Inicialización cuando el DOM está listo
document.addEventListener("DOMContentLoaded", () => {
  inicializarGaleria()
  configurarEventos()
  renderizarImagenes()
})

// Función principal de inicialización
function inicializarGaleria() {
  estadoGaleria.imagenesVisibles = [...imagenesGaleria]
}

// Configurar event listeners
function configurarEventos() {
  // Filtros de categoría
  const botonesFiltro = document.querySelectorAll(".boton-filtro")
  botonesFiltro.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      const categoria = e.target.getAttribute("data-categoria")
      cambiarFiltro(categoria)
    })
  })

  // Búsqueda
  const campoBusqueda = document.getElementById("campoBusqueda")
  if (campoBusqueda) {
    campoBusqueda.addEventListener("input", debounce(manejarBusqueda, 300))
  }

  // Lightbox
  configurarLightbox()

  // Navegación con teclado
  document.addEventListener("keydown", manejarTeclado)
}

// Renderizar grid de imágenes
function renderizarImagenes() {
  const grid = document.getElementById("gridImagenes")
  const mensajeSinResultados = document.getElementById("mensajeSinResultados")

  if (estadoGaleria.imagenesVisibles.length === 0) {
    grid.style.display = "none"
    mensajeSinResultados.style.display = "block"
    return
  }

  grid.style.display = "grid"
  mensajeSinResultados.style.display = "none"

  grid.innerHTML = estadoGaleria.imagenesVisibles
    .map(
      (imagen, index) => `
        <div class="tarjeta-imagen tarjeta-magica" data-index="${index}">
            <div class="contenedor-imagen">
                <img class="imagen-galeria" src="${imagen.imagen}" alt="${imagen.titulo}" loading="lazy">
                <div class="overlay-imagen-galeria">
                    <span class="icono-expandir">🔍</span>
                </div>
            </div>
            <div class="contenido-imagen">
                <div class="etiquetas-imagen">
                    ${imagen.etiquetas.map((etiqueta) => `<span class="etiqueta-imagen">${etiqueta}</span>`).join("")}
                </div>
                <h3 class="titulo-imagen">${imagen.titulo}</h3>
                <p class="meta-imagen">${imagen.artista} • ${imagen.año}</p>
                <p class="categoria-imagen">${obtenerNombreCategoria(imagen.categoria)}</p>
            </div>
        </div>
    `,
    )
    .join("")

  // Configurar clicks en las tarjetas
  grid.querySelectorAll(".tarjeta-imagen").forEach((tarjeta) => {
    tarjeta.addEventListener("click", (e) => {
      const index = Number.parseInt(tarjeta.getAttribute("data-index"))
      abrirLightbox(index)
    })
  })
}

// Cambiar filtro de categoría
function cambiarFiltro(categoria) {
  estadoGaleria.categoriaActiva = categoria

  // Actualizar botones
  document.querySelectorAll(".boton-filtro").forEach((boton) => {
    boton.classList.remove("activo")
  })
  document.querySelector(`[data-categoria="${categoria}"]`).classList.add("activo")

  // Filtrar imágenes
  aplicarFiltros()
}

// Manejar búsqueda
function manejarBusqueda(e) {
  estadoGaleria.terminoBusqueda = e.target.value.toLowerCase()
  aplicarFiltros()
}

// Aplicar filtros combinados
function aplicarFiltros() {
  let imagenesFiltered = [...imagenesGaleria]

  // Filtro por categoría
  if (estadoGaleria.categoriaActiva !== "todas") {
    imagenesFiltered = imagenesFiltered.filter((imagen) => imagen.categoria === estadoGaleria.categoriaActiva)
  }

  // Filtro por búsqueda
  if (estadoGaleria.terminoBusqueda) {
    imagenesFiltered = imagenesFiltered.filter(
      (imagen) =>
        imagen.titulo.toLowerCase().includes(estadoGaleria.terminoBusqueda) ||
        imagen.artista.toLowerCase().includes(estadoGaleria.terminoBusqueda) ||
        imagen.descripcion.toLowerCase().includes(estadoGaleria.terminoBusqueda) ||
        imagen.etiquetas.some((etiqueta) => etiqueta.toLowerCase().includes(estadoGaleria.terminoBusqueda)),
    )
  }

  estadoGaleria.imagenesVisibles = imagenesFiltered
  renderizarImagenes()
}

// Configurar lightbox
function configurarLightbox() {
  const overlay = document.getElementById("lightboxOverlay")
  const botonCerrar = document.getElementById("botonCerrarLightbox")
  const botonAnterior = document.getElementById("botonAnterior")
  const botonSiguiente = document.getElementById("botonSiguiente")

  // Cerrar lightbox
  botonCerrar.addEventListener("click", cerrarLightbox)
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) cerrarLightbox()
  })

  // Navegación
  botonAnterior.addEventListener("click", imagenAnterior)
  botonSiguiente.addEventListener("click", imagenSiguiente)
}

// Abrir lightbox
function abrirLightbox(index) {
  estadoGaleria.imagenActual = index
  estadoGaleria.lightboxAbierto = true

  const overlay = document.getElementById("lightboxOverlay")
  overlay.style.display = "flex"

  actualizarLightbox()
  document.body.style.overflow = "hidden"
}

// Cerrar lightbox
function cerrarLightbox() {
  estadoGaleria.lightboxAbierto = false

  const overlay = document.getElementById("lightboxOverlay")
  overlay.style.display = "none"

  document.body.style.overflow = "auto"
}

// Actualizar contenido del lightbox
function actualizarLightbox() {
  const imagen = estadoGaleria.imagenesVisibles[estadoGaleria.imagenActual]
  if (!imagen) return

  // Imagen
  const imagenElement = document.getElementById("imagenLightbox")
  imagenElement.src = imagen.imagen
  imagenElement.alt = imagen.titulo

  // Etiquetas
  const etiquetas = document.getElementById("etiquetasLightbox")
  etiquetas.innerHTML = imagen.etiquetas
    .map((etiqueta) => `<span class="etiqueta-lightbox">${etiqueta}</span>`)
    .join("")

  // Información
  document.getElementById("tituloLightbox").textContent = imagen.titulo
  document.getElementById("artistaLightbox").textContent = `${imagen.artista} • ${imagen.año}`
  document.getElementById("descripcionLightbox").textContent = imagen.descripcion
  document.getElementById("categoriaLightbox").textContent = obtenerNombreCategoria(imagen.categoria)

  // Actualizar botones de navegación
  const botonAnterior = document.getElementById("botonAnterior")
  const botonSiguiente = document.getElementById("botonSiguiente")

  botonAnterior.style.display = estadoGaleria.imagenActual > 0 ? "block" : "none"
  botonSiguiente.style.display =
    estadoGaleria.imagenActual < estadoGaleria.imagenesVisibles.length - 1 ? "block" : "none"
}

// Navegación en lightbox
function imagenAnterior() {
  if (estadoGaleria.imagenActual > 0) {
    estadoGaleria.imagenActual--
    actualizarLightbox()
  }
}

function imagenSiguiente() {
  if (estadoGaleria.imagenActual < estadoGaleria.imagenesVisibles.length - 1) {
    estadoGaleria.imagenActual++
    actualizarLightbox()
  }
}

// Manejar navegación con teclado
function manejarTeclado(e) {
  if (!estadoGaleria.lightboxAbierto) return

  switch (e.key) {
    case "Escape":
      cerrarLightbox()
      break
    case "ArrowLeft":
      imagenAnterior()
      break
    case "ArrowRight":
      imagenSiguiente()
      break
  }
}

// Obtener nombre legible de categoría
function obtenerNombreCategoria(categoria) {
  const nombres = {
    "portadas-iconicas": "Portadas Icónicas",
    "actuaciones-legendarias": "Actuaciones Legendarias",
    "retratos-iconicos": "Retratos Icónicos",
    "eventos-historicos": "Eventos Históricos",
  }
  return nombres[categoria] || categoria
}

// Función debounce para búsqueda
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Hacer disponible globalmente para debugging
window.galeriaDebug = {
  estado: estadoGaleria,
  imagenes: imagenesGaleria,
  abrir: abrirLightbox,
  cerrar: cerrarLightbox,
}
