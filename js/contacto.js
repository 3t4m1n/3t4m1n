/*
   FUNCIONALIDAD DE LA PÁGINA DE CONTACTO
   Validación de formulario y manejo de envío
*/

// Estado del formulario
const estadoFormulario = {
  nombreValido: false,
  emailValido: false,
  asuntoValido: false,
  mensajeValido: false,
  enviando: false,
}

// Inicialización cuando el DOM está listo
document.addEventListener("DOMContentLoaded", () => {
  configurarValidacionFormulario()
})

// Configurar validación del formulario
function configurarValidacionFormulario() {
  const formulario = document.getElementById("formularioContacto")
  if (!formulario) return

  const campoNombre = document.getElementById("nombre")
  const campoEmail = document.getElementById("email")
  const campoAsunto = document.getElementById("asunto")
  const campoMensaje = document.getElementById("mensaje")

  // Event listeners para validación en tiempo real
  campoNombre.addEventListener("input", () => validarCampo(campoNombre, "nombre"))
  campoEmail.addEventListener("input", () => validarCampo(campoEmail, "email"))
  campoAsunto.addEventListener("change", () => validarCampo(campoAsunto, "asunto"))
  campoMensaje.addEventListener("input", () => validarCampo(campoMensaje, "mensaje"))

  // Event listener para el envío del formulario
  formulario.addEventListener("submit", manejarEnvioFormulario)
}

// Función de validación genérica para campos
function validarCampo(campo, tipo) {
  let esValido = true
  let mensajeError = ""

  if (campo.value.trim() === "") {
    esValido = false
    mensajeError = "Este campo es obligatorio."
  } else {
    if (tipo === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(campo.value.trim())) {
        esValido = false
        mensajeError = "Por favor, introduce un correo electrónico válido."
      }
    } else if (tipo === "asunto" && campo.value === "") {
      esValido = false
      mensajeError = "Por favor, selecciona un asunto."
    } else if (tipo === "mensaje" && campo.value.trim().length < 10) {
      esValido = false
      mensajeError = "El mensaje debe tener al menos 10 caracteres."
    }
  }

  // Actualizar estado y UI
  const errorElement = document.getElementById(`error${capitalizeFirstLetter(tipo)}`)
  if (esValido) {
    campo.classList.remove("error")
    campo.classList.add("valido")
    errorElement.classList.remove("visible")
    errorElement.textContent = ""
  } else {
    campo.classList.add("error")
    campo.classList.remove("valido")
    errorElement.classList.add("visible")
    errorElement.textContent = mensajeError
  }

  // Actualizar estado global
  estadoFormulario[`${tipo}Valido`] = esValido
  actualizarBotonEnvio()

  return esValido
}

// Actualizar estado del botón de envío
function actualizarBotonEnvio() {
  const botonEnviar = document.querySelector(".boton-enviar")
  const todosValidos =
    estadoFormulario.nombreValido &&
    estadoFormulario.emailValido &&
    estadoFormulario.asuntoValido &&
    estadoFormulario.mensajeValido

  botonEnviar.disabled = !todosValidos || estadoFormulario.enviando
}

// Manejar el envío del formulario
async function manejarEnvioFormulario(e) {
  e.preventDefault() // Prevenir el envío por defecto

  // Validar todos los campos antes de enviar
  const campoNombre = document.getElementById("nombre")
  const campoEmail = document.getElementById("email")
  const campoAsunto = document.getElementById("asunto")
  const campoMensaje = document.getElementById("mensaje")

  const nombreValido = validarCampo(campoNombre, "nombre")
  const emailValido = validarCampo(campoEmail, "email")
  const asuntoValido = validarCampo(campoAsunto, "asunto")
  const mensajeValido = validarCampo(campoMensaje, "mensaje")

  if (!nombreValido || !emailValido || !asuntoValido || !mensajeValido) {
    mostrarMensajeConfirmacion("Por favor, corrige los errores en el formulario.", false)
    return
  }

  // Simular envío
  estadoFormulario.enviando = true
  actualizarBotonEnvio()
  const botonEnviar = document.querySelector(".boton-enviar")
  botonEnviar.classList.add("cargando")
  botonEnviar.querySelector(".texto-boton").textContent = "Enviando..."
  botonEnviar.querySelector(".icono-boton").style.display = "none"

  try {
    // Simular una llamada a API o un proceso de envío
    await new Promise((resolve) => setTimeout(resolve, 2000)) // Esperar 2 segundos

    // Aquí iría la lógica real de envío (ej. fetch('/api/contacto', { method: 'POST', body: new FormData(e.target) }))
    console.log("Formulario enviado:", {
      nombre: campoNombre.value,
      email: campoEmail.value,
      asunto: campoAsunto.value,
      mensaje: campoMensaje.value,
    })

    mostrarMensajeConfirmacion("¡Mensaje enviado con éxito!", true)
    e.target.reset() // Limpiar formulario
    // Resetear clases de validación
    campoNombre.classList.remove("valido")
    campoEmail.classList.remove("valido")
    campoAsunto.classList.remove("valido")
    campoMensaje.classList.remove("valido")
    // Resetear estado de validación
    estadoFormulario.nombreValido = false
    estadoFormulario.emailValido = false
    estadoFormulario.asuntoValido = false
    estadoFormulario.mensajeValido = false
  } catch (error) {
    console.error("Error al enviar el formulario:", error)
    mostrarMensajeConfirmacion("Hubo un error al enviar el mensaje. Inténtalo de nuevo.", false)
  } finally {
    estadoFormulario.enviando = false
    actualizarBotonEnvio()
    botonEnviar.classList.remove("cargando")
    botonEnviar.querySelector(".texto-boton").textContent = "Enviar Mensaje"
    botonEnviar.querySelector(".icono-boton").style.display = "inline-block"
  }
}

// Mostrar mensaje de confirmación
function mostrarMensajeConfirmacion(mensaje, exito) {
  const mensajeConfirmacion = document.getElementById("mensajeConfirmacion")
  const tituloConfirmacion = mensajeConfirmacion.querySelector(".titulo-confirmacion")
  const textoConfirmacion = mensajeConfirmacion.querySelector(".texto-confirmacion")
  const iconoConfirmacion = mensajeConfirmacion.querySelector(".icono-confirmacion")

  tituloConfirmacion.textContent = exito ? "¡Mensaje Enviado!" : "Error al Enviar"
  textoConfirmacion.textContent = mensaje
  iconoConfirmacion.textContent = exito ? "✅" : "❌"

  mensajeConfirmacion.style.display = "block"
  mensajeConfirmacion.classList.add("mostrar")

  // Ocultar después de 5 segundos
  setTimeout(() => {
    mensajeConfirmacion.style.display = "none"
    mensajeConfirmacion.classList.remove("mostrar")
  }, 5000)
}

// Función utilitaria para capitalizar la primera letra
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

// Hacer disponible globalmente para debugging
window.contactoDebug = {
  estado: estadoFormulario,
  validarCampo: validarCampo,
}
