let library = new Proxy([
    { label: 'красная шапочка'},
    { label: 'колобок'},
    { label: 'теремок'}
  ],
  {
    get: function(array, prop) {
    // Получение книги по числу
      if (prop in array) {
        return array[prop];
      }
  
      let result;
  
      for (let book of array) {
        if (book.label === prop) {
          result = book.label;
        }
      }
      // Получение книги по имени
      if (result) {
        return result.split(' ').map(letter => letter[0].toUpperCase() + letter.substring(1)).join(' ')
      }
      else {
          return alert('Книга отсутствует')
      }
    },
    set(array, prop, value) {
        if (typeof value == 'object' && value.label) {
            let nameBookSmallLetter = value.label.toLowerCase();
            array[prop] = {label: nameBookSmallLetter};
            return true;
          } else {
            return false;
          }
        }
    }
  );
  
