function suma(a, b, callback) {
    let c = a + b;
    callback(c);
  }
  
  function resultado() {
    suma(2, 3, function(resultado) {
      console.log("El resultado es: " + resultado);
    });
  }