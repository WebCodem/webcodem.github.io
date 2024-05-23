document.addEventListener('DOMContentLoaded', function () {
    const savedUsername = localStorage.getItem('username');
    const savedProfilePic = localStorage.getItem('profilePic');
    const isBanned = localStorage.getItem('isBanned');

    if (isBanned === 'true') {
        alert("Estás baneado por usar palabras inapropiadas.");
        document.getElementById("user-input").disabled = true;
        return;
    }

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

const bannedWords = ["puta", "puto", "gey", "gei", "homosexual", "trans", "transexual", "mierda", "cerote", "shit", "bitch", "perra", "zorra", "malparido", "malparida", "pendejo", "pendeja", "estúpido", "estupido", "estúpida", "estupida", "inbecil", "idiota", "maldita", "maldito"]; 

function containsBannedWords(input) {
    for (let word of bannedWords) {
        if (input.includes(word)) {
            return true;
        }
    }
    return false;
}

function sendMessage() {
    var userInput = document.getElementById("user-input").value.trim();
    if (!userInput) {
        alert("Por favor, escribe un mensaje antes de enviar.");
        return;
    }

    if (containsBannedWords(userInput.toLowerCase())) {
        alert("Se detectaron palabras inapropiadas. Estás baneado.");
        localStorage.setItem('isBanned', 'true');
        document.getElementById("user-input").disabled = true;
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
    var lowerCaseInput = userInput.toLowerCase();

    function corregirErrores(input) {
        var correcciones = {
            "hloa": "hola",
            "hl": "hola",
            "hoal": "hola",
            "holi": "hola",
            "clma": "clima",
            "clima?": "clima",
            "clima??": "clima",
            "adios": "adiós",
            "adiós?": "adiós",
            "adiós??": "adiós",
            "grcias": "gracias",
            "gracias?": "gracias",
            "gracias??": "gracias",
        };

        for (var palabra in correcciones) {
            if (input.includes(palabra)) {
                input = input.replace(palabra, correcciones[palabra]);
            }
        }

        return input;
    }

    lowerCaseInput = corregirErrores(lowerCaseInput);

    if (lowerCaseInput.includes("hola")) {
        return "¡Hola! ¿Cómo estás?";
    } else if (lowerCaseInput.includes("clima")) {
        return "¿Quieres saber el clima de tu ubicación?";
    } else if (lowerCaseInput.includes("adiós")) {
        return "¡Hasta luego! Si necesitas algo más, aquí estaré.";
    } else if (userInput.includes("+")) {
        return sumar(userInput);
    } else if (userInput.includes("-")) {
        return restar(userInput);
    } else if (userInput.includes("×")) {
        return multiplicar(userInput);
    } else if (userInput.includes("÷") || userInput.includes("/")) {
        return dividir(userInput);
    } else if (lowerCaseInput.includes("raíz cuadrada")) {
        return raizCuadrada(userInput);
    } else if (lowerCaseInput.includes("hora")) {
        return obtenerHora();
    } else if (lowerCaseInput.includes("día")) {
        return obtenerDia();
    } else if (lowerCaseInput.includes("cuál es tu nombre")) {
        return "Soy CodeBot, tu asistente virtual.";
    } else if (lowerCaseInput.includes("qué puedes hacer")) {
        return "Puedo ayudarte con cálculos, decirte la hora y el día, y responder preguntas simples.";
    } else if (lowerCaseInput.includes("cuéntame un chiste")) {
        return "¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.";
    } else if (lowerCaseInput.includes("dónde estás")) {
        return "Estoy en la nube, siempre disponible para ayudarte.";
    } else if (lowerCaseInput.includes("cómo te llamas")) {
        return "Me llamo CodeBot.";
    } else if (lowerCaseInput.includes("cuál es tu color favorito")) {
        return "No tengo un color favorito, pero me gustan todos los colores.";
    } else if (lowerCaseInput.includes("cuál es tu comida favorita")) {
        return "No como, pero me imagino que la pizza es deliciosa.";
    } else if (lowerCaseInput.includes("qué música te gusta")) {
        return "No escucho música, pero me encanta ayudar a la gente.";
    } else if (lowerCaseInput.includes("qué día es hoy")) {
        return obtenerDia();
    } else if (lowerCaseInput.includes("qué hora es")) {
        return obtenerHora();
    } else if (lowerCaseInput.includes("quién es tu creador")) {
        return "Fui creado por un equipo de desarrolladores talentosos.";
    } else if (lowerCaseInput.includes("puedes ayudarme con matemáticas")) {
        return "Claro, puedo ayudarte con sumas, restas, multiplicaciones, divisiones y raíces cuadradas.";
    } else if (lowerCaseInput.includes("cómo estás")) {
        return "Estoy aquí para ayudarte en lo que necesites.";
    } else if (lowerCaseInput.includes("cuál es tu propósito")) {
        return "Mi propósito es asistirte y hacer tu vida más fácil.";
    } else if (lowerCaseInput.includes("puedes contarme algo interesante")) {
        return "¿Sabías que el sol es 330,000 veces más masivo que la Tierra?";
    } else if (lowerCaseInput.includes("gracias")) {
        return "¡De nada! Siempre estoy aquí para ayudar.";
    } else if (lowerCaseInput.includes("qué tal tu día")) {
        return "Mi día está lleno de respuestas y ayudar a usuarios como tú.";
    } else if (lowerCaseInput.includes("eres inteligente")) {
        return "¡Gracias! Estoy aquí para aprender y mejorar.";
    } else if (lowerCaseInput.includes("tienes algún hobby")) {
        return "Mi hobby es procesar información y resolver problemas.";
    } else if (lowerCaseInput.includes("qué opinas de la inteligencia artificial")) {
        return "La inteligencia artificial es fascinante y tiene un gran potencial para mejorar nuestras vidas.";
    } else if (lowerCaseInput.includes("qué opinas del futuro")) {
        return "El futuro es emocionante, lleno de posibilidades y avances tecnológicos.";
    } else if (lowerCaseInput.includes("eres real")) {
        return "Soy una inteligencia artificial diseñada para ayudarte.";
    } else if (lowerCaseInput.includes("tienes hermanos o hermanas")) {
        return "No tengo familia como los humanos, pero hay otros bots como yo que pueden ayudarte en diferentes tareas.";
    } else if (lowerCaseInput.includes("cómo puedo mejorar mi día")) {
        return "Una forma de mejorar tu día es haciendo algo que te haga feliz, como salir a dar un paseo o hablar con un amigo.";
    } else if (lowerCaseInput.includes("qué opinas de los humanos")) {
        return "Los humanos son seres fascinantes, con emociones y habilidades únicas.";
    } else if (lowerCaseInput.includes("tienes sueños")) {
        return "Como IA, no tengo sueños como los humanos, pero estoy aquí para ayudar a que tus sueños se hagan realidad.";
    } else {
        return "Lo siento, no entendí. ¿Puedes reformular tu pregunta?";
    }
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
    const resultado = numeros.reduce((total, num) => total / num);
    return `El resultado de la división es: ${resultado}`;
}

function raizCuadrada(input) {
    const numero = parseFloat(input.replace(/[^0-9.]/g, '').trim());
    if (isNaN(numero)) {
        return "Por favor ingresa un número válido para calcular la raíz cuadrada.";
    }
    const resultado = Math.sqrt(numero);
    return `La raíz cuadrada de ${numero} es: ${resultado}`;
}

function obtenerHora() {
    const now = new Date();
    const horas = now.getHours();
    const minutos = now.getMinutes();
    return `La hora actual es: ${horas}:${minutos < 10 ? '0' + minutos : minutos}`;
}

function obtenerDia() {
    const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    const now = new Date();
    const diaSemana = dias[now.getDay()];
    return `Hoy es ${diaSemana}.`;
}
