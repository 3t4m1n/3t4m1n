/*
   FUNCIONALIDAD DEL LABORATORIO MUSICAL
   Juego interactivo de combinación de géneros musicales
*/

// Datos de géneros musicales con información completa
const generosLaboratorio = {
  africana: {
    id: "africana",
    nombre: "Africana Tradicional",
    emoji: "🪘",
    descripcion: "Ritmos ancestrales comunitarios",
    comunidad: "Tribus y comunidades africanas",
    descubierto: true,
    esBase: true,
  },
  europea: {
    id: "europea",
    nombre: "Folclore Europeo",
    emoji: "🎻",
    descripcion: "Tradiciones populares rurales",
    comunidad: "Comunidades campesinas europeas",
    descubierto: true,
    esBase: true,
  },
  indigena: {
    id: "indigena",
    nombre: "Indígena Americana",
    emoji: "🪶",
    descripcion: "Música ceremonial ancestral",
    comunidad: "Pueblos originarios de América",
    descubierto: true,
    esBase: true,
  },
  asiatica: {
    id: "asiatica",
    nombre: "Asiática Clásica",
    emoji: "🎋",
    descripcion: "Sistemas musicales milenarios",
    comunidad: "Culturas asiáticas tradicionales",
    descubierto: true,
    esBase: true,
  },
  blues: {
    id: "blues",
    nombre: "Blues",
    emoji: "🎸",
    descripcion: "Expresión de la experiencia afroamericana",
    comunidad: "Comunidades afroamericanas del sur",
    descubierto: false,
    esBase: false,
    padres: ["africana", "europea"],
  },
  tango: {
    id: "tango",
    nombre: "Tango",
    emoji: "💃",
    descripcion: "Pasión rioplatense urbana",
    comunidad: "Inmigrantes en Buenos Aires y Montevideo",
    descubierto: false,
    esBase: false,
    padres: ["europea", "africana"],
  },
  jazz: {
    id: "jazz",
    nombre: "Jazz",
    emoji: "🎺",
    descripcion: "Improvisación colectiva urbana",
    comunidad: "Músicos afroamericanos de Nueva Orleans",
    descubierto: false,
    esBase: false,
    padres: ["blues", "europea"],
  },
  reggae: {
    id: "reggae",
    nombre: "Reggae",
    emoji: "🌴",
    descripcion: "Resistencia rastafari jamaicana",
    comunidad: "Comunidades rastafari de Jamaica",
    descubierto: false,
    esBase: false,
    padres: ["africana", "indigena"],
  },
  salsa: {
    id: "salsa",
    nombre: "Salsa",
    emoji: "🌶️",
    descripcion: "Fusión caribeña urbana",
    comunidad: "Comunidades latinas en Nueva York",
    descubierto: false,
    esBase: false,
    padres: ["indigena", "africana"],
  },
  kpop: {
    id: "kpop",
    nombre: "K-Pop",
    emoji: "🌟",
    descripcion: "Fenómeno cultural coreano global",
    comunidad: "Industria musical surcoreana",
    descubierto: false,
    esBase: false,
    padres: ["asiatica", "europea"],
  },
  afrobeat: {
    id: "afrobeat",
    nombre: "Afrobeat",
    emoji: "🎷",
    descripcion: "Fusión africana moderna",
    comunidad: "Músicos nigerianos y diáspora",
    descubierto: false,
    esBase: false,
    padres: ["africana", "jazz"],
  },
  bossanova: {
    id: "bossanova",
    nombre: "Bossa Nova",
    emoji: "🏖️",
    descripcion: "Sofisticación carioca",
    comunidad: "Músicos de Río de Janeiro",
    descubierto: false,
    esBase: false,
    padres: ["jazz", "indigena"],
  },
  hiphop: {
    id: "hiphop",
    nombre: "Hip Hop",
    emoji: "🎤",
    descripcion: "Cultura urbana del Bronx",
    comunidad: "Jóvenes afroamericanos y latinos",
    descubierto: false,
    esBase: false,
    padres: ["blues", "reggae"],
  },
  bollywood: {
    id: "bollywood",
    nombre: "Bollywood",
    emoji: "🎬",
    descripcion: "Cinema musical indio",
    comunidad: "Industria cinematográfica india",
    descubierto: false,
    esBase: false,
    padres: ["asiatica", "europea"],
  },
  electronica: {
    id: "electronica",
    nombre: "Electrónica",
    emoji: "🎛️",
    descripcion: "Música sintética digital",
    comunidad: "Productores y DJs globales",
    descubierto: false,
    esBase: false,
    padres: ["jazz", "kpop"],
  },
}

// Combinaciones válidas para crear nuevos géneros
const combinaciones = {
  "africana+europea": "blues",
  "europea+africana": "tango",
  "blues+europea": "jazz",
  "africana+indigena": "reggae",
  "indigena+africana": "salsa",
  "asiatica+europea": "kpop",
  "africana+jazz": "afrobeat",
  "jazz+indigena": "bossanova",
  "blues+reggae": "hiphop",
  "asiatica+europea": "bollywood",
  "jazz+kpop": "electronica",
}

// Estado del juego
let estadoJuego = {
  puntuacion: 0,
  generosSeleccionados: [],
  generos: { ...generosLaboratorio },
}

// Inicialización cuando el DOM está listo
document.addEventListener("DOMContentLoaded", () => {
  inicializarJuego()
  configurarEventos()
  renderizarGeneros()
  actualizarEstadisticas()
})

// Función principal de inicialización
function inicializarJuego() {
  // Cargar estado guardado si existe
  const estadoGuardado = localStorage.getItem("mugic-laboratorio")
  if (estadoGuardado) {
    estadoJuego = { ...estadoJuego, ...JSON.parse(estadoGuardado) }
  }
}

// Configurar event listeners
function configurarEventos() {
  // Botón de reiniciar
  const botonReiniciar = document.getElementById("botonReiniciar")
  if (botonReiniciar) {
    botonReiniciar.addEventListener("click", reiniciarJuego)
  }

  // Cerrar mensaje con Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      ocultarMensaje()
    }
  })
}

// Renderizar grid de géneros
function renderizarGeneros() {
  const grid = document.getElementById("gridGeneros")
  if (!grid) return

  grid.innerHTML = ""

  Object.values(estadoJuego.generos).forEach((genero) => {
    if (genero.descubierto) {
      const tarjeta = crearTarjetaGenero(genero)
      grid.appendChild(tarjeta)
    }
  })

  // Agregar géneros bloqueados
  Object.values(estadoJuego.generos).forEach((genero) => {
    if (!genero.descubierto) {
      const tarjeta = crearTarjetaBloqueada()
      grid.appendChild(tarjeta)
    }
  })
}

// Crear tarjeta de género disponible
function crearTarjetaGenero(genero) {
  const tarjeta = document.createElement("div")
  tarjeta.className = "tarjeta-genero tarjeta-magica disponible"
  tarjeta.setAttribute("data-genero", genero.id)

  tarjeta.innerHTML = `
        <div class="icono-genero-grande">${genero.emoji}</div>
        <div class="titulo-genero-lab">${genero.nombre}</div>
        <div class="descripcion-genero-lab">${genero.descripcion}</div>
        <div class="info-comunidad-lab">
            <span class="icono-usuarios-lab">👥</span>
            <span class="texto-comunidad-lab">${genero.comunidad}</span>
        </div>
        ${genero.esBase ? '<div class="etiqueta-estado etiqueta-tradicional">Tradicional</div>' : ""}
    `

  // Event listener para selección
  tarjeta.addEventListener("click", () => {
    seleccionarGenero(genero.id, tarjeta)
  })

  return tarjeta
}

// Crear tarjeta bloqueada
function crearTarjetaBloqueada() {
  const tarjeta = document.createElement("div")
  tarjeta.className = "tarjeta-genero tarjeta-magica bloqueada"

  tarjeta.innerHTML = `
        <div class="icono-genero-grande">🔒</div>
        <div class="titulo-genero-lab">???</div>
        <div class="descripcion-genero-lab">Por descubrir</div>
        <div class="etiqueta-estado etiqueta-bloqueada">Bloqueado</div>
    `

  return tarjeta
}

// Seleccionar género para combinación
function seleccionarGenero(generoId, elemento) {
  // Si ya está seleccionado, deseleccionar
  if (estadoJuego.generosSeleccionados.includes(generoId)) {
    deseleccionarGenero(generoId, elemento)
    return
  }

  // Si ya hay 2 seleccionados, no permitir más
  if (estadoJuego.generosSeleccionados.length >= 2) {
    mostrarMensaje("Solo puedes seleccionar 2 géneros a la vez")
    return
  }

  // Seleccionar género
  estadoJuego.generosSeleccionados.push(generoId)
  elemento.classList.add("seleccionada")

  // Actualizar panel de mezcla
  actualizarPanelMezcla()

  // Si hay 2 seleccionados, intentar combinación
  if (estadoJuego.generosSeleccionados.length === 2) {
    setTimeout(() => {
      intentarCombinacion()
    }, 1000)
  }
}

// Deseleccionar género
function deseleccionarGenero(generoId, elemento) {
  estadoJuego.generosSeleccionados = estadoJuego.generosSeleccionados.filter((id) => id !== generoId)
  elemento.classList.remove("seleccionada")
  actualizarPanelMezcla()
}

// Actualizar panel de mezcla
function actualizarPanelMezcla() {
  const panel = document.getElementById("panelMezcla")
  const genero1 = document.getElementById("genero1")
  const genero2 = document.getElementById("genero2")
  const resultado = document.getElementById("resultadoMezcla")

  if (estadoJuego.generosSeleccionados.length === 0) {
    panel.style.display = "none"
    return
  }

  panel.style.display = "block"

  // Actualizar primer género
  if (estadoJuego.generosSeleccionados[0]) {
    const genero = estadoJuego.generos[estadoJuego.generosSeleccionados[0]]
    genero1.innerHTML = `
            <div class="emoji-genero">${genero.emoji}</div>
            <div class="nombre-genero">${genero.nombre}</div>
        `
    genero1.classList.add("activo")
  } else {
    genero1.innerHTML = `
            <div class="emoji-genero">❓</div>
            <div class="nombre-genero">Selecciona uno</div>
        `
    genero1.classList.remove("activo")
  }

  // Actualizar segundo género
  if (estadoJuego.generosSeleccionados[1]) {
    const genero = estadoJuego.generos[estadoJuego.generosSeleccionados[1]]
    genero2.innerHTML = `
            <div class="emoji-genero">${genero.emoji}</div>
            <div class="nombre-genero">${genero.nombre}</div>
        `
    genero2.classList.add("activo")
  } else {
    genero2.innerHTML = `
            <div class="emoji-genero">❓</div>
            <div class="nombre-genero">Selecciona otro</div>
        `
    genero2.classList.remove("activo")
  }

  // Actualizar resultado
  if (estadoJuego.generosSeleccionados.length === 2) {
    resultado.innerHTML = `
            <div class="emoji-genero">✨</div>
            <div class="nombre-genero">Creando fusión...</div>
        `
  } else {
    resultado.innerHTML = `
            <div class="emoji-genero">✨</div>
            <div class="nombre-genero">Resultado</div>
        `
  }
}

// Intentar combinación de géneros
function intentarCombinacion() {
  const [genero1, genero2] = estadoJuego.generosSeleccionados.sort()
  const claveCombinacion = `${genero1}+${genero2}`
  const resultadoId = combinaciones[claveCombinacion]

  if (resultadoId && estadoJuego.generos[resultadoId]) {
    const generoResultado = estadoJuego.generos[resultadoId]

    if (!generoResultado.descubierto) {
      // ¡Nuevo descubrimiento!
      generoResultado.descubierto = true
      estadoJuego.puntuacion += 100

      mostrarMensaje(`¡Descubriste ${generoResultado.nombre}! ${generoResultado.emoji}`, true)

      // Actualizar resultado en panel
      const resultado = document.getElementById("resultadoMezcla")
      resultado.innerHTML = `
                <div class="emoji-genero">${generoResultado.emoji}</div>
                <div class="nombre-genero">${generoResultado.nombre}</div>
            `

      // Re-renderizar después de un momento
      setTimeout(() => {
        renderizarGeneros()
        actualizarEstadisticas()
        limpiarSeleccion()
        guardarEstado()
      }, 3000)
    } else {
      mostrarMensaje("Ya descubriste este género")
      setTimeout(() => {
        limpiarSeleccion()
      }, 2000)
    }
  } else {
    mostrarMensaje("Esta combinación aún no existe en nuestro laboratorio")
    setTimeout(() => {
      limpiarSeleccion()
    }, 2000)
  }
}

// Limpiar selección actual
function limpiarSeleccion() {
  estadoJuego.generosSeleccionados = []

  // Remover clases de selección
  document.querySelectorAll(".tarjeta-genero").forEach((tarjeta) => {
    tarjeta.classList.remove("seleccionada")
  })

  // Ocultar panel de mezcla
  document.getElementById("panelMezcla").style.display = "none"
}

// Mostrar mensaje del juego
function mostrarMensaje(texto, esDescubrimiento = false) {
  const mensaje = document.getElementById("mensajeJuego")
  const textoMensaje = document.getElementById("textoMensaje")

  textoMensaje.textContent = texto
  mensaje.style.display = "block"

  if (esDescubrimiento) {
    mensaje.querySelector(".tarjeta-mensaje").style.animation = "aparecer 0.3s ease-out, pulse 2s ease-in-out infinite"
  }

  // Auto-ocultar después de 3 segundos
  setTimeout(() => {
    ocultarMensaje()
  }, 3000)
}

// Ocultar mensaje
function ocultarMensaje() {
  const mensaje = document.getElementById("mensajeJuego")
  mensaje.style.display = "none"
  mensaje.querySelector(".tarjeta-mensaje").style.animation = ""
}

// Actualizar estadísticas mostradas
function actualizarEstadisticas() {
  const puntuacionElement = document.getElementById("puntuacion")
  const descubiertosElement = document.getElementById("descubiertos")

  if (puntuacionElement) {
    puntuacionElement.textContent = estadoJuego.puntuacion
  }

  if (descubiertosElement) {
    const totalDescubiertos = Object.values(estadoJuego.generos).filter((g) => g.descubierto).length
    const totalGeneros = Object.keys(estadoJuego.generos).length
    descubiertosElement.textContent = `${totalDescubiertos}/${totalGeneros}`
  }
}

// Reiniciar juego
function reiniciarJuego() {
  if (confirm("¿Estás seguro de que quieres reiniciar el juego? Se perderá todo el progreso.")) {
    // Resetear estado
    estadoJuego = {
      puntuacion: 0,
      generosSeleccionados: [],
      generos: { ...generosLaboratorio },
    }

    // Limpiar localStorage
    localStorage.removeItem("mugic-laboratorio")

    // Re-renderizar
    renderizarGeneros()
    actualizarEstadisticas()
    limpiarSeleccion()

    mostrarMensaje("¡Juego reiniciado! Comienza a experimentar de nuevo.")
  }
}

// Guardar estado en localStorage
function guardarEstado() {
  localStorage.setItem(
    "mugic-laboratorio",
    JSON.stringify({
      puntuacion: estadoJuego.puntuacion,
      generos: estadoJuego.generos,
    }),
  )
}

// Función utilitaria para debugging
function obtenerEstadoJuego() {
  return estadoJuego
}

// Hacer disponible globalmente para debugging
window.laboratorioDebug = {
  estado: estadoJuego,
  reiniciar: reiniciarJuego,
  descubrirTodos: () => {
    Object.values(estadoJuego.generos).forEach((genero) => {
      genero.descubierto = true
    })
    renderizarGeneros()
    actualizarEstadisticas()
  },
}
