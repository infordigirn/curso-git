(function() {
  'use strict';

  function somaDoisNumeros(x, y){
    return x + y;
  }

  somaDoisNumeros();

  console.log(somaDoisNumeros(5, 10));

  function multiplyNumbers(x, y) {
    return x * y;
  }

  multiplyNumbers();

  console.log(multiplyNumbers(5, 5));

  function dividerNumbers(x, y){
    if(x >= y){
      return x / y;
    }
    return "Erro: Imposível dividir";
  }

  dividerNumbers();

  console.log(dividerNumbers(10, 2));

  function substractNumber(x, y){
    return x - y;
  }

  substractNumber();

  console.log(substractNumber(10, 8));

})();