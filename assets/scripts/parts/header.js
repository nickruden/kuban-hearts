document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    const burgerButton = header.querySelector(".burger-button");

    burgerButton.addEventListener('click', () => {
        header.classList.toggle("menu-opened");

        document.body.style.overflow = header.classList.contains("menu-opened") ? "hidden" : "";
    })
})