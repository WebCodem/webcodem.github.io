function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return 'Error: División por cero';
  }
  return a / b;
}

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
