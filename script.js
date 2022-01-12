var arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('Array: ' + arrayNumeros) 

function isImpar(value) {
    var indicadorI;

    if(value % 2 === 0) {
        indicadorI=0;
    } else {
        indicadorI=1;
    }
    
    return indicadorI >= 1;
  }
  
  var arrayImpares = arrayNumeros.filter(isImpar);

  console.log('Números Ímpares: ' + arrayImpares) 

  function isPar(value) {

    var indicadorP;

    if(value % 2 === 0) {
        indicadorP=1;
    } else {
        indicadorP=0;
    }
    return indicadorP >=1;
  }
  
  var arrayPares = arrayNumeros.filter(isPar);

  console.log('Números Pares: ' + arrayPares) 


