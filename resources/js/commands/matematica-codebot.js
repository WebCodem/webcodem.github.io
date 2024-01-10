function matematica(texto) {
  var respuesta;
  texto = texto.toLowerCase();

  var regexSuma = /(\d+)\s*\+\s*(\d+)/;
  var matchSuma = texto.match(regexSuma);

  var regexResta = /(\d+)\s*\-\s*(\d+)/;
  var matchResta = texto.match(regexResta);

  var regexMultiplicacion = /(\d+)\s*\*\s*(\d+)/;
  var matchMultiplicacion = texto.match(regexMultiplicacion);

  var regexDivision = /(\d+)\s*\/\s*(\d+)/;
  var matchDivision = texto.match(regexDivision);

  var regexRaizCuadrada = /raiz\s+cuadrada\s+de\s*(\d+)/;
  var matchRaizCuadrada = texto.match(regexRaizCuadrada);

  if (matchSuma) {
    var num1 = parseInt(matchSuma[1]);
    var num2 = parseInt(matchSuma[2]);
    var result = num1 + num2;
    respuesta = "La suma de " + num1 + " y " + num2 + " es " + result;
  } else if (matchResta) {
    var num1 = parseInt(matchResta[1]);
    var num2 = parseInt(matchResta[2]);
    var result = num1 - num2;
    respuesta = "La resta de " + num1 + " y " + num2 + " es " + result;
  } else if (matchMultiplicacion) {
    var num1 = parseInt(matchMultiplicacion[1]);
    var num2 = parseInt(matchMultiplicacion[2]);
    var result = num1 * num2;
    respuesta = "La multiplicación de " + num1 + " y " + num2 + " es " + result;
  } else if (matchDivision) {
    var num1 = parseInt(matchDivision[1]);
    var num2 = parseInt(matchDivision[2]);
    var result = num1 / num2;
    respuesta = "La división de " + num1 + " entre " + num2 + " es " + result;
  } else if (matchRaizCuadrada) {
    var num = parseInt(matchRaizCuadrada[1]);
    var result = Math.sqrt(num);
    respuesta = "La raíz cuadrada de " + num + " es " + result;
  } else {
    respuesta = "No entiendo tu mensaje. Por favor, escribe una operación matemática.";
  }

  return respuesta;
}
