// Menú adaptable para celulares.
document.addEventListener("DOMContentLoaded", () => {
  const botonMenu = document.getElementById("menuToggle");
  const menu = document.getElementById("menuPrincipal");

  if (botonMenu && menu) {
    botonMenu.addEventListener("click", () => {
      menu.classList.toggle("abierto");
    });
  }

  // Simulación del nivel de llenado en la página Funcionamiento.
  const controlNivel = document.getElementById("nivelSlider");
  if (controlNivel) {
    controlNivel.addEventListener("input", actualizarNivel);
    actualizarNivel();
  }

  const botonAlerta = document.getElementById("probarAlerta");
  if (botonAlerta) {
    botonAlerta.addEventListener("click", () => {
      const nivel = Number(controlNivel.value);
      const mensaje = document.getElementById("mensajeAlerta");
      if (nivel >= 80) {
        mensaje.textContent = "¡Alerta! La caneca está casi llena. Se recomienda programar la recolección.";
      } else if (nivel >= 50) {
        mensaje.textContent = "Atención: el nivel está aumentando. Conviene revisar la caneca pronto.";
      } else {
        mensaje.textContent = "La caneca aún tiene espacio disponible. Continúa monitoreando el nivel.";
      }
    });
  }

  // Validación y confirmación del formulario de contacto.
  const formulario = document.getElementById("formContacto");
  if (formulario) {
    formulario.addEventListener("submit", (evento) => {
      evento.preventDefault();
      const nombre = document.getElementById("nombre").value.trim();
      const comentario = document.getElementById("comentario").value.trim();
      const respuesta = document.getElementById("respuestaFormulario");

      if (nombre.length < 2 || comentario.length < 5) {
        respuesta.textContent = "Escribe un nombre de al menos 2 caracteres y un mensaje de al menos 5.";
        respuesta.style.color = "#a32222";
        return;
      }

      respuesta.textContent = `¡Gracias, ${nombre}! Tu comentario quedó registrado en esta demostración.`;
      respuesta.style.color = "#167a50";
      formulario.reset();
    });
  }
});

// Actualiza el medidor y el mensaje según el porcentaje elegido.
function actualizarNivel() {
  const control = document.getElementById("nivelSlider");
  const valor = Number(control.value);
  const textoValor = document.getElementById("nivelValor");
  const relleno = document.getElementById("medidorRelleno");
  const estado = document.getElementById("estadoNivel");
  const titulo = document.getElementById("estadoTitulo");
  const texto = document.getElementById("estadoTexto");

  textoValor.textContent = `${valor}%`;
  relleno.style.width = `${valor}%`;
  estado.className = "estado";

  if (valor >= 80) {
    relleno.style.background = "#d94848";
    estado.classList.add("estado-lleno");
    titulo.textContent = "Caneca casi llena";
    texto.textContent = "La simulación recomienda activar una alerta de recolección.";
  } else if (valor >= 50) {
    relleno.style.background = "#e6ae35";
    estado.classList.add("estado-medio");
    titulo.textContent = "Nivel medio";
    texto.textContent = "Conviene prestar atención al aumento de residuos.";
  } else {
    relleno.style.background = "#2caa70";
    estado.classList.add("estado-normal");
    titulo.textContent = "Nivel normal";
    texto.textContent = "La caneca todavía tiene espacio disponible.";
  }
}
