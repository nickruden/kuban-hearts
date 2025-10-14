// == НЕОБЯЗАТЕЛЬНЫЙ СКРИПТ ==

// МОЖНО ВМЕСТО CSS ОБРЕЗКИ ТЕКСТА ИСПОЛЬЗОВАТЬ ЭТОТ СКРИПТ, ДЛЯ БОЛЬШЕЙ ПОДДЕРЖКИ(ОН ТУТ НА ВСЯКИЙ СЛУЧАЙ)


// ЕСЛИ ЕГО ИСПОЛЬЗОВАТЬ, НАДО БУДЕТ УДАЛИТЬ В styles/pages/main.css И В styles/pages/news.css И В styles/pages/programs.css БЛОК СТИЛЕЙ ПОД НАДПИСЬЮ - ТУТ ОБРЕЗКА ТЕКСТА
// КАК ИСПОЛЬЗОВАТЬ НАПИСАНО НИЖЕ

function truncateText(selector, lines) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((el) => {
    const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
    const maxHeight = lineHeight * lines;

    const originalText = el.textContent.trim();
    let text = originalText;

    el.textContent = text;

    while (el.scrollHeight > maxHeight && text.length > 0) {
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
      let truncated = text.slice(0, maxLength);

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

// параметры cutTextForSymbols("класс обёртка текста", "кол-во символов, которые останутся до обрезки");
cutTextForSymbols(".event-calendar__card-texts p", 123);
