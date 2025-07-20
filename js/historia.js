/*
   FUNCIONALIDAD DE LA LÍNEA DE TIEMPO MUSICAL
   Timeline interactiva con detalles de períodos históricos
*/

// Datos detallados de los períodos musicales
const periodosHistoricos = {
  antigua: {
    id: "antigua",
    titulo: "Música Antigua",
    periodo: "3000 AC - 500 DC",
    icono: "🏛️",
    descripcion: `
            La música antigua abarca las tradiciones musicales de las primeras civilizaciones humanas. 
            Desde los tambores de hueso de nuestros ancestros hasta los sofisticados sistemas musicales 
            de Grecia y Roma, este período estableció los fundamentos de toda la música posterior.
        `,
    eventos: [
      {
        año: "40,000 AC",
        descripcion: "Primeros instrumentos musicales: flautas de hueso encontradas en Europa",
      },
      {
        año: "3000 AC",
        descripcion: "Desarrollo de la música en Mesopotamia y Egipto",
      },
      {
        año: "800 AC",
        descripcion: "Los griegos desarrollan los modos musicales y la teoría musical",
      },
      {
        año: "100 DC",
        descripcion: "La música romana incorpora influencias de todo el imperio",
      },
    ],
    figuras: [
      {
        nombre: "Pitágoras",
        descripcion: "Matemático griego que estudió las proporciones musicales",
      },
      {
        nombre: "Aristóxeno",
        descripcion: "Teórico musical griego, discípulo de Aristóteles",
      },
      {
        nombre: "Boecio",
        descripcion: "Filósofo romano que preservó la teoría musical griega",
      },
    ],
  },
  medieval: {
    id: "medieval",
    titulo: "Música Medieval",
    periodo: "500 - 1400",
    icono: "⛪",
    descripcion: `
            El período medieval vio el desarrollo del canto gregoriano y los primeros sistemas 
            de notación musical. La música estaba dominada por la Iglesia, pero también florecieron 
            las tradiciones seculares de trovadores y juglares.
        `,
    eventos: [
      {
        año: "590",
        descripcion: "Papa Gregorio I codifica el canto gregoriano",
      },
      {
        año: "1000",
        descripcion: "Guido de Arezzo desarrolla la notación musical moderna",
      },
      {
        año: "1150",
        descripcion: "Escuela de Notre Dame: primeras polifonías complejas",
      },
      {
        año: "1300",
        descripcion: "Ars Nova: nueva complejidad rítmica y melódica",
      },
    ],
    figuras: [
      {
        nombre: "Gregorio Magno",
        descripcion: "Papa que codificó el canto gregoriano",
      },
      {
        nombre: "Guido de Arezzo",
        descripcion: "Monje que inventó la notación musical moderna",
      },
      {
        nombre: "Léonin",
        descripcion: "Compositor de la Escuela de Notre Dame",
      },
      {
        nombre: "Guillaume de Machaut",
        descripcion: "Maestro del Ars Nova francés",
      },
    ],
  },
  renacimiento: {
    id: "renacimiento",
    titulo: "Renacimiento Musical",
    periodo: "1400 - 1600",
    icono: "🎭",
    descripcion: `
            El Renacimiento trajo una revolución musical con el desarrollo de la polifonía 
            sofisticada y el florecimiento de la música secular. Los compositores exploraron 
            nuevas formas de expresión y la música se volvió más accesible.
        `,
    eventos: [
      {
        año: "1450",
        descripcion: "Invención de la imprenta musical",
      },
      {
        año: "1500",
        descripcion: "Apogeo de la polifonía franco-flamenca",
      },
      {
        año: "1550",
        descripcion: "Desarrollo del madrigal italiano",
      },
      {
        año: "1600",
        descripcion: "Nacimiento de la ópera en Florencia",
      },
    ],
    figuras: [
      {
        nombre: "Josquin des Prez",
        descripcion: "Maestro de la polifonía franco-flamenca",
      },
      {
        nombre: "Giovanni Pierluigi da Palestrina",
        descripcion: "Perfeccionó el estilo polifónico sacro",
      },
      {
        nombre: "Claudio Monteverdi",
        descripcion: "Pionero de la ópera y el estilo barroco",
      },
      {
        nombre: "Thomas Tallis",
        descripcion: "Compositor inglés de música sacra",
      },
    ],
  },
  barroco: {
    id: "barroco",
    titulo: "Período Barroco",
    periodo: "1600 - 1750",
    icono: "🎼",
    descripcion: `
            El Barroco estableció muchas de las formas musicales que conocemos hoy. 
            Bach, Vivaldi y Händel crearon obras maestras que siguen siendo pilares 
            del repertorio clásico. Se desarrollaron la fuga, el concierto y la suite.
        `,
    eventos: [
      {
        año: "1607",
        descripcion: "Monteverdi estrena 'Orfeo', primera gran ópera",
      },
      {
        año: "1685",
        descripcion: "Nacen Bach, Händel y Scarlatti",
      },
      {
        año: "1721",
        descripcion: "Bach compone los Conciertos de Brandeburgo",
      },
      {
        año: "1742",
        descripcion: "Händel estrena 'El Mesías'",
      },
    ],
    figuras: [
      {
        nombre: "Johann Sebastian Bach",
        descripcion: "Maestro del contrapunto y la fuga",
      },
      {
        nombre: "Antonio Vivaldi",
        descripcion: "Virtuoso del violín y compositor de 'Las Cuatro Estaciones'",
      },
      {
        nombre: "Georg Friedrich Händel",
        descripcion: "Compositor de óperas y oratorios",
      },
      {
        nombre: "Jean-Philippe Rameau",
        descripcion: "Teórico de la armonía moderna",
      },
    ],
  },
  clasico: {
    id: "clasico",
    titulo: "Período Clásico",
    periodo: "1750 - 1820",
    icono: "🎹",
    descripcion: `
            El período clásico perfeccionó la forma sonata y estableció la sinfonía 
            como la forma musical más importante. Mozart, Haydn y Beethoven crearon 
            obras de equilibrio perfecto entre forma y expresión.
        `,
    eventos: [
      {
        año: "1750",
        descripcion: "Muerte de Bach marca el fin del Barroco",
      },
      {
        año: "1781",
        descripcion: "Mozart compone 'Idomeneo'",
      },
      {
        año: "1804",
        descripcion: "Beethoven estrena la Sinfonía 'Heroica'",
      },
      {
        año: "1791",
        descripcion: "Mozart compone 'La Flauta Mágica' y el Réquiem",
      },
    ],
    figuras: [
      {
        nombre: "Wolfgang Amadeus Mozart",
        descripcion: "Genio musical que dominó todos los géneros",
      },
      {
        nombre: "Ludwig van Beethoven",
        descripcion: "Puente entre el clasicismo y el romanticismo",
      },
      {
        nombre: "Franz Joseph Haydn",
        descripcion: "Padre de la sinfonía y el cuarteto de cuerdas",
      },
      {
        nombre: "Christoph Willibald Gluck",
        descripcion: "Reformador de la ópera",
      },
    ],
  },
  romantico: {
    id: "romantico",
    titulo: "Romanticismo Musical",
    periodo: "1820 - 1900",
    icono: "💝",
    descripcion: `
            El Romanticismo priorizó la expresión emocional sobre la forma clásica. 
            Los compositores exploraron nuevas sonoridades, expandieron las orquestas 
            y crearon el concepto del artista como genio individual.
        `,
    eventos: [
      {
        año: "1830",
        descripcion: "Berlioz compone la 'Sinfonía Fantástica'",
      },
      {
        año: "1845",
        descripcion: "Wagner estrena 'Tannhäuser'",
      },
      {
        año: "1875",
        descripcion: "Bizet estrena 'Carmen'",
      },
      {
        año: "1893",
        descripcion: "Dvorák compone la Sinfonía 'Del Nuevo Mundo'",
      },
    ],
    figuras: [
      {
        nombre: "Frédéric Chopin",
        descripcion: "Poeta del piano y maestro del nacionalismo polaco",
      },
      {
        nombre: "Richard Wagner",
        descripcion: "Revolucionario de la ópera y la armonía",
      },
      {
        nombre: "Franz Liszt",
        descripcion: "Virtuoso del piano y creador del poema sinfónico",
      },
      {
        nombre: "Johannes Brahms",
        descripcion: "Maestro de la forma clásica con alma romántica",
      },
    ],
  },
  moderno: {
    id: "moderno",
    titulo: "Música del Siglo XX",
    periodo: "1900 - 2000",
    icono: "🎷",
    descripcion: `
            El siglo XX vio una explosión de estilos musicales. Desde el jazz hasta 
            el rock, desde la música atonal hasta la electrónica, este período 
            democratizó la música y creó la industria musical moderna.
        `,
    eventos: [
      {
        año: "1913",
        descripcion: "Stravinsky estrena 'La Consagración de la Primavera'",
      },
      {
        año: "1920",
        descripcion: "El jazz se populariza mundialmente",
      },
      {
        año: "1955",
        descripcion: "Nace el rock and roll con Elvis Presley",
      },
      {
        año: "1969",
        descripcion: "Festival de Woodstock define la contracultura",
      },
    ],
    figuras: [
      {
        nombre: "Igor Stravinsky",
        descripcion: "Revolucionario de la música clásica moderna",
      },
      {
        nombre: "Louis Armstrong",
        descripcion: "Pionero del jazz y la improvisación",
      },
      {
        nombre: "The Beatles",
        descripcion: "Banda que cambió la música popular para siempre",
      },
      {
        nombre: "Miles Davis",
        descripcion: "Innovador constante del jazz moderno",
      },
    ],
  },
  contemporaneo: {
    id: "contemporaneo",
    titulo: "Era Digital",
    periodo: "2000 - Presente",
    icono: "🌐",
    descripcion: `
            La era digital ha transformado completamente la creación, distribución 
            y consumo de música. El streaming, la inteligencia artificial y la 
            globalización han creado un panorama musical sin precedentes.
        `,
    eventos: [
      {
        año: "2001",
        descripcion: "Lanzamiento del iPod revoluciona el consumo musical",
      },
      {
        año: "2008",
        descripcion: "Spotify introduce el streaming musical",
      },
      {
        año: "2012",
        descripcion: "'Gangnam Style' se vuelve viral globalmente",
      },
      {
        año: "2020",
        descripcion: "La pandemia acelera la adopción de conciertos virtuales",
      },
    ],
    figuras: [
      {
        nombre: "Beyoncé",
        descripcion: "Icono global que redefinió la industria musical",
      },
      {
        nombre: "Kanye West",
        descripcion: "Productor innovador que fusionó géneros",
      },
      {
        nombre: "Björk",
        descripcion: "Pionera en el uso de tecnología en música",
      },
      {
        nombre: "Bad Bunny",
        descripcion: "Líder del reggaetón global y la música latina",
      },
    ],
  },
}

// Estado de la aplicación
const estadoHistoria = {
  periodoActivo: null,
  panelAbierto: false,
}

// Inicialización cuando el DOM está listo
document.addEventListener("DOMContentLoaded", () => {
  inicializarHistoria()
  configurarEventos()
})

// Función principal de inicialización
function inicializarHistoria() {
  configurarTarjetasPeriodos()
}

// Configurar event listeners
function configurarEventos() {
  // Botón cerrar panel
  const botonCerrar = document.getElementById("botonCerrarPanel")
  if (botonCerrar) {
    botonCerrar.addEventListener("click", cerrarPanel)
  }

  // Cerrar panel con Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && estadoHistoria.panelAbierto) {
      cerrarPanel()
    }
  })

  // Cerrar panel al hacer click fuera
  const panel = document.getElementById("panelDetalles")
  if (panel) {
    panel.addEventListener("click", (e) => {
      if (e.target === panel) {
        cerrarPanel()
      }
    })
  }
}

// Configurar tarjetas de períodos
function configurarTarjetasPeriodos() {
  const periodos = document.querySelectorAll(".periodo-timeline")
  periodos.forEach((periodo) => {
    periodo.addEventListener("click", (e) => {
      const periodoId = periodo.getAttribute("data-periodo")
      mostrarDetallesPeriodo(periodoId)
    })

    // Efecto hover mejorado
    periodo.addEventListener("mouseenter", () => {
      const tarjeta = periodo.querySelector(".tarjeta-periodo")
      tarjeta.style.transform = "translateY(-5px) scale(1.02)"
    })

    periodo.addEventListener("mouseleave", () => {
      const tarjeta = periodo.querySelector(".tarjeta-periodo")
      tarjeta.style.transform = "translateY(0) scale(1)"
    })
  })
}

// Mostrar detalles de un período
function mostrarDetallesPeriodo(periodoId) {
  const periodo = periodosHistoricos[periodoId]
  if (!periodo) return

  estadoHistoria.periodoActivo = periodoId
  estadoHistoria.panelAbierto = true

  // Llenar contenido del panel
  llenarPanelDetalles(periodo)

  // Mostrar panel
  const panel = document.getElementById("panelDetalles")
  panel.style.display = "flex"

  // Bloquear scroll del body
  document.body.style.overflow = "hidden"
}

// Llenar contenido del panel de detalles
function llenarPanelDetalles(periodo) {
  // Icono y título
  document.getElementById("iconoDetalle").textContent = periodo.icono
  document.getElementById("tituloDetalle").textContent = periodo.titulo
  document.getElementById("periodoDetalle").textContent = periodo.periodo

  // Descripción
  document.getElementById("descripcionDetalle").innerHTML = periodo.descripcion

  // Eventos destacados
  const listaEventos = document.getElementById("listaEventos")
  listaEventos.innerHTML = periodo.eventos
    .map(
      (evento) => `
        <div class="evento-item">
            <div class="evento-año">${evento.año}</div>
            <div class="evento-descripcion">${evento.descripcion}</div>
        </div>
    `,
    )
    .join("")

  // Figuras importantes
  const listaFiguras = document.getElementById("listaFiguras")
  listaFiguras.innerHTML = periodo.figuras
    .map(
      (figura) => `
        <div class="figura-item">
            <div class="figura-nombre">${figura.nombre}</div>
            <div class="figura-descripcion">${figura.descripcion}</div>
        </div>
    `,
    )
    .join("")
}

// Cerrar panel de detalles
function cerrarPanel() {
  estadoHistoria.panelAbierto = false
  estadoHistoria.periodoActivo = null

  // Ocultar panel
  const panel = document.getElementById("panelDetalles")
  panel.style.display = "none"

  // Restaurar scroll del body
  document.body.style.overflow = "auto"
}

// Función utilitaria para obtener período por ID
function obtenerPeriodo(periodoId) {
  return periodosHistoricos[periodoId]
}

// Función para navegación entre períodos (para futuras implementaciones)
function navegarAPeriodo(direccion) {
  const periodos = Object.keys(periodosHistoricos)
  const indiceActual = periodos.indexOf(estadoHistoria.periodoActivo)

  let nuevoIndice
  if (direccion === "anterior") {
    nuevoIndice = indiceActual > 0 ? indiceActual - 1 : periodos.length - 1
  } else {
    nuevoIndice = indiceActual < periodos.length - 1 ? indiceActual + 1 : 0
  }

  mostrarDetallesPeriodo(periodos[nuevoIndice])
}

// Hacer disponible globalmente para debugging
window.historiaDebug = {
  estado: estadoHistoria,
  periodos: periodosHistoricos,
  mostrar: mostrarDetallesPeriodo,
  cerrar: cerrarPanel,
  navegar: navegarAPeriodo,
}
