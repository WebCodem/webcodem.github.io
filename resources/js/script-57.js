document.addEventListener('DOMContentLoaded', function () {
    const savedUsername = localStorage.getItem('username');
    const savedProfilePic = localStorage.getItem('profilePic');

    if (savedUsername && savedProfilePic) {
        displayUserData(savedUsername, savedProfilePic);
    } else {
        const defaultProfilePic = 'https://webcodem-media.github.io/resources/multimedia/imagen/perfil-predeterminado.jpg';
        const defaultUsername = 'Usuario';

        localStorage.setItem('username', defaultUsername);
        localStorage.setItem('profilePic', defaultProfilePic);

        displayUserData(defaultUsername, defaultProfilePic);
    }
});

function displayUserData(username, profilePic) {
    const userContainer = document.getElementById('userContainer');

    if (!userContainer) {
        console.error("El elemento 'userContainer' no estará presente en la página.");
        return;
    }

    userContainer.innerHTML = '';
    
    const img = document.createElement('img');
    img.src = profilePic;
    img.alt = 'Foto de perfil';
    img.classList.add('profile-img', 'user-profile-img');

    const span = document.createElement('span');
    span.textContent = username;

    userContainer.appendChild(img);
    userContainer.appendChild(span);

    img.onclick = span.onclick = chooseProfilePicture;
}

function sendMessage() {
    var userInput = document.getElementById("user-input").value.trim().toLowerCase();
    if (!userInput) {
        alert("Por favor, escribe un mensaje antes de enviar.");
        return;
    }

    var chatMessages = document.getElementById("chat-messages");

    var userMessageContainer = document.createElement("div");
    userMessageContainer.classList.add("message-container", "user-message-container");
    chatMessages.appendChild(userMessageContainer);

    var userImg = document.createElement("img");
    userImg.src = localStorage.getItem('profilePic');
    userImg.alt = 'Foto de perfil';
    userImg.classList.add("profile-img", "user-profile-img");
    userMessageContainer.appendChild(userImg);

    var userMessageNode = document.createElement("div");
    userMessageNode.classList.add("message", "user-message");
    userMessageNode.textContent = userInput;
    userMessageContainer.appendChild(userMessageNode);

    var botMessageContainer = document.createElement("div");
    botMessageContainer.classList.add("message-container", "bot-message-container");
    chatMessages.appendChild(botMessageContainer);

    var botImg = document.createElement("img");
    botImg.src = "https://webcodem-media.github.io/resources/multimedia/imagen/bot.jpg";
    botImg.alt = 'Foto de perfil';
    botImg.classList.add("profile-img");
    botMessageContainer.appendChild(botImg);

    var botMessageNode = document.createElement("div");
    botMessageNode.classList.add("message", "bot-message");
    botMessageContainer.appendChild(botMessageNode);
    typeMessage(botMessageNode, getBotResponse(userInput));

    document.getElementById("user-input").value = "";

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function typeMessage(element, message) {
    var index = 0;
    var typingInterval = setInterval(function() {
        if (index < message.length) {
            element.innerHTML += message.charAt(index);
            index++;
        } else {
            clearInterval(typingInterval);
        }
    }, 50); 
}

function getBotResponse(userInput) {
    var botResponse = "";

    if (userInput.includes("hola")) {
        botResponse = "¡Hola! ¿Cómo estás?";
    } else if (userInput.includes("clima")) {
        botResponse = "¿Quieres saber el clima de tu ubicación?";
    } else if (userInput.includes("adiós")) {
        botResponse = "¡Hasta luego! Si necesitas algo más, aquí estaré.";
    } else if (userInput.includes("+")) {
        botResponse = sumar(userInput);
    } else if (userInput.includes("-")) {
        botResponse = restar(userInput);
    } else if (userInput.includes("×")) {
        botResponse = multiplicar(userInput);
    } else if (userInput.includes("÷") || userInput.includes("/")) {
        botResponse = dividir(userInput);
    } else if (userInput.includes("raíz cuadrada")) {
        botResponse = raizCuadrada(userInput);
    } else if (userInput.includes("hora")) {
        botResponse = obtenerHora();
    } else if (userInput.includes("día")) {
        botResponse = obtenerDia();
    } else {
        botResponse = "Lo siento, no entendí. ¿Puedes reformular tu pregunta?";
    }

    return botResponse;
}

function extraerNumeros(input, operador) {
    
    let regex = new RegExp(`[^0-9.${operador}]`, 'g');
    let cleanedInput = input.replace(regex, '').trim();
    
    let numeros = cleanedInput.split(operador).map(num => parseFloat(num.trim()));
    return numeros;
}

function sumar(input) {
    const numeros = extraerNumeros(input, '+');
    if (numeros.length < 2 || numeros.some(isNaN)) {
        return "Por favor ingresa al menos dos números válidos para sumar.";
    }
    const resultado = numeros.reduce((total, num) => total + num, 0);
    return `El resultado de la suma es: ${resultado}`;
}

function restar(input) {
    const numeros = extraerNumeros(input, '-');
    if (numeros.length < 2 || numeros.some(isNaN)) {
        return "Por favor ingresa al menos dos números válidos para restar.";
    }
    const resultado = numeros.reduce((total, num) => total - num);
    return `El resultado de la resta es: ${resultado}`;
}

function multiplicar(input) {
    const numeros = extraerNumeros(input, '×');
    if (numeros.length < 2 || numeros.some(isNaN)) {
        return "Por favor ingresa al menos dos números válidos para multiplicar.";
    }
    const resultado = numeros.reduce((total, num) => total * num, 1);
    return `El resultado de la multiplicación es: ${resultado}`;
}

function dividir(input) {
    const numeros = extraerNumeros(input, '/');
    if (numeros.length < 2 || numeros.some(isNaN)) {
        return "Por favor ingresa al menos dos números válidos para dividir.";
    }
    const resultado = numeros.reduce((total, num, index) => {
        if (index === 0) {
            return num;
        } else {
            if (num === 0) {
                return "No se puede dividir entre cero.";
            } else {
                return total / num;
            }
        }
    });
    return `El resultado de la división es: ${resultado}`;
}

function raizCuadrada(input) {
    const numero = parseFloat(input.match(/(\d+(\.\d+)?)/)[0]);
    if (isNaN(numero)) {
        return "Por favor ingresa un número válido para calcular su raíz cuadrada.";
    }
    const resultado = Math.sqrt(numero);
    return `La raíz cuadrada de ${numero} es: ${resultado}`;
}

function obtenerHora() {
    const ahora = new Date();
    const hora = ahora.getHours();
    const minutos = ahora.getMinutes();
    return `La hora actual es: ${hora}:${minutos}`;
}

function obtenerDia() {
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const ahora = new Date();
    const diaSemana = ahora.getDay();
    return `Hoy es: ${dias[diaSemana]}`;
}
