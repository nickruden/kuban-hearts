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