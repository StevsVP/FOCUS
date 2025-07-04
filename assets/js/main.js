(() => {
  const btnAdd = document.getElementById('add-to-cart');
  const cartCountEl = document.getElementById('cart-count');

  let cartCount = 0;
  const discount10Modal = new bootstrap.Modal(document.getElementById('discount10Modal'));
  const discount25Modal = new bootstrap.Modal(document.getElementById('discount25Modal'));

  btnAdd.addEventListener('click', () => {
    cartCount++;
    cartCountEl.textContent = cartCount;

    if (cartCount % 2 === 1) discount10Modal.show();
    else discount25Modal.show();
  });
})();
