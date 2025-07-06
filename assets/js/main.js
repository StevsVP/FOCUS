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


//Modal Productos
function mostrarDetalle(nombre, descripcion, categoria, precio, imagen) {
  document.getElementById('detalleModalLabel').textContent = nombre;
  document.getElementById('detalle-desc').textContent = descripcion;
  document.getElementById('detalle-cat').textContent = categoria;
  document.getElementById('detalle-precio').textContent = precio;
  const img = document.getElementById('detalle-img');
  img.src = imagen;
  img.alt = nombre;
}

//Retraso animacion
setTimeout(() => {
  document.querySelector("main").classList.add("show-main");
}, 200); // espera 200ms

//Fancy
// Mostrar navbar al cargar y aplicar efecto scroll
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  // Mostrar con animación
  navbar.classList.add("show-navbar");

  // Efecto de scroll
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scroll");
    } else {
      navbar.classList.remove("navbar-scroll");
    }
  });
});



