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

document.write('<style>');
document.write('body {');
document.write('    background-color: #ffffff;');
document.write('    display: flex;');
document.write('    justify-content: center;');
document.write('    align-items: center;');
document.write('    height: 100vh;');
document.write('}');
document.write('.container {');
document.write('    width: 300px;');
document.write('    padding: 20px;');
document.write('    border: 1px solid #ccc;');
document.write('    background-color: #292929;');
document.write('    border-radius: 10px;');
document.write('    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);');
document.write('    color: white;');
document.write('}');
document.write('h1 {');
document.write('    text-align: center;');
document.write('}');
document.write('label {');
document.write('    display: block;');
document.write('    margin-bottom: 5px;');
document.write('}');
document.write('input[type="number"], select, button {');
document.write('    margin-bottom: 15px;');
document.write('    width: calc(100% - 0px);'); 
document.write('    padding: 10px;');
document.write('    border-radius: 5px;');
document.write('    background-color: #444;');
document.write('    border: 1px solid #ccc;');
document.write('    color: white;');
document.write('    box-sizing: border-box;');
document.write('}');
document.write('button {');
document.write('    background-color: #007bff;');
document.write('    color: white;');
document.write('    border: none;');
document.write('    cursor: pointer;');
document.write('}');
document.write('#resultado {');
document.write('    text-align: center;');
document.write('}');
document.write('</style>');

document.write('<div class="container">');
document.write('<h1>Calculadora</h1>');

document.write('<label for="num1">Número 1:</label>');
document.write('<input type="number" id="num1">');

document.write('<label for="operation">Operación:</label>');
document.write('<select id="operation">');
document.write('<option value="sumar">Sumar</option>');
document.write('<option value="restar">Restar</option>');
document.write('<option value="multiplicar">Multiplicar</option>');
document.write('<option value="dividir">Dividir</option>');
document.write('</select>');

document.write('<label for="num2">Número 2:</label>');
document.write('<input type="number" id="num2">');

document.write('<button onclick="calcular()">Calcular</button>');

document.write('<div id="resultado"></div>');
document.write('</div>');

function calcular() { 
    var num1 = parseFloat(document.getElementById('num1').value); 
    var num2 = parseFloat(document.getElementById('num2').value); 
    var operacion = document.getElementById('operation').value; 
    var resultado; 

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerHTML = "Por favor ingrese un número en ambos campos";
        return;
    }

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
