document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("productModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription"); // Asegúrate de que esta línea esté presente
    const modalPrice = document.getElementById("modalPrice");
    const closeModal = document.querySelector(".modal__close");

    document.querySelectorAll(".product-card").forEach(card => {
        const button = card.querySelector(".product-card__button");

        button.addEventListener("click", (e) => {
            e.stopPropagation(); // evita que se dispare otro evento del contenedor si existe

            const img = card.querySelector("img").src;
            const title = card.querySelector(".product-card__title").textContent;
            const description = card.querySelector(".product-card__description").textContent;
            modalDescription.textContent = description; // Asigna la descripción al modal
            const price = card.querySelector(".product-card__price").textContent;

            modalImage.src = img;
            modalTitle.textContent = title;
            modalPrice.textContent = price;

            modal.style.display = "block";
        });
    });


    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});