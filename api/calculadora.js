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

document.write('<h1>Calculadora</h1>');

document.write('<label for="num1">Número 1:</label>');
document.write('<input type="number" id="num1"><br><br>');

document.write('<label for="operation">Operación:</label>');
document.write('<select id="operation">');
document.write('<option value="sumar">Sumar</option>');
document.write('<option value="restar">Restar</option>');
document.write('<option value="multiplicar">Multiplicar</option>');
document.write('<option value="dividir">Dividir</option>');
document.write('</select><br><br>');

document.write('<label for="num2">Número 2:</label>');
document.write('<input type="number" id="num2"><br><br>');

document.write('<button onclick="calcular()">Calcular</button><br><br>');

document.write('<div id="resultado"></div>');

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
