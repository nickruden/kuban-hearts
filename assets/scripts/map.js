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
