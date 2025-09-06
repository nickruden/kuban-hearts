function truncateText(selector, lines) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(el => {
        const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
        const maxHeight = lineHeight * lines;

        // сохраняем оригинальный текст
        const originalText = el.textContent.trim();
        let text = originalText;

        el.textContent = text;

        // если высота блока превышает допустимую
        while (el.scrollHeight > maxHeight && text.length > 0) {
            // убираем последнее слово
            text = text.replace(/\s*\S+\s*$/, '');
            el.textContent = text + '…';
        }
    });
}

truncateText('.news__card-desc', 3);