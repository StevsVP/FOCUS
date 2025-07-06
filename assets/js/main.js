function mostrarHoraActual() {
  const ahora = new Date();
  let horas = ahora.getHours().toString().padStart(2, '0');
  let minutos = ahora.getMinutes().toString().padStart(2, '0');
  let segundos = ahora.getSeconds().toString().padStart(2, '0');

  const horaFormateada = `${horas}:${minutos}:${segundos}`;

  const elemento = document.getElementById('clock-time');
  if (elemento) {
    elemento.textContent = horaFormateada;
  }
}

// Iniciar el reloj
setInterval(mostrarHoraActual, 1000);
mostrarHoraActual();
