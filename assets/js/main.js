(() => {
  const discount10Modal = new bootstrap.Modal(document.getElementById('discount10Modal'));
  const discount25Modal = new bootstrap.Modal(document.getElementById('discount25Modal'));

  // Elementos
  const cartCountNavbar = document.getElementById('cart-count-navbar');
  const addCartButtons = document.querySelectorAll('.btn-add-to-cart'); // botones con clase para agregar

  // Leer carrito de localStorage o iniciar en 0
  let cartCount = parseInt(localStorage.getItem('focusCartCount')) || 0;
  updateCartUI();

  // Actualizar contador visual
  function updateCartUI() {
    if (cartCountNavbar) {
      cartCountNavbar.textContent = cartCount;
      cartCountNavbar.style.display = cartCount > 0 ? 'inline-block' : 'none';
    }
  }

  // Evento click para todos los botones "Agregar al carrito"
  addCartButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      cartCount++;
      localStorage.setItem('focusCartCount', cartCount);
      updateCartUI();

      // Mostrar modal según si es impar o par
      if (cartCount % 2 === 1) discount10Modal.show();
      else discount25Modal.show();
    });
  });

  // Mostrar contador si carrito > 0 al cargar
  updateCartUI();

})();
