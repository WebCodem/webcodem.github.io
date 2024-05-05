const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

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

app.get('/', (req, res) => {
    const html = `
    <html>
    <head>
    <style>
    body {
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    .container {
        width: 300px;
        padding: 20px;
        border: 1px solid #ccc;
        background-color: #292929;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        color: white;
    }
    h1 {
        text-align: center;
    }
    label {
        display: block;
        margin-bottom: 5px;
    }
    input[type="number"], select, button {
        margin-bottom: 15px;
        width: calc(100% - 0px);
        padding: 10px;
        border-radius: 5px;
        background-color: #444;
        border: 1px solid #ccc;
        color: white;
        box-sizing: border-box;
    }
    button {
        background-color: #007bff;
        color: white;
        border: none;
        cursor: pointer;
    }
    #resultado {
        text-align: center;
    }
    </style>
    </head>
    <body>
    <div class="container">
    <h1>Calculadora</h1>
    <label for="num1">Número 1:</label>
    <input type="number" id="num1">
    <label for="operation">Operación:</label>
    <select id="operation">
    <option value="sumar">Sumar</option>
    <option value="restar">Restar</option>
    <option value="multiplicar">Multiplicar</option>
    <option value="dividir">Dividir</option>
    </select>
    <label for="num2">Número 2:</label>
    <input type="number" id="num2">
    <button onclick="calcular()">Calcular</button>
    <div id="resultado"></div>
    </div>
    <script>
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
    </script>
    </body>
    </html>
    `;
    res.send(html);
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
