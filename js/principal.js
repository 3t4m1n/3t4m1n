/*
   FUNCIONALIDAD GLOBAL PARA TODO EL SITIO MUGIC!
   Incluye efectos de animación, navegación y utilidades comunes.
*/

document.addEventListener("DOMContentLoaded", () => {
  // Inicializar animaciones flotantes
  inicializarAnimacionesFlotantes()
  // Configurar enlaces de navegación "Continúa Explorando"
  configurarNavegacionContinua()
})

/**
 * Inicializa las animaciones de flotación para elementos con la clase 'animacion-flotante'.
 * Estos elementos se moverán suavemente hacia arriba y abajo para dar un efecto dinámico.
 */
function inicializarAnimacionesFlotantes() {
  const elementosFlotantes = document.querySelectorAll(".animacion-flotante")
  elementosFlotantes.forEach((el) => {
    el.style.animation = "float 3s ease-in-out infinite"
  })
}

/**
 * Configura los enlaces de navegación en las secciones "Continúa Explorando".
 * Asegura que los enlaces funcionen correctamente y puedan tener efectos visuales.
 */
function configurarNavegacionContinua() {
  const botonesNavegacion = document.querySelectorAll(".botones-navegacion .boton-magico")
  botonesNavegacion.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      // Opcional: Añadir alguna animación o feedback visual al hacer click
      boton.classList.add("clic-animado")
      setTimeout(() => {
        boton.classList.remove("clic-animado")
      }, 500) // Remover la clase después de la animación
    })
  })
}

/**
 * Función utilitaria para el efecto de "debounce".
 * Retrasa la ejecución de una función hasta que haya pasado un cierto tiempo
 * sin que se la vuelva a llamar. Útil para búsquedas o redimensionamiento.
 * @param {Function} func - La función a ejecutar.
 * @param {number} delay - El tiempo de espera en milisegundos.
 * @returns {Function} - La función debounced.
 */
function debounce(func, delay) {
  let timeout
  return function (...args) {
    
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), delay)
  }
}

/**
 * Función utilitaria para el efecto de "throttle".
 * Limita la frecuencia con la que se ejecuta una función a un máximo de una vez
 * en un período de tiempo determinado. Útil para eventos de scroll o mousemove.
 * @param {Function} func - La función a ejecutar.
 * @param {number} limit - El límite de tiempo en milisegundos.
 * @returns {Function} - La función throttled.
 */
function throttle(func, limit) {
  let inThrottle
  return function (...args) {
    
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Exportar funciones utilitarias si es necesario para otros scripts
// window.MUGIC_Utils = { debounce, throttle };
