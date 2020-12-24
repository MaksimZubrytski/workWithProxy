let products = new Proxy([
    { label: 'красная шапочка'},
    { label: 'колобок'},
    { label: 'теремок'}
  ],
  {
    get: function(obj, prop) {
    // Получение книги по числу
      if (prop in obj) {
        return obj[prop];
      }
  
      let result;
  
      for (let product of obj) {
        if (product.label === prop) {
          result = product.label;
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
    set(mass, prop, value) {
        if (typeof value == 'object' && value.label) {
            let nameBookSmallLetter = value.label.toLowerCase();
            mass[prop] = {label: nameBookSmallLetter};
            return true;
          } else {
            return false;
          }
        }
    }
  );
  
