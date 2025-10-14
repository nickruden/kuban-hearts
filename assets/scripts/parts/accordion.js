document.addEventListener("DOMContentLoaded", function () {
  // разделение на части
  const accordion = document.querySelector(".my-accordion");
  if (!accordion) return;

  const items = Array.from(accordion.querySelectorAll(".my-accordion__item"));

  if (items.length === 0) return;

  const colLeft = document.createElement("div");
  colLeft.classList.add("my-accordion-col");

  const colRight = document.createElement("div");
  colRight.classList.add("my-accordion-col");

  const middle = Math.ceil(items.length / 2);

  items.forEach((item, index) => {
    if (index < middle) {
      colLeft.appendChild(item);
    } else {
      colRight.appendChild(item);
    }
  });

  accordion.innerHTML = "";
  accordion.appendChild(colLeft);
  accordion.appendChild(colRight);

  
  // логика открытия аккордиона
  function initAccordion(accordionElement) {
    const headers = accordionElement.querySelectorAll(".my-accordion-header");

    headers.forEach((header) => {
      const item = header.closest(".my-accordion__item");

      if (header.classList.contains("active")) {
        const content = header.nextElementSibling;
        content.style.maxHeight = content.scrollHeight + "px";
        item.classList.add("open");
      } else {
        item.classList.remove("open");
      }

      header.addEventListener("click", function () {
        headers.forEach((h) => {
          if (h !== header) {
            h.classList.remove("active");
            const c = h.nextElementSibling;
            c.style.maxHeight = null;
            h.closest(".my-accordion__item").classList.remove("open");
          }
        });

        this.classList.toggle("active");
        const currentContent = this.nextElementSibling;

        if (this.classList.contains("active")) {
          currentContent.style.maxHeight = currentContent.scrollHeight + "px";
          item.classList.add("open");
        } else {
          currentContent.style.maxHeight = null;
          item.classList.remove("open");
        }
      });
    });
  }

  const accordions = document.querySelectorAll(".my-accordion");
  accordions.forEach((accordion) => {
    initAccordion(accordion);
  });
});
