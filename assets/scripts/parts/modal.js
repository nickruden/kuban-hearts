document.addEventListener("DOMContentLoaded", function () {
  const modalOpeners = document.querySelectorAll("[data-open-modal]");

  modalOpeners.forEach((opener) => {
    opener.addEventListener("click", function (e) {
      e.preventDefault();

      let modalId = opener.getAttribute("data-open-modal");
      if (modalId.startsWith("#")) modalId = modalId.slice(1);

      const modal = document.getElementById(modalId);

      document.body.style.overflow = "hidden";
      modal.style.display = "flex";
      modal.setAttribute("opened", "");

      modal.addEventListener("click", function (e) {
        if (e.target === this) {
          this.style.display = "none";
          modal.removeAttribute("opened");
          document.body.style.overflow = "";
        }
      });

      const closeButtons = modal.querySelectorAll(".close-modal-button");
      closeButtons.forEach((btn) => {
        btn.addEventListener("click", function () {
          modal.style.display = "none";
          modal.removeAttribute("opened");
          document.body.style.overflow = "";
        });
      });
    });
  });
});