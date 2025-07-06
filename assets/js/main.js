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

//Formulario Mensaje Exito Envio
<script>
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Previene el envío real

    // Opcional: validar campos si es necesario (ya son "required", pero por si acaso)
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor completa todos los campos.",
      });
      return;
    }

    // Mostrar mensaje de éxito
    Swal.fire({
      icon: "success",
      title: "Gracias",
      text: "Tu mensaje fue enviado con éxito.",
      confirmButtonText: "Cerrar",
    });

    // Limpia el formulario después de enviar
    document.getElementById("contact-form").reset();
  });
</script>
