let library = new Proxy([
  { label: "красная шапочка"},
  { label: "колобок"},
  { label: "теремок"}
  ],
  {
    get(array, prop) {
        
      if (prop in array) {
        return array[prop];
      }
      
      let result;

      for (let book of array) {
        if (book.label === prop) {
          result = book.label;
          break;
        }
      }
      
      if (result) {
        return result.split(" ")
        .map(letter => letter[0].toUpperCase() + letter.substring(1))
        .join(" ");
      }

      return alert("Книга отсутствует");
    },
    set(array, prop, value) {

      if (typeof value === "string") {
        const bookLabelInSmallLetters = value.toLowerCase();

        array[prop] = {label: bookLabelInSmallLetters};
      }

      return true;
      },
      deleteProperty(array, prop) {
        delete array[prop];
        array.length = array.length - 1;
        return true
      }
  }
  );
