/*
   FUNCIONALIDAD DE LAS CRÓNICAS MUSICALES
   Sistema de filtros y vista detallada de artículos
*/

// Datos completos de las crónicas
const cronicasData = {
  woodstock: {
    id: "woodstock",
    titulo: "Woodstock 1969: Tres Días que Cambiaron la Música",
    categoria: "eventos-historicos",
    etiquetas: ["Rock", "Contracultura", "Festival"],
    autor: "Redacción MUGIC!",
    fecha: "15 de Agosto, 2024",
    tiempoLectura: "8 min",
    imagen: "../imagenes/woodstock-1969.jpg",
    extracto: "La historia completa del festival que definió una generación y cambió la música para siempre.",
    contenido: `
            <h2>El Festival que Definió una Generación</h2>
            <p>Del 15 al 18 de agosto de 1969, una granja en Bethel, Nueva York, se convirtió en el epicentro de la revolución musical y cultural más importante del siglo XX. Woodstock no fue solo un festival de música; fue una declaración de principios de toda una generación.</p>
            
            <h3>Los Orígenes</h3>
            <p>Todo comenzó con cuatro jóvenes empresarios: Michael Lang, Artie Kornfeld, Joel Rosenman y John Roberts. Su visión era crear un festival que combinara música, arte y la filosofía de paz y amor que caracterizaba al movimiento hippie.</p>
            
            <blockquote>"Queríamos crear algo más que un concierto. Queríamos crear una experiencia que cambiara la forma en que la gente veía la música y la vida." - Michael Lang</blockquote>
            
            <h3>La Música que Marcó Historia</h3>
            <p>El lineup de Woodstock fue legendario. Jimi Hendrix cerró el festival con su interpretación del himno nacional estadounidense, una performance que se convirtió en símbolo de protesta contra la guerra de Vietnam.</p>
            
            <p>Otros momentos icónicos incluyeron:</p>
            <ul>
                <li>La actuación de Janis Joplin con "Piece of My Heart"</li>
                <li>The Who interpretando su ópera rock "Tommy"</li>
                <li>Joe Cocker con su versión de "With a Little Help from My Friends"</li>
                <li>Santana presentando su fusión latina-rock</li>
            </ul>
            
            <h3>Más que Música: Un Movimiento Social</h3>
            <p>Woodstock se convirtió en un símbolo de la contracultura de los años 60. A pesar de la lluvia, la falta de comida y las condiciones precarias, los asistentes mantuvieron un espíritu de comunidad y paz que sorprendió al mundo.</p>
            
            <h3>El Legado Perdurable</h3>
            <p>Cincuenta años después, Woodstock sigue siendo referencia obligada cuando se habla de festivales de música. Su influencia se puede ver en eventos como Coachella, Glastonbury y Lollapalooza.</p>
            
            <p>El festival demostró que la música podía ser una fuerza unificadora capaz de trascender diferencias sociales, raciales y económicas. En tres días, Woodstock cambió para siempre la forma en que entendemos los festivales de música y el poder transformador del arte.</p>
        `,
  },
  "abbey-road": {
    id: "abbey-road",
    titulo: "Abbey Road: El Último Álbum de los Beatles",
    categoria: "albumes-legendarios",
    etiquetas: ["Beatles", "Rock", "Álbum"],
    autor: "Redacción MUGIC!",
    fecha: "10 de Agosto, 2024",
    tiempoLectura: "6 min",
    imagen: "../imagenes/abbey-road-beatles.jpg",
    extracto: "La historia detrás del icónico cruce de calle y el último álbum grabado por la banda más influyente.",
    contenido: `
            <h2>El Último Capítulo de los Fab Four</h2>
            <p>Abbey Road, lanzado el 26 de septiembre de 1969, representa el canto del cisne de The Beatles como banda activa. Aunque Let It Be se lanzó posteriormente, Abbey Road fue el último álbum que grabaron juntos, marcando el fin de una era dorada en la música popular.</p>
            
            <h3>La Fotografía que se Volvió Leyenda</h3>
            <p>La icónica portada del álbum, que muestra a los cuatro Beatles cruzando Abbey Road, se ha convertido en una de las imágenes más reconocibles de la historia de la música. Fue tomada por Iain Macmillan el 8 de agosto de 1969, en apenas 10 minutos.</p>
            
            <blockquote>"Solo tuvimos 10 minutos para tomar la foto. El tráfico estaba parado y teníamos que ser rápidos." - Iain Macmillan</blockquote>
            
            <h3>La Música: Una Obra Maestra Final</h3>
            <p>El álbum presenta algunas de las composiciones más sofisticadas de la banda:</p>
            
            <ul>
                <li><strong>"Come Together"</strong> - El groove hipnótico de Lennon que abre el álbum</li>
                <li><strong>"Something"</strong> - La primera canción de George Harrison en ser lado A de un single</li>
                <li><strong>"Here Comes the Sun"</strong> - El optimismo de Harrison tras un invierno difícil</li>
                <li><strong>El Medley del Lado B</strong> - Una suite musical que fluye sin interrupciones</li>
            </ul>
            
            <h3>Innovación en el Estudio</h3>
            <p>Abbey Road showcaseó las habilidades de producción de George Martin y la banda. El uso de sintetizadores Moog, técnicas de grabación avanzadas y arreglos orquestales complejos establecieron nuevos estándares para la producción musical.</p>
            
            <h3>El Final de una Era</h3>
            <p>Aunque las tensiones internas ya eran evidentes, Abbey Road demostró que The Beatles aún podían crear música extraordinaria juntos. El álbum alcanzó el número 1 en múltiples países y sigue siendo considerado uno de los mejores álbumes de todos los tiempos.</p>
            
            <p>La última canción del álbum, "The End", contiene la profética línea: "And in the end, the love you take is equal to the love you make" - un mensaje que resume perfectamente el legado duradero de The Beatles.</p>
        `,
  },
  "hip-hop-bronx": {
    id: "hip-hop-bronx",
    titulo: "El Nacimiento del Hip Hop en el Bronx",
    categoria: "origenes-musicales",
    etiquetas: ["Hip Hop", "Bronx", "DJ Kool Herc"],
    autor: "Redacción MUGIC!",
    fecha: "5 de Agosto, 2024",
    tiempoLectura: "7 min",
    imagen: "../imagenes/hip-hop-bronx.jpg",
    extracto: "Cómo DJ Kool Herc y una fiesta en el Bronx dieron origen al movimiento cultural más influyente.",
    contenido: `
            <h2>Una Fiesta que Cambió la Música Mundial</h2>
            <p>El 11 de agosto de 1973, en el 1520 de Sedgwick Avenue en el Bronx, una fiesta de cumpleaños se convirtió en el momento fundacional del hip hop. DJ Kool Herc, un joven jamaicano de 18 años, no sabía que estaba creando un movimiento cultural que conquistaría el mundo.</p>
            
            <h3>Los Cuatro Elementos</h3>
            <p>El hip hop nació como una cultura completa con cuatro elementos fundamentales:</p>
            
            <ul>
                <li><strong>DJing</strong> - El arte de mezclar y manipular discos</li>
                <li><strong>MCing/Rap</strong> - La poesía rítmica hablada sobre beats</li>
                <li><strong>Breaking</strong> - La danza acrobática del breakdance</li>
                <li><strong>Graffiti</strong> - El arte visual urbano</li>
            </ul>
            
            <h3>La Innovación del Break Beat</h3>
            <p>Kool Herc observó que los bailarines se emocionaban más durante los "breaks" instrumentales de las canciones. Usando dos tornamesas, comenzó a extender estos momentos, creando el "break beat" - la base rítmica del hip hop.</p>
            
            <blockquote>"Veía a los chicos esperando toda la canción solo por ese momento del break. Pensé: '¿Por qué no darles solo esa parte?'" - DJ Kool Herc</blockquote>
            
            <h3>Del Bronx al Mundo</h3>
            <p>Lo que comenzó en fiestas de barrio pronto se extendió por Nueva York. Pioneros como Grandmaster Flash, Afrika Bambaataa y Grandmaster Caz desarrollaron y refinaron las técnicas, mientras que grupos como Sugarhill Gang llevaron el rap a las radios comerciales con "Rapper's Delight" en 1979.</p>
            
            <h3>Más que Música: Una Voz para los Marginados</h3>
            <p>El hip hop nació en comunidades afroamericanas y latinas que habían sido ignoradas por los medios mainstream. Se convirtió en una forma de expresar las realidades de la vida urbana, desde la pobreza hasta la violencia, pero también la creatividad y la resistencia.</p>
            
            <h3>El Impacto Global</h3>
            <p>Desde sus humildes orígenes en el Bronx, el hip hop se ha convertido en el género musical más popular del mundo. Ha influenciado la moda, el lenguaje, la política y la cultura popular de manera sin precedentes.</p>
            
            <p>Artistas como Run-DMC, Public Enemy, N.W.A, Tupac, Biggie, Jay-Z, Eminem, Kendrick Lamar y muchos otros han llevado el hip hop a nuevas alturas artísticas y comerciales, pero todo comenzó con una fiesta en el Bronx y la visión de un joven DJ jamaicano.</p>
        `,
  },
  "revolucion-electronica": {
    id: "revolucion-electronica",
    titulo: "La Revolución Electrónica: De Kraftwerk a la Pista de Baile",
    categoria: "evolucion-tecnologica",
    etiquetas: ["Electrónica", "Kraftwerk", "Sintetizadores"],
    autor: "Redacción MUGIC!",
    fecha: "1 de Agosto, 2024",
    tiempoLectura: "9 min",
    imagen: "../imagenes/kraftwerk-electronica.jpg",
    extracto: "Cómo los sintetizadores transformaron la música desde los pioneros alemanes hasta el EDM.",
    contenido: `
            <h2>Los Pioneros de Düsseldorf</h2>
            <p>En 1970, cuatro músicos alemanes en Düsseldorf comenzaron a experimentar con sintetizadores y cajas de ritmos, sin saber que estaban sentando las bases de géneros que dominarían las décadas siguientes. Kraftwerk no solo creó música electrónica; creó el futuro.</p>
            
            <h3>La Filosofía de la Máquina</h3>
            <p>Kraftwerk abrazó la estética industrial y tecnológica de la Alemania post-guerra. Sus álbumes como "Autobahn" (1974), "Radio-Activity" (1975) y "Trans-Europe Express" (1977) exploraron temas de modernidad, tecnología y comunicación.</p>
            
            <blockquote>"Somos músicos trabajadores. Trabajamos con máquinas, pero las máquinas no trabajan solas." - Ralf Hütter, Kraftwerk</blockquote>
            
            <h3>La Tecnología como Instrumento</h3>
            <p>Los sintetizadores Moog, ARP y más tarde los samplers digitales permitieron a los músicos crear sonidos imposibles con instrumentos tradicionales. Esta revolución tecnológica democratizó la creación musical.</p>
            
            <h3>La Explosión de Géneros</h3>
            <p>La música electrónica se ramificó en múltiples direcciones:</p>
            
            <ul>
                <li><strong>Disco</strong> - Giorgio Moroder y Donna Summer llevaron la electrónica a las pistas de baile</li>
                <li><strong>New Wave</strong> - Bandas como Depeche Mode y New Order fusionaron rock y electrónica</li>
                <li><strong>House</strong> - Chicago creó el house music en los 80s</li>
                <li><strong>Techno</strong> - Detroit respondió con un sonido más industrial</li>
                <li><strong>Ambient</strong> - Brian Eno exploró paisajes sonoros atmosféricos</li>
            </ul>
            
            <h3>La Era Digital</h3>
            <p>Los años 90 trajeron la revolución digital. Software como Pro Tools, Logic y más tarde Ableton Live pusieron estudios completos en computadoras personales. La música electrónica se volvió más accesible que nunca.</p>
            
            <h3>El Fenómeno EDM</h3>
            <p>En los 2000s, la Electronic Dance Music (EDM) conquistó festivales masivos. DJs como Tiësto, David Guetta, Skrillex y Calvin Harris se convirtieron en superstrellas globales, llevando la música electrónica a audiencias mainstream.</p>
            
            <h3>Subgéneros y Evolución Constante</h3>
            <p>La música electrónica continúa evolucionando con subgéneros como:</p>
            <ul>
                <li>Dubstep y sus variaciones</li>
                <li>Future Bass y Trap electrónico</li>
                <li>Lo-fi Hip Hop y Chillwave</li>
                <li>Synthwave y retrowave</li>
            </ul>
            
            <h3>El Legado Infinito</h3>
            <p>Desde los experimentos de Kraftwerk hasta los festivales masivos de hoy, la música electrónica ha demostrado que la tecnología no deshumaniza la música, sino que abre nuevas posibilidades expresivas.</p>
            
            <p>La revolución que comenzó en Düsseldorf continúa en cada bedroom producer, en cada DJ set, en cada festival. La música electrónica no es solo un género; es una filosofía que abraza el futuro y las infinitas posibilidades de la creatividad humana amplificada por la tecnología.</p>
        `,
  },
}

// Estado de la aplicación
const estadoApp = {
  categoriaActiva: "todos",
  cronicaActual: null,
  vistaActual: "grid", // 'grid' o 'detalle'
}

// Inicialización cuando el DOM está listo
document.addEventListener("DOMContentLoaded", () => {
  inicializarCronicas()
  configurarEventos()
})

// Función principal de inicialización
function inicializarCronicas() {
  configurarFiltros()
  configurarTarjetas()
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

  // Botón volver al grid
  const botonVolver = document.getElementById("botonVolverGrid")
  if (botonVolver) {
    botonVolver.addEventListener("click", volverAlGrid)
  }

  // Navegación con teclado
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && estadoApp.vistaActual === "detalle") {
      volverAlGrid()
    }
  })
}

// Configurar filtros
function configurarFiltros() {
  // Los filtros ya están configurados en el HTML
  // Esta función puede expandirse para filtros dinámicos
}

// Configurar tarjetas de crónicas
function configurarTarjetas() {
  const tarjetas = document.querySelectorAll(".tarjeta-cronica")
  tarjetas.forEach((tarjeta) => {
    tarjeta.addEventListener("click", (e) => {
      const cronicaId = tarjeta.getAttribute("data-cronica")
      mostrarDetalleCronica(cronicaId)
    })

    // Efecto hover mejorado
    tarjeta.addEventListener("mouseenter", () => {
      tarjeta.style.transform = "translateY(-5px) scale(1.02)"
    })

    tarjeta.addEventListener("mouseleave", () => {
      tarjeta.style.transform = "translateY(0) scale(1)"
    })
  })
}

// Cambiar filtro de categoría
function cambiarFiltro(categoria) {
  estadoApp.categoriaActiva = categoria

  // Actualizar botones de filtro
  document.querySelectorAll(".boton-filtro").forEach((boton) => {
    boton.classList.remove("activo")
  })
  document.querySelector(`[data-categoria="${categoria}"]`).classList.add("activo")

  // Filtrar tarjetas
  const tarjetas = document.querySelectorAll(".tarjeta-cronica")
  tarjetas.forEach((tarjeta) => {
    const categoriaTarjeta = tarjeta.getAttribute("data-categoria")

    if (categoria === "todos" || categoriaTarjeta === categoria) {
      tarjeta.classList.remove("oculta")
      tarjeta.classList.add("visible")
      tarjeta.style.display = "block"
    } else {
      tarjeta.classList.add("oculta")
      tarjeta.classList.remove("visible")
      tarjeta.style.display = "none"
    }
  })

  // Animación de aparición
  setTimeout(() => {
    document.querySelectorAll(".tarjeta-cronica.visible").forEach((tarjeta, index) => {
      tarjeta.style.animationDelay = `${index * 0.1}s`
    })
  }, 50)
}

// Mostrar detalle de crónica
function mostrarDetalleCronica(cronicaId) {
  const cronica = cronicasData[cronicaId]
  if (!cronica) return

  estadoApp.cronicaActual = cronicaId
  estadoApp.vistaActual = "detalle"

  // Ocultar grid y mostrar detalle
  document.getElementById("gridCronicas").style.display = "none"
  document.getElementById("vistaDetalle").style.display = "block"

  // Llenar contenido del artículo
  llenarDetalleArticulo(cronica)

  // Scroll al inicio
  window.scrollTo({ top: 0, behavior: "smooth" })
}

// Llenar contenido del artículo detallado
function llenarDetalleArticulo(cronica) {
  // Imagen
  const imagen = document.getElementById("imagenArticulo")
  imagen.src = cronica.imagen
  imagen.alt = cronica.titulo

  // Etiquetas
  const etiquetas = document.getElementById("etiquetasArticulo")
  etiquetas.innerHTML = cronica.etiquetas.map((etiqueta) => `<span class="etiqueta">${etiqueta}</span>`).join("")

  // Título
  document.getElementById("tituloArticulo").textContent = cronica.titulo

  // Meta información
  const meta = document.getElementById("metaArticulo")
  meta.innerHTML = `
        <div class="info-meta">
            <span class="icono-meta">👤</span>
            <span>${cronica.autor}</span>
        </div>
        <div class="info-meta">
            <span class="icono-meta">📅</span>
            <span>${cronica.fecha}</span>
        </div>
        <div class="info-meta">
            <span class="icono-meta">⏱️</span>
            <span>${cronica.tiempoLectura}</span>
        </div>
    `

  // Contenido
  document.getElementById("contenidoArticulo").innerHTML = cronica.contenido
}

// Volver al grid de crónicas
function volverAlGrid() {
  estadoApp.vistaActual = "grid"
  estadoApp.cronicaActual = null

  // Mostrar grid y ocultar detalle
  document.getElementById("gridCronicas").style.display = "grid"
  document.getElementById("vistaDetalle").style.display = "none"

  // Scroll al inicio
  window.scrollTo({ top: 0, behavior: "smooth" })
}

// Función utilitaria para obtener crónicas por categoría
function obtenerCronicasPorCategoria(categoria) {
  if (categoria === "todos") {
    return Object.values(cronicasData)
  }
  return Object.values(cronicasData).filter((cronica) => cronica.categoria === categoria)
}

// Función para búsqueda (para futuras implementaciones)
function buscarCronicas(termino) {
  const terminoLower = termino.toLowerCase()
  return Object.values(cronicasData).filter(
    (cronica) =>
      cronica.titulo.toLowerCase().includes(terminoLower) ||
      cronica.extracto.toLowerCase().includes(terminoLower) ||
      cronica.etiquetas.some((etiqueta) => etiqueta.toLowerCase().includes(terminoLower)),
  )
}

// Hacer disponible globalmente para debugging
window.cronicasDebug = {
  estado: estadoApp,
  datos: cronicasData,
  buscar: buscarCronicas,
  mostrarDetalle: mostrarDetalleCronica,
}
