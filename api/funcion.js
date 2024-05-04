function calcular() {
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  var operacion = document.getElementById('operation').value;

  var resultado;
  switch (operacion) {
    case 'sumar':
      resultado = sumar(num1, num2);
      break;
    case 'restar':
      resultado = restar(num1, num2);
      break;
    case 'multiplicar':
      resultado = multiplicar(num1, num2);
      break;
    case 'dividir':
      resultado = dividir(num1, num2);
      break;
  }

  document.getElementById('resultado').innerHTML = "El resultado es: " + resultado;
}
