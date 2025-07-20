/*
   FUNCIONALIDAD DE LA SECCIÓN DE COMUNIDADES MUSICALES (ARTISTAS)
   Filtros, búsqueda y modal de detalle de artistas
*/

// Datos de artistas y comunidades musicales
const artistasData = [
  {
    id: "fela-kuti",
    nombre: "Fela Kuti",
    origen: "Nigeria, África",
    region: "africa",
    imagen: "/placeholder.svg?height=400&width=400",
    generos: ["Afrobeat", "Funk", "Jazz"],
    descripcionCorta: "Pionero del Afrobeat y activista político, su música es un grito de resistencia.",
    descripcionLarga: `
            Fela Anikulapo Kuti (1938-1997) fue un músico, compositor, multiinstrumentista, 
            líder político y activista de los derechos humanos nigeriano. Es considerado 
            el pionero del Afrobeat, un género musical que fusiona el jazz, el funk y 
            la música tradicional yoruba. Su música no solo era para bailar, sino también 
            un vehículo para la crítica social y política contra los regímenes corruptos 
            de Nigeria.
        `,
    contribuciones: [
      {
        titulo: "Creación del Afrobeat",
        descripcion: "Fusionó ritmos africanos con jazz y funk, creando un sonido único.",
      },
      {
        titulo: "Activismo Político",
        descripcion: "Utilizó su música y su 'República de Kalakuta' como centro de resistencia.",
      },
      {
        titulo: "Álbumes Clave",
        descripcion: "Zombie, Expensive Shit, Gentleman, entre otros.",
      },
    ],
    contexto: `
            Fela Kuti emergió en un período post-colonial en África, donde muchos países 
            luchaban por la verdadera independencia y contra la corrupción. Su música 
            reflejaba las luchas del pueblo nigeriano y se convirtió en un símbolo de 
            resistencia panafricana.
        `,
    legado: `
            El legado de Fela Kuti es inmenso. Su música sigue inspirando a artistas 
            de todo el mundo y su mensaje de justicia social y panafricanismo resuena 
            hoy más que nunca. Es una figura central en la historia de la música africana 
            y global.
        `,
  },
  {
    id: "mercedes-sosa",
    nombre: "Mercedes Sosa",
    origen: "Argentina, América",
    region: "america",
    imagen: "/placeholder.svg?height=400&width=400",
    generos: ["Folclore Argentino", "Nueva Canción"],
    descripcionCorta: "La 'Voz de América Latina', su canto fue un himno a la justicia y la libertad.",
    descripcionLarga: `
            Haydée Mercedes Sosa (1935-2009), conocida como 'La Negra', fue una cantante 
            de folclore argentina. Fue una de las máximas exponentes del movimiento de la 
            Nueva Canción Latinoamericana, utilizando su voz para denunciar las injusticias 
            sociales y políticas. Su repertorio abarcó desde canciones tradicionales hasta 
            composiciones de autores contemporáneos, siempre con un profundo compromiso social.
        `,
    contribuciones: [
      {
        titulo: "Voz de la Nueva Canción",
        descripcion: "Lideró un movimiento musical que unió folclore con compromiso social.",
      },
      {
        titulo: "Embajadora Cultural",
        descripcion: "Llevó la música y los mensajes de América Latina al mundo.",
      },
      {
        titulo: "Canciones Emblemáticas",
        descripcion: "Gracias a la Vida, Alfonsina y el Mar, Como la Cigarra.",
      },
    ],
    contexto: `
            Mercedes Sosa vivió y cantó durante períodos de dictaduras militares y 
            agitación política en América Latina. Su música se convirtió en un refugio 
            y una voz para los oprimidos, lo que la llevó al exilio durante la dictadura 
            argentina.
        `,
    legado: `
            Su legado es el de una artista que trascendió la música para convertirse 
            en un símbolo de resistencia, esperanza y unidad latinoamericana. Su voz 
            sigue siendo un referente para las nuevas generaciones de músicos y activistas.
        `,
  },
  {
    id: "ravi-shankar",
    nombre: "Ravi Shankar",
    origen: "India, Asia",
    region: "asia",
    imagen: "/placeholder.svg?height=400&width=400",
    generos: ["Música Clásica India", "Fusión"],
    descripcionCorta: "Maestro del sitar que llevó la música clásica india al escenario mundial.",
    descripcionLarga: `
            Ravi Shankar (1920-2012) fue un músico y compositor indio, considerado 
            el más famoso intérprete de sitar del siglo XX. Fue fundamental en la 
            introducción de la música clásica india en Occidente, colaborando con 
            artistas como George Harrison de The Beatles y John Coltrane. Su trabajo 
            abrió un puente cultural entre Oriente y Occidente.
        `,
    contribuciones: [
      {
        titulo: "Popularización del Sitar",
        descripcion: "Hizo del sitar un instrumento reconocido globalmente.",
      },
      {
        titulo: "Colaboraciones Transculturales",
        descripcion: "Trabajó con músicos occidentales, fusionando géneros y culturas.",
      },
      {
        titulo: "Educación Musical",
        descripcion: "Fundó escuelas y enseñó a generaciones de músicos.",
      },
    ],
    contexto: `
            Shankar fue parte de una generación de artistas indios que, tras la 
            independencia de la India, buscaron proyectar su rica herencia cultural 
            al mundo, desafiando las narrativas coloniales y promoviendo el entendimiento 
            intercultural.
        `,
    legado: `
            Su legado es el de un embajador cultural que demostró la universalidad de la 
            música. Su influencia se extiende desde el rock psicodélico hasta la música 
            new age, y su trabajo sigue siendo un pilar para el estudio de la música 
            clásica india.
        `,
  },
  {
    id: "bjork",
    nombre: "Björk",
    origen: "Islandia, Europa",
    region: "europa",
    imagen: "/placeholder.svg?height=400&width=400",
    generos: ["Art Pop", "Electrónica", "Experimental"],
    descripcionCorta: "Artista islandesa que redefine los límites de la música y la expresión visual.",
    descripcionLarga: `
            Björk Guðmundsdóttir (nacida en 1965) es una cantante, compositora, 
            productora y actriz islandesa. Conocida por su voz distintiva, su 
            estilo musical ecléctico y sus innovadoras exploraciones visuales, 
            Björk ha sido una fuerza pionera en la música alternativa y electrónica 
            desde los años 90. Su trabajo a menudo incorpora elementos de la naturaleza, 
            la tecnología y la cultura islandesa.
        `,
    contribuciones: [
      {
        titulo: "Innovación Sonora y Visual",
        descripcion: "Constantemente experimenta con nuevos sonidos, tecnologías y formatos visuales.",
      },
      {
        titulo: "Fusión de Géneros",
        descripcion: "Mezcla pop, electrónica, clásica, jazz y folclore en su obra.",
      },
      {
        titulo: "Álbumes Influyentes",
        descripcion: "Debut, Post, Homogenic, Vespertine, Biophilia.",
      },
    ],
    contexto: `
            Björk emergió de la escena musical independiente de Islandia, un país 
            con una rica tradición folclórica y una fuerte conexión con la naturaleza. 
            Su arte refleja esta singularidad, desafiando las convenciones de la 
            industria musical global.
        `,
    legado: `
            Su legado es el de una artista que ha mantenido una visión artística 
            sin compromisos, inspirando a innumerables músicos a explorar la creatividad 
            sin límites. Es un ícono de la música experimental y una voz única en el 
            panorama musical contemporáneo.
        `,
  },
  {
    id: "gurrumul",
    nombre: "Gurrumul Yunupingu",
    origen: "Australia, Oceanía",
    region: "oceania",
    imagen: "/placeholder.svg?height=400&width=400",
    generos: ["Música Indígena Australiana", "Folclore"],
    descripcionCorta: "Cantante aborigen australiano cuya voz trascendió barreras culturales.",
    descripcionLarga: `
            Geoffrey Gurrumul Yunupingu (1971-2017) fue un músico aborigen australiano 
            de la tribu Yolngu. Ciego de nacimiento, Gurrumul cantaba en su lengua 
            nativa Gumatj y en inglés, con una voz etérea y conmovedora que lo llevó 
            a la fama internacional. Su música, profundamente arraigada en su cultura 
            aborigen, tocó los corazones de millones y ayudó a tender puentes entre 
            culturas.
        `,
    contribuciones: [
      {
        titulo: "Preservación Cultural",
        descripcion: "Cantó en lenguas indígenas, manteniendo vivas las tradiciones orales.",
      },
      {
        titulo: "Reconocimiento Global",
        descripcion: "Llevó la música aborigen australiana a escenarios internacionales.",
      },
      {
        titulo: "Mensaje de Unidad",
        descripcion: "Su música promovió la reconciliación y el entendimiento intercultural.",
      },
    ],
    contexto: `
            Gurrumul creció en una comunidad indígena remota en el Territorio del Norte 
            de Australia, en un contexto de lucha por el reconocimiento de los derechos 
            y la cultura aborigen. Su éxito global fue un triunfo para su pueblo.
        `,
    legado: `
            Su legado es el de un artista que, a través de su voz, dio visibilidad a 
            una cultura milenaria y demostró el poder unificador de la música. Es un 
            símbolo de la resiliencia y la riqueza cultural de los pueblos indígenas 
            de Australia.
        `,
  },
  {
    id: "ali-farka-toure",
    nombre: "Ali Farka Touré",
    origen: "Malí, África",
    region: "africa",
    imagen: "/placeholder.svg?height=400&width=400",
    generos: ["Blues Africano", "Música Tradicional Maliense"],
    descripcionCorta: "El 'Bluesman de Malí', su guitarra conectó el desierto con el Delta del Mississippi.",
    descripcionLarga: `
            Ali Farka Touré (1939-2006) fue un guitarrista y cantante maliense, 
            considerado uno de los músicos más influyentes de África. Su estilo 
            único fusionaba la música tradicional de Malí con el blues americano, 
            creando un sonido que él mismo describía como "el verdadero blues". 
            Ganó varios premios Grammy y colaboró con artistas como Ry Cooder.
        `,
    contribuciones: [
      {
        titulo: "Fusión Blues-Africana",
        descripcion: "Demostró las raíces africanas del blues americano.",
      },
      {
        titulo: "Maestro de la Guitarra",
        descripcion: "Su estilo de guitarra es reconocido mundialmente.",
      },
      {
        titulo: "Embajador Cultural",
        descripcion: "Llevó la música de Malí a una audiencia global.",
      },
    ],
    contexto: `
            Touré provenía de la región de Niafunké en Malí, una zona rica en 
            tradiciones musicales ancestrales. Su música es un reflejo de la 
            vida rural y las historias del río Níger, conectando con la diáspora 
            africana a través del blues.
        `,
    legado: `
            Su legado es el de un puente musical entre continentes, mostrando 
            cómo las tradiciones africanas influyeron en la música occidental 
            y viceversa. Su música sigue siendo una fuente de inspiración para 
            músicos de blues y world music.
        `,
  },
  {
    id: "violeta-parra",
    nombre: "Violeta Parra",
    origen: "Chile, América",
    region: "america",
    imagen: "/placeholder.svg?height=400&width=400",
    generos: ["Folclore Chileno", "Nueva Canción Chilena"],
    descripcionCorta: "Cantautora, artista visual y folclorista chilena, madre de la Nueva Canción.",
    descripcionLarga: `
            Violeta del Carmen Parra Sandoval (1917-1967) fue una cantautora, 
            compositora, folclorista, artista visual y poeta chilena. Es considerada 
            una de las figuras más importantes de la música popular chilena y 
            latinoamericana. Su trabajo de recopilación y difusión del folclore 
            chileno, junto con sus propias composiciones, sentó las bases de la 
            Nueva Canción Chilena.
        `,
    contribuciones: [
      {
        titulo: "Fundadora de la Nueva Canción Chilena",
        descripcion: "Movimiento que fusionó folclore con crítica social y política.",
      },
      {
        titulo: "Recopilación Folclórica",
        descripcion: "Viajó por Chile rescatando y documentando la música tradicional.",
      },
      {
        titulo: "Artista Multifacética",
        descripcion: "También fue pintora, escultora y bordadora.",
      },
    ],
    contexto: `
            Violeta Parra desarrolló su obra en un Chile en ebullición social y 
            política. Su música y arte reflejaban las realidades de los campesinos 
            y trabajadores, y su compromiso con las causas populares la convirtió 
            en un ícono de la resistencia cultural.
        `,
    legado: `
            Su legado es el de una artista total que utilizó su arte para dar voz 
            a los sin voz y para preservar la riqueza cultural de su país. Su canción 
            "Gracias a la Vida" es un himno universal y su influencia perdura en 
            generaciones de artistas latinoamericanos.
        `,
  },
  {
    id: "ryuichi-sakamoto",
    nombre: "Ryuichi Sakamoto",
    origen: "Japón, Asia",
    region: "asia",
    imagen: "/placeholder.svg?height=400&width=400",
    generos: ["Electrónica", "Clásica Contemporánea", "Ambient"],
    descripcionCorta: "Compositor japonés, pionero de la electrónica y maestro de bandas sonoras.",
    descripcionLarga: `
            Ryuichi Sakamoto (1952-2023) fue un músico, compositor, productor y 
            actor japonés. Fue miembro fundador de la influyente banda de electrónica 
            Yellow Magic Orchestra (YMO) y tuvo una prolífica carrera en solitario, 
            explorando géneros desde el pop electrónico hasta la música clásica 
            contemporánea y el ambient. Es mundialmente reconocido por sus bandas 
            sonoras para películas como 'Merry Christmas, Mr. Lawrence' y 'The Last Emperor'.
        `,
    contribuciones: [
      {
        titulo: "Pionero de la Música Electrónica Japonesa",
        descripcion: "Con YMO, influyó en el techno, hip hop y pop global.",
      },
      {
        titulo: "Compositor de Bandas Sonoras",
        descripcion: "Creó música icónica para cine, ganando un Oscar y un Grammy.",
      },
      {
        titulo: "Activismo Ambiental",
        descripcion: "Utilizó su plataforma para promover la conciencia ecológica.",
      },
    ],
    contexto: `
            Sakamoto emergió en un Japón que abrazaba la tecnología y la globalización, 
            pero también mantenía una profunda conexión con sus tradiciones estéticas. 
            Su música a menudo fusionaba estos dos mundos, creando un sonido futurista 
            pero con raíces.
        `,
    legado: `
            Su legado es el de un visionario que rompió barreras entre géneros y culturas. 
            Su música sigue siendo una fuente de inspiración para artistas electrónicos, 
            compositores de cine y aquellos que buscan la belleza en la intersección 
            de la tecnología y la naturaleza.
        `,
  },
]

// Estado de la aplicación
const estadoArtistas = {
  regionActiva: "todas",
  terminoBusqueda: "",
  artistaActual: null,
  modalAbierto: false,
}

// Inicialización cuando el DOM está listo
document.addEventListener("DOMContentLoaded", () => {
  inicializarArtistas()
  configurarEventos()
  renderizarArtistas()
})

// Función principal de inicialización
function inicializarArtistas() {
  // No hay estado guardado para cargar, solo inicializar filtros
}

// Configurar event listeners
function configurarEventos() {
  // Filtros de región
  const botonesFiltro = document.querySelectorAll(".boton-filtro")
  botonesFiltro.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      const region = e.target.getAttribute("data-region")
      cambiarFiltro(region)
    })
  })

  // Búsqueda
  const campoBusqueda = document.getElementById("campoBusqueda")
  if (campoBusqueda) {
    campoBusqueda.addEventListener("input", debounce(manejarBusqueda, 300))
  }

  // Modal
  const botonCerrarModal = document.getElementById("botonCerrarModal")
  if (botonCerrarModal) {
    botonCerrarModal.addEventListener("click", cerrarModal)
  }

  const modalOverlay = document.getElementById("modalArtista")
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        cerrarModal()
      }
    })
  }

  // Navegación con teclado
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && estadoArtistas.modalAbierto) {
      cerrarModal()
    }
  })
}

// Renderizar grid de artistas
function renderizarArtistas() {
  const grid = document.getElementById("gridArtistas")
  const mensajeSinResultados = document.getElementById("mensajeSinResultados")

  if (!grid) return

  const artistasVisibles = aplicarFiltros()

  if (artistasVisibles.length === 0) {
    grid.style.display = "none"
    mensajeSinResultados.style.display = "block"
    return
  }

  grid.style.display = "grid"
  mensajeSinResultados.style.display = "none"

  grid.innerHTML = artistasVisibles
    .map(
      (artista) => `
        <div class="tarjeta-artista tarjeta-magica" data-artista-id="${artista.id}">
            <div class="imagen-artista">
                <img src="${artista.imagen}" alt="${artista.nombre}" loading="lazy">
                <div class="overlay-region">${obtenerNombreRegion(artista.region)}</div>
            </div>
            <div class="contenido-artista">
                <h3 class="nombre-artista">${artista.nombre}</h3>
                <p class="origen-artista">
                    <span class="icono-origen">📍</span>
                    ${artista.origen}
                </p>
                <div class="generos-artista">
                    ${artista.generos.map((genero) => `<span class="genero-tag">${genero}</span>`).join("")}
                </div>
                <p class="descripcion-artista">${artista.descripcionCorta}</p>
                <div class="contribucion-destacada">
                    "${artista.contribuciones[0].descripcion}"
                </div>
            </div>
        </div>
    `,
    )
    .join("")

  // Configurar clicks en las tarjetas
  grid.querySelectorAll(".tarjeta-artista").forEach((tarjeta) => {
    tarjeta.addEventListener("click", (e) => {
      const artistaId = tarjeta.getAttribute("data-artista-id")
      abrirModal(artistaId)
    })
  })
}

// Cambiar filtro de región
function cambiarFiltro(region) {
  estadoArtistas.regionActiva = region

  // Actualizar botones
  document.querySelectorAll(".boton-filtro").forEach((boton) => {
    boton.classList.remove("activo")
  })
  document.querySelector(`[data-region="${region}"]`).classList.add("activo")

  // Re-renderizar
  renderizarArtistas()
}

// Manejar búsqueda
function manejarBusqueda(e) {
  estadoArtistas.terminoBusqueda = e.target.value.toLowerCase()
  renderizarArtistas()
}

// Aplicar filtros combinados
function aplicarFiltros() {
  let artistasFiltered = [...artistasData]

  // Filtro por región
  if (estadoArtistas.regionActiva !== "todas") {
    artistasFiltered = artistasFiltered.filter((artista) => artista.region === estadoArtistas.regionActiva)
  }

  // Filtro por búsqueda
  if (estadoArtistas.terminoBusqueda) {
    artistasFiltered = artistasFiltered.filter(
      (artista) =>
        artista.nombre.toLowerCase().includes(estadoArtistas.terminoBusqueda) ||
        artista.origen.toLowerCase().includes(estadoArtistas.terminoBusqueda) ||
        artista.descripcionCorta.toLowerCase().includes(estadoArtistas.terminoBusqueda) ||
        artista.generos.some((genero) => genero.toLowerCase().includes(estadoArtistas.terminoBusqueda)),
    )
  }

  return artistasFiltered
}

// Abrir modal de artista
function abrirModal(artistaId) {
  const artista = artistasData.find((a) => a.id === artistaId)
  if (!artista) return

  estadoArtistas.artistaActual = artistaId
  estadoArtistas.modalAbierto = true

  // Llenar contenido del modal
  llenarContenidoModal(artista)

  // Mostrar modal
  const modal = document.getElementById("modalArtista")
  modal.style.display = "flex"

  // Bloquear scroll del body
  document.body.style.overflow = "hidden"
}

// Cerrar modal de artista
function cerrarModal() {
  estadoArtistas.modalAbierto = false
  estadoArtistas.artistaActual = null

  const modal = document.getElementById("modalArtista")
  modal.style.display = "none"

  document.body.style.overflow = "auto"
}

// Llenar contenido del modal
function llenarContenidoModal(artista) {
  document.getElementById("imagenArtistaModal").src = artista.imagen
  document.getElementById("imagenArtistaModal").alt = artista.nombre
  document.getElementById("nombreArtistaModal").textContent = artista.nombre
  document.getElementById("origenArtistaModal").textContent = artista.origen

  const generosModal = document.getElementById("generosArtistaModal")
  generosModal.innerHTML = artista.generos.map((genero) => `<span class="genero-modal">${genero}</span>`).join("")

  document.getElementById("descripcionArtistaModal").innerHTML = artista.descripcionLarga

  const listaContribuciones = document.getElementById("listaContribuciones")
  listaContribuciones.innerHTML = artista.contribuciones
    .map(
      (c) => `
        <div class="contribucion-item">
            <h4 class="contribucion-titulo">${c.titulo}</h4>
            <p class="contribucion-descripcion">${c.descripcion}</p>
        </div>
    `,
    )
    .join("")

  document.getElementById("contextoCultural").innerHTML = artista.contexto
  document.getElementById("legadoArtista").innerHTML = artista.legado
}

// Obtener nombre legible de región
function obtenerNombreRegion(region) {
  const nombres = {
    africa: "África",
    america: "América",
    asia: "Asia",
    europa: "Europa",
    oceania: "Oceanía",
    todas: "Todas las Regiones",
  }
  return nombres[region] || region
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
window.artistasDebug = {
  estado: estadoArtistas,
  datos: artistasData,
  abrirModal: abrirModal,
  cerrarModal: cerrarModal,
}
