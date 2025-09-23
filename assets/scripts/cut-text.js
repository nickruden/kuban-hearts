// МОЖНО ВМЕСТО CSS ОБРЕЗКИ ТЕКСТА ИСПОЛЬЗОВАТЬ ЭТОТ СКРИПТ, ДЛЯ БОЛЬШЕЙ ПОДДЕРЖКИ (НО НАГРУЗКА БУДЕТ НЕМНОГО БОЛЬШЕ НА САЙТ СООТВЕТСТВЕННО)
function truncateText(selector, lines) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((el) => {
    const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
    const maxHeight = lineHeight * lines;

    const originalText = el.textContent.trim();
    let text = originalText;

    el.textContent = text;

    while (el.scrollHeight > maxHeight && text.length > 0) {
      // убираем последнее слово
      text = text.replace(/\s*\S+\s*$/, "");
      el.textContent = text + "…";
    }
  });
}

function cutTextForSymbols(selector, count) {
  const texts = document.querySelectorAll(selector);
  const maxLength = count;

  texts.forEach((el) => {
    let text = el.textContent.trim();

    if (text.length > maxLength) {
      // обрезаем черновик до count
      let truncated = text.slice(0, maxLength);

      // ищем крайний пробел, чтобы не отрезать слово
      let lastSpace = truncated.lastIndexOf(" ");
      if (lastSpace > 0) {
        truncated = truncated.slice(0, lastSpace);
      }

      el.textContent = truncated + "…";
    } else {
      el.textContent = text;
    }
  });
}

// вот тут вызывайте функцию для каждого блока, в котором надо обрезать текст
// параметры truncateText("класс обёртка текста", "кол-во строк, которые должны быть видны до обрезки");
truncateText(".news__card-desc", 3);
