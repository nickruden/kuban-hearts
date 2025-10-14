// в папке parts - те же скрипты, только по файлам, каждый отдельно

// хедер, открытие мобильного меню
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    const burgerButton = header.querySelector(".burger-button");

    burgerButton.addEventListener('click', () => {
        header.classList.toggle("menu-opened");

        document.body.style.overflow = header.classList.contains("menu-opened") ? "hidden" : "";
    })
})


// инициализация фенсибоксов
Fancybox.bind("[data-fancybox]", {
  Carousel: {
    Thumbs: false,
    Toolbar: {
      display: {
        left: ["counter"],
        middle: [],
        right: ["close"],
      },
    },
  },
});


// маска телефона
document.querySelectorAll('[type="tel"]').forEach(function(input) {
  new IMask(input, {
    mask: '+{7} (000) 000 00 00',
    prepare: function(appended, masked) {
      if (appended === '8' && masked.value === '') {
        return '7';
      }
      return appended;
    },
  });
});


// полоса прогресса для карточек Текущие проекты
document.addEventListener("DOMContentLoaded", () => {
  const rangeItems = document.querySelectorAll(".range-item");

  rangeItems.forEach((item) => {
    const total = parseInt(item.getAttribute("data-total"), 10);
    const collected = parseInt(item.getAttribute("data-collected"), 10);
    const percent = Math.min((collected / total) * 100, 100);

    const line = item.querySelector(".range-item__line");
    line.style.setProperty("--percent", percent + "%");
  });
});


// открытие и разделение аккордиона
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


// модальное окно
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


// инициализация карты в футере
document.addEventListener("DOMContentLoaded", function () {
  const addresses = [
    { name: "Рашпилевская улица, 86", coords: [45.033018, 38.971271] },
  ];

  const mapContainer = document.querySelector(".map-wrap");
  mapContainer.innerHTML = '<div id="yandex-map"></div>';

  ymaps.ready(init);

  function init() {
    const map = new ymaps.Map("yandex-map", {
      center: addresses[0].coords,
      zoom: 13,
      controls: ["zoomControl"],
    });

    // Добавляем метки
    addresses.forEach((addr) => {
      const placemark = new ymaps.Placemark(
        addr.coords,
        { balloonContent: addr.name },
        {
          preset: "islands#redPocketIcon",
          iconColor: "red",
        }
      );
      map.geoObjects.add(placemark);
    });

    if (addresses.length > 1) {
      map.setBounds(map.geoObjects.getBounds(), {
        checkZoomRange: true,
      });
    }
  }
});

