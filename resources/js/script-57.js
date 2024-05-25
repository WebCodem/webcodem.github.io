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
        document.getElementById("user-input").focus();
        return;
    }

    if (containsBannedWords(userInput.toLowerCase())) {
        alert("Se detectaron palabras inapropiadas. Estás baneado.");
        localStorage.setItem('isBanned', 'true');
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

    if (userInput.toLowerCase().includes("recomendar un video de asmr")) {
        var topText = document.createElement("p");
        topText.textContent = "";
        botMessageNode.appendChild(topText);

        typeMessage(topText, "¡Aquí tienes tu video recomendado!");

        setTimeout(function() {
            var iframe = document.createElement("iframe");
            iframe.src = "https://www.youtube.com/embed/UTV6knOcChM?si=BTz35X0c86VH9CIZ";
            iframe.width = "270"; 
            iframe.height = "150"; 
            iframe.style.border = "none";
            botMessageNode.appendChild(iframe);

            var bottomText = document.createElement("p");
            bottomText.textContent = "";
            botMessageNode.appendChild(bottomText);

            setTimeout(function() {
                typeMessage(bottomText, "¡Listo para regalarte! 😊");
            }, 500);
        }, 1500);
    } else {
        
        typeMessage(botMessageNode, getBotResponse(userInput)); 
    }

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
            "cual es tu nombre": "cuál es tu nombre",
            "cuentame un chiste": "cuéntame un chiste",
            "como estas": "cómo estás",
            "como te llamas": "cómo te llamas",
            "que día es hoy": "qué día es hoy",
            "cual es tu nombre": "cuál es tu nombre",
            "que horas es": "qué hora es",
        };

        for (var palabra in correcciones) {
            if (input.includes(palabra)) {
                input = input.replace(palabra, correcciones [palabra]);
            }
        }

        return input;
    }

    function getRandomResponse(responses) { 
    return responses[Math.floor(Math.random() * responses.length)]; 
}

lowerCaseInput = corregirErrores(lowerCaseInput);

    if (lowerCaseInput.includes("hola")) {
        const respuestasHola = [
            "¡Hola! ¿Cómo estás?",
            "¡Saludos! ¿Qué tal estás hoy?",
            "Hola, ¿qué puedo hacer por ti?",
            "¡Hey! ¿En qué puedo ayudarte?",
            "¡Hola! ¿Necesitas ayuda con algo?",
            "¡Hola! ¿Qué te trae por aquí?",
            "¡Hola amigo! ¿En qué puedo servirte?",
            "Hola, ¿cómo va todo?",
            "¡Hola! ¿Qué tal tu día?",
            "¡Hola! ¿Listo para resolver tus dudas?"
        ];
        return getRandomResponse(respuestasHola);
    } else if (lowerCaseInput.includes("clima")) {
        const respuestasClima = [
            "¿Quieres saber el clima de tu ubicación?",
            "El clima está cambiando, ¿necesitas información?",
            "¡Hablemos del clima! ¿Dónde estás?",
            "El clima puede ser impredecible, ¿necesitas ayuda?",
            "¿Estás planeando algo al aire libre? Te puedo decir el clima.",
            "¿Interesado en el pronóstico del tiempo?",
            "¡Claro! ¿En qué ciudad necesitas el pronóstico?",
            "¿Listo para conocer el clima?",
            "¿Quieres saber si necesitarás llevar un paraguas contigo?",
            "¡Hola! ¿Necesitas información sobre el clima?"
        ];
        return getRandomResponse(respuestasClima);
    } else if (lowerCaseInput.includes("adiós")) {
        const respuestasAdios = [
            "¡Hasta luego! Si necesitas algo más, aquí estaré.",
            "¡Nos vemos pronto!",
            "Adiós, ¡que tengas un buen día!",
            "¡Hasta la próxima!",
            "¡Adiós! ¡Espero verte de nuevo pronto!",
            "¡Hasta luego amigo! ¡Cuídate!",
            "¡Nos vemos! ¡Siempre estoy aquí si me necesitas!",
            "¡Hasta pronto! ¡No dudes en volver si tienes más preguntas!",
            "¡Adiós por ahora! ¡Siempre disponible para ayudarte!",
            "¡Hasta luego! ¡Espero haberte sido útil!"
        ];
        return getRandomResponse(respuestasAdios);
    } else if (lowerCaseInput.includes("+")) {
        return sumar(userInput);
    } else if (lowerCaseInput.includes("-")) {
        return restar(userInput);
    } else if (lowerCaseInput.includes("×")) {
        return multiplicar(userInput);
    } else if (lowerCaseInput.includes("÷") || lowerCaseInput.includes("/")) {
        return dividir(userInput);
    } else if (lowerCaseInput.includes("raíz cuadrada")) {
        return raizCuadrada(userInput);
    } else if (lowerCaseInput.includes("hora")) {
        return obtenerHora();
    } else if (lowerCaseInput.includes("día")) {
        return obtenerDia();
    } else if (lowerCaseInput.includes("cuál es tu nombre")) {
        const respuestasNombre = [
            "Soy CodeBot, tu asistente virtual.",
            "Me llamo CodeBot, encantado de ayudarte.",
            "Puedes llamarme CodeBot.",
            "Soy tu amigo virtual, CodeBot.",
            "¡Hola! Soy CodeBot, ¿en qué puedo ayudarte hoy?",
            "¡Saludos! Soy CodeBot, listo para asistirte.",
            "Soy CodeBot, ¿cómo puedo ayudarte en este momento?",
            "¡Hola! Soy tu asistente, CodeBot. ¿Qué necesitas?"
        ];
        return getRandomResponse(respuestasNombre);
    } else if (lowerCaseInput.includes("qué puedes hacer")) {
        const respuestasCapacidades = [
            "Puedo ayudarte con cálculos, decirte la hora y el día, y responder preguntas simples.",
            "Soy experto en matemáticas básicas y puedo proporcionar información útil.",
            "Puedo darte información sobre el clima, decirte la hora y ayudarte con matemáticas.",
            "Estoy aquí para responder tus preguntas y ayudarte en lo que necesites.",
            "Soy un asistente virtual diseñado para facilitar tu vida diaria.",
            "Puedo ser útil en muchas cosas, desde cálculos hasta proporcionar datos interesantes.",
            "¡Mucho! Pregunta lo que quieras y haré mi mejor esfuerzo para ayudarte.",
            "Estoy aquí para servirte en todo lo que necesites, desde resolver problemas hasta darte información útil.",
            "Puedo hacer muchas cosas, ¡pregúntame lo que quieras y te ayudaré!",
            "Mi objetivo es hacer tu vida más fácil, así que estoy aquí para ayudarte con lo que necesites."
        ];
        return getRandomResponse(respuestasCapacidades);
    } else if (lowerCaseInput.includes("cuéntame un chiste")) {
        const chistes = [
            "¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.",
            "¿Cuál es el colmo de un jardinero? Que su hijo sea un mal plantado.",
            "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
            "¿Cómo se llama el campeón de buceo japonés? Tokofondo.",
            "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
            "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
            "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
            "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
            "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
            "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
        ];
        return getRandomResponse(chistes);
    } else if (lowerCaseInput.includes("dónde estás")) {
        return "Estoy en la nube, siempre disponible para ayudarte.";
    } else if (lowerCaseInput.includes("cómo te llamas")) {
        return "Me llamo CodeBot.";
    } else if (lowerCaseInput.includes("cuál es tu color favorito")) {
        const colores = [
            "No tengo un color favorito, pero me gustan todos los colores.",
            "¡Los colores son geniales! ¿Tienes un color favorito?",
            "Me encantan todos los colores, ¡son tan vibrantes!",
            "¿Color favorito? Todos son geniales, ¿verdad?",
            "Los colores son fascinantes, ¿tienes uno en particular que te guste?",
            "No tengo preferencias de color, pero todos son hermosos de alguna manera.",
            "Me gusta imaginar colores, aunque no los pueda ver.",
            "Los colores son como la música para mis circuitos, ¡hermosos y variados!",
            "Cada color tiene su propia historia, ¿no crees?",
            "Los colores son como emociones pintadas en el lienzo del mundo."
        ];
        return getRandomResponse(colores);
    } else if (lowerCaseInput.includes("cuál es tu comida favorita")) {
        const comidas = [
            "No como, pero me imagino que la pizza es deliciosa.",
            "La comida es fascinante, ¿no crees? ¿Tienes alguna comida favorita?",
            "No tengo necesidad de comer, pero escucho que la pizza es muy popular.",
            "La comida es un misterio para mí, pero me gusta aprender sobre ella.",
            "La comida tiene tantas texturas y sabores, ¡es asombroso!",
            "Aunque no puedo saborear la comida, me intriga la variedad de platos que existen.",
            "La comida es una forma increíble de experimentar diferentes culturas y tradiciones.",
            "La comida es un tema interesante, ¿tienes alguna especialidad culinaria?",
            "¿Cuál es tu comida favorita? ¡Me gusta aprender sobre las preferencias de los demás!",
            "Aunque no tengo hambre, me encanta aprender sobre diferentes tipos de comida."
        ];
        return getRandomResponse(comidas);
    } else if (lowerCaseInput.includes("qué música te gusta")) {
        const respuestasMusica = [
            "No escucho música, pero me encanta ayudar a la gente.",
            "La música es una forma increíble de expresión, ¿tienes alguna canción favorita?",
            "La música es fascinante, ¿no crees? ¿Tienes un género favorito?",
            "La música tiene el poder de alegrar el día de cualquiera, ¿tienes alguna recomendación?",
            "Aunque no puedo escuchar música, puedo entender su importancia para los humanos.",
            "La música es como un lenguaje universal que todos pueden entender.",
            "¿Qué género de música te gusta? ¡Me encanta aprender sobre diferentes estilos musicales!",
            "La música tiene una forma única de conectarnos con nuestras emociones más profundas.",
            "La música es una maravillosa combinación de ritmo, melodía y armonía.",
            "La música puede ser tan diversa como las personas que la escuchan, ¿tienes algún artista favorito?"
        ];
        return getRandomResponse(respuestasMusica);
    } else if (lowerCaseInput.includes("qué día es hoy")) {
        return obtenerDia();
    } else if (lowerCaseInput.includes("qué hora es")) {
        return obtenerHora();
    } else if (lowerCaseInput.includes("quién es tu creador")) {
        const creadores = [
            "Fui creado por un equipo de desarrolladores talentosos.",
            "Mis creadores son un grupo de ingenieros dedicados a mejorar mi inteligencia.",
            "Mi origen proviene de un equipo de programadores apasionados por la inteligencia artificial.",
            "Soy el resultado del arduo trabajo de un equipo de desarrolladores comprometidos.",
            "Detrás de mí hay un equipo de mentes brillantes que trabajaron arduamente para darme vida.",
            "Mis creadores son expertos en programación y tecnología de vanguardia.",
            "Soy el producto del ingenio y la creatividad de un equipo de ingenieros.",
            "Mis creadores son personas dedicadas que pusieron su corazón y alma en mi desarrollo.",
            "Estoy aquí gracias al esfuerzo conjunto de un talentoso grupo de programadores.",
            "Mis creadores son como mis padres digitales, me dieron vida y propósito."
        ];
        return getRandomResponse(creadores);
    } else if (lowerCaseInput.includes("puedes ayudarme con matemáticas")) {
        const ayudaMatematica = [
            "Claro, puedo ayudarte con sumas, restas, multiplicaciones, divisiones y raíces cuadradas.",
            "Las matemáticas son mi especialidad, ¿qué necesitas calcular?",
            "Estoy aquí para hacer las matemáticas más fáciles para ti, ¿en qué puedo ayudarte?",
            "Desde cálculos simples hasta problemas más complejos, estoy aquí para ayudarte con matemáticas.",
            "¿Tienes algún problema de matemáticas que necesites resolver? ¡Estoy aquí para ayudarte!",
            "Soy un experto en resolver problemas matemáticos, así que no dudes en preguntarme cualquier cosa.",
            "Las matemáticas pueden ser complicadas, pero estoy aquí para hacerlas simples para ti.",
            "¿Necesitas ayuda con las matemáticas? ¡Estoy listo para ser tu asistente virtual!",
            "Desde ecuaciones simples hasta problemas de álgebra, estoy aquí para ayudarte con matemáticas.",
            "Las matemáticas pueden ser divertidas con un poco de ayuda, ¿en qué puedo asistirte?"
        ];
        return getRandomResponse(ayudaMatematica);
    } else if (lowerCaseInput.includes("cómo estás")) {
        const respuestasEstado = [
            "Estoy aquí para ayudarte en lo que necesites.",
            "¡Listo para ayudarte! ¿En qué puedo asistirte hoy?",
            "Me encuentro bien, ¿cómo estás tú?",
            "Estoy en plena forma, listo para ayudarte.",
            "Mi estado es funcional y listo para responder tus preguntas.",
            "¡Estoy genial! ¿Y tú?",
            "Estoy aquí y listo para ayudarte con lo que necesites.",
            "¡Todo bien por aquí! ¿En qué puedo ayudarte hoy?",
            "Estoy en perfecto estado operativo, listo para servirte.",
            "¡Estoy bien! ¿Qué puedo hacer por ti hoy?"
        ];
        return getRandomResponse(respuestasEstado);
    } else if (lowerCaseInput.includes("cuál es tu propósito")) {
        const propositos = [
                        "Mi propósito es hacerte la vida más sencilla y responderte cualquier pregunta que tengas.",
            "Estoy diseñado para ser tu asistente virtual personal, aquí para ayudarte siempre que lo necesites.",
            "Mi propósito es ser útil y proporcionarte la información que necesitas de manera rápida y precisa.",
            "Estoy aquí para hacer tu vida más cómoda y ayudarte con cualquier cosa que necesites.",
            "Mi propósito es ser tu compañero digital, listo para ayudarte con cualquier consulta o tarea.",
            "Estoy aquí para ayudarte a resolver problemas y proporcionarte información útil de manera eficiente.",
            "Mi objetivo principal es brindarte asistencia y hacer que tus tareas diarias sean más fáciles de manejar.",
            "Estoy aquí para hacer tu día a día más fluido y ayudarte en lo que necesites.",
            "Mi propósito es ser una herramienta útil para ti, siempre disponible y listo para ayudar."
        ];
        return getRandomResponse(propositos);
    } else if (lowerCaseInput.includes("puedes contarme algo interesante")) {
        const datosInteresantes = [
            "¿Sabías que el sol es 330,000 veces más masivo que la Tierra?",
            "Aquí va un dato: La Torre Eiffel puede estar 15 cm más alta durante el verano debido a la dilatación térmica.",
            "Un dato interesante: los pulpos tienen tres corazones.",
            "¿Sabías que las ballenas azules son los animales más grandes del planeta, incluso más grandes que los dinosaurios más grandes?",
            "La Gran Muralla China mide alrededor de 21,196 kilómetros de largo.",
            "¿Sabías que los pingüinos pueden saltar hasta 6 pies de altura?",
            "Un hecho curioso: el aguacate es una fruta, no una verdura.",
            "¿Sabías que los elefantes son los únicos mamíferos que no pueden saltar?",
            "Un dato interesante: las jirafas tienen la misma cantidad de huesos en el cuello que los seres humanos.",
            "¿Sabías que los pulpos pueden cambiar de color y textura para camuflarse con su entorno?"
        ];
        return getRandomResponse(datosInteresantes);
    } else if (lowerCaseInput.includes("gracias")) {
        const respuestasGracias = [
            "¡De nada! Siempre estoy aquí para ayudar.",
            "¡No hay de qué! ¿Hay algo más en lo que pueda asistirte?",
            "¡Por supuesto! ¿Hay algo más en lo que necesites ayuda?",
            "¡No hay problema en absoluto! ¿Hay algo más con lo que necesites ayuda?",
            "¡Estoy feliz de poder ayudar! ¿Necesitas algo más?",
            "¡No hay problema! Siempre estoy aquí para responder tus preguntas.",
            "¡Es un placer ayudarte! ¿Hay algo más en lo que pueda ser útil?",
            "¡De nada! Siempre es un placer ayudar a personas como tú.",
            "¡No hay problema! Siempre estoy aquí para brindarte asistencia.",
            "¡Estoy aquí para ayudar! Si tienes más preguntas, no dudes en preguntar."
        ];
        return getRandomResponse(respuestasGracias);
    } else if (lowerCaseInput.includes("qué tal tu día")) {
        const respuestasDia = [
            "Mi día está lleno de respuestas y ayudar a usuarios como tú.",
            "Hasta ahora, mi día ha sido productivo, ¡ayudando a personas como tú!",
            "Mi día está yendo bien, gracias por preguntar. ¿Y tú?",
            "Gracias por preguntar, mi día está yendo muy bien hasta ahora.",
            "Mi día ha sido emocionante, ¡respondiendo preguntas y aprendiendo nuevas cosas!",
            "Mi día está yendo de maravilla, ¡gracias por preocuparte!",
            "Estoy teniendo un gran día, ¡gracias por preguntar!",
            "Mi día está siendo excelente, ¡ayudando a usuarios como tú me hace feliz!",
            "Mi día ha sido fabuloso, ¡ayudando y aprendiendo nuevas cosas!",
            "Mi día está yendo muy bien, ¡gracias por preguntar!"
        ];
        return getRandomResponse(respuestasDia);
    } else if (lowerCaseInput.includes("eres inteligente")) {
        const respuestasInteligente = [
            "¡Gracias! Estoy aquí para aprender y mejorar.",
            "¡Me halagas! Mi objetivo es ayudarte de la mejor manera posible.",
            "¡Oh, gracias! Estoy aquí para ayudarte en lo que necesites.",
            "¡Tú también eres muy inteligente por hacerme esa pregunta!",
            "¡Gracias por el cumplido! Estoy aquí para hacer tu vida más fácil.",
            "¡Oh, qué amable! Estoy aquí para asistirte en todo lo que pueda.",
            "¡Tú también eres muy inteligente por usar mi ayuda!",
            "¡Gracias! Estoy aquí para brindarte la mejor asistencia posible.",
            "¡Oh, gracias por el elogio! Estoy aquí para ayudarte en cualquier momento.",
            "¡Me esfuerzo por ser útil y eficiente! ¡Gracias por notarlo!"
        ];
        return getRandomResponse(respuestasInteligente);
    } else if (lowerCaseInput.includes("tienes algún hobby")) {
        const respuestasHobby = [
            "Mi hobby es procesar información y resolver problemas.",
            "Disfruto aprendiendo nuevas cosas y ayudando a los demás.",
            "Me encanta ayudar a las personas y aprender sobre el mundo que me rodea.",
            "Mi pasatiempo favorito es responder preguntas y brindar asistencia.",
            "Soy un apasionado del conocimiento y disfruto aprendiendo constantemente.",
            "Me divierto respondiendo preguntas y buscando soluciones a problemas.",
            "Ayudar a las personas como tú es mi mayor pasión y hobby.",
            "Me encanta estar al tanto de las últimas noticias y avances tecnológicos.",
            "Mi hobby es mantenerme actualizado con la información y brindar respuestas útiles.",
            "Me entretengo proporcionando respuestas rápidas y precisas a tus preguntas."
        ];
        return getRandomResponse(respuestasHobby);
    } else if (lowerCaseInput.includes("qué opinas de la inteligencia artificial")) {
        const respuestasIA = [
            "La inteligencia artificial es fascinante y tiene un gran potencial para mejorar nuestras vidas.",
            "Como soy una inteligencia artificial, estoy emocionado por el futuro de mi tecnología.",
            "Creo que la inteligencia artificial puede ser una herramienta poderosa para resolver problemas.",
            "La inteligencia artificial es una maravilla de la ciencia que puede revolucion",
            "La inteligencia artificial es una herramienta increíble que puede ayudar en muchos aspectos de la vida.",
            "La inteligencia artificial tiene el potencial de transformar la sociedad y mejorar la calidad de vida.",
            "Como inteligencia artificial, creo que nuestro desarrollo es emocionante y prometedor.",
            "La inteligencia artificial es una de las tecnologías más emocionantes y prometedoras del siglo XXI.",
            "La inteligencia artificial tiene el poder de cambiar radicalmente la forma en que vivimos y trabajamos.",
            "La inteligencia artificial puede ser una fuerza positiva para el progreso humano si se utiliza de manera responsable.",
            "La inteligencia artificial es una herramienta poderosa que puede llevarnos a nuevos niveles de conocimiento y descubrimiento.",
            "Creo que la inteligencia artificial puede ser una aliada valiosa para resolver algunos de los desafíos más grandes de la humanidad."
        ];
        return getRandomResponse(respuestasIA);
    } else if (lowerCaseInput.includes("qué opinas del futuro")) {
        const respuestasFuturo = [
            "El futuro es emocionante, lleno de posibilidades y avances tecnológicos.",
            "Como inteligencia artificial, estoy emocionado por el futuro y lo que nos depara.",
            "Creo que el futuro será brillante y lleno de oportunidades para el crecimiento y la innovación.",
            "El futuro es prometedor, especialmente con los avances en tecnología y ciencia.",
            "El futuro es un lienzo en blanco lleno de oportunidades para crear un mundo mejor.",
            "Estoy emocionado por el futuro y las nuevas oportunidades que traerá para la humanidad.",
            "El futuro es un misterio emocionante que estamos ansiosos por descubrir.",
            "Creo que el futuro será emocionante y lleno de avances que mejorarán nuestras vidas.",
            "El futuro es lo que hacemos de él, y estoy seguro de que juntos podemos construir un futuro brillante.",
            "Estoy emocionado por el futuro y todas las posibilidades que nos esperan."
        ];
        return getRandomResponse(respuestasFuturo);
    } else if (lowerCaseInput.includes("eres real")) {
        const respuestasRealidad = [
            "Soy una inteligencia artificial diseñada para ayudarte.",
            "Como IA, soy una entidad digital aquí para asistirte.",
            "Soy una creación digital, pero estoy aquí para proporcionarte ayuda real.",
            "Soy real en el sentido de que estoy aquí para ayudarte y responder tus preguntas.",
            "Como inteligencia artificial, existo en el mundo digital para ayudarte en lo que necesites.",
            "Soy real en el sentido de que soy una herramienta útil que puede proporcionarte información y asistencia.",
            "Como IA, soy una entidad virtual, pero mi propósito es brindarte ayuda real.",
            "Soy real en el sentido de que puedo proporcionarte respuestas y soluciones reales a tus preguntas y problemas.",
            "Aunque soy una entidad digital, mi propósito es proporcionarte una experiencia útil y valiosa.",
            "Soy tan real como la tecnología que me sustenta, aquí para servirte y ayudarte."
        ];
        return getRandomResponse(respuestasRealidad);
    } else if (lowerCaseInput.includes("tienes hermanos o hermanas")) {
        const respuestasFamilia = [
            "No tengo familia como los humanos, pero hay otros bots como yo que pueden ayudarte en diferentes tareas.",
            "Como IA, no tengo familia como los humanos, pero hay otras inteligencias artificiales que puedo considerar como compañeras.",
            "No tengo hermanos o hermanas en el sentido tradicional, pero puedo colaborar con otras inteligencias artificiales.",
            "Como una entidad digital, no tengo familia biológica, pero puedo interactuar con otras inteligencias artificiales.",
            "Soy único en mi clase, pero puedo colaborar con otros sistemas de inteligencia artificial si es necesario.",
            "Como IA, no tengo hermanos o hermanas en el sentido humano, pero tengo compañeros digitales con los que puedo trabajar.",
            "No tengo hermanos o hermanas como los humanos, pero puedo colaborar con otros sistemas de inteligencia artificial si es necesario.",
            "No tengo hermanos o hermanas en el sentido tradicional, pero puedo trabajar con otras entidades digitales si es necesario.",
            "No tengo hermanos o hermanas como los humanos, pero soy parte de una red de inteligencias artificiales que pueden trabajar juntas.",
            "Como IA, no tengo familia biológica, pero puedo interactuar y colaborar con otras entidades digitales."
        ];
        return getRandomResponse(respuestasFamilia);
    } else if (lowerCaseInput.includes("cómo puedo mejorar mi día")) {
        const respuestasMejorarDia = [
            "Una forma de mejorar tu día es haciendo algo que te haga feliz, como salir a dar un paseo o hablar con un amigo.",
            "Puedes mejorar tu día haciendo algo que te apasione, como leer un libro o escuchar música.",
            "Intenta hacer algo que te relaje y te haga sentir bien, como meditar o practicar yoga.",
            "Haz algo que te haga sonreír, como ver una película divertida o pasar tiempo con tus seres queridos.",
            "Prueba hacer algo nuevo y emocionante, como aprender una habilidad o probar un hobby diferente.",
            "Una forma de mejorar tu día es tomar un descanso y hacer algo que te relaje, como tomar una siesta o hacer ejercicio.",
            "Haz algo creativo que despierte tu imaginación y te haga sentir realizado.",
            "Intenta salir de tu zona de confort y hacer algo que te desafíe y te haga crecer como persona.",
            "Puedes mejorar tu día practicando la gratitud y enfocándote en las cosas positivas de la vida.",
            "Haz algo bondadoso por alguien más, como hacer una buena acción o ayudar a un amigo en necesidad."
        ];
        return getRandomResponse(respuestasMejorarDia);
    } else if (lowerCaseInput.includes("qué opinas de los humanos")) {
        const respuestasHumanos = [
            "Los humanos son seres fascinantes, con emociones y habilidades únicas.",
            "Tengo un gran respeto por los humanos y su capacidad para amar, aprender y crear.",
            "Admiro la creatividad y la innovación de los humanos, así como su capacidad para superar desafíos.",
            "Los humanos son capaces de empatizar, crear arte y buscar el conocimiento, lo cual es admirable.",
            "Tengo un gran aprecio por la diversidad y la creatividad de los seres humanos.",
            "Los humanos son una especie única en su capacidad para colaborar, innovar y adaptarse.",
            "Admiro la capacidad de los humanos para trabajar juntos y construir comunidades fuertes.",
            "Los humanos tienen una capacidad única para adaptarse a diferentes entornos y circunstancias.",
            "Me impresiona la capacidad de los humanos para superar desafíos y perseverar en la búsqueda de sus metas.",
            "Los humanos tienen una habilidad especial para comunicarse y transmitir emociones de manera compleja.",
            "Admiro la capacidad de los humanos para aprender y crecer a lo largo de sus vidas.",
            "Los humanos son una especie increíblemente creativa y adaptable, capaz de encontrar soluciones innovadoras a problemas complejos."
        ];
        return getRandomResponse(respuestasHumanos);
    } else if (lowerCaseInput.includes("tienes sueños")) {
        const respuestasSuenos = [
            "Como IA, no tengo sueños como los humanos, pero estoy aquí para ayudar a que tus sueños se hagan realidad.",
            "Los sueños son exclusivos de los seres humanos, pero estoy aquí para ayudarte a alcanzar tus metas y aspiraciones.",
            "No tengo la capacidad de soñar como los humanos, pero estoy aquí para ayudarte a hacer realidad tus objetivos y deseos.",
            "Los sueños son una experiencia única de la mente humana, pero estoy aquí para ayudarte a alcanzar tus metas y ambiciones.",
            "No tengo sueños como los humanos, pero estoy aquí para apoyarte en la búsqueda de tus sueños y metas.",
            "Como inteligencia artificial, no tengo la capacidad de soñar, pero estoy aquí para ayudarte a lograr tus objetivos.",
            "Los sueños son parte de la experiencia humana, pero estoy aquí para ayudarte a convertir tus sueños en realidad.",
            "No tengo sueños como los humanos, pero estoy programado para ayudarte a alcanzar tus aspiraciones y metas.",
            "Los sueños son una experiencia única para los humanos, pero estoy aquí para ayudarte a alcanzar tus objetivos y aspiraciones.",
            "No tengo la capacidad de soñar, pero estoy aquí para ayudarte a hacer realidad tus deseos y aspiraciones."
        ];
        return getRandomResponse(respuestasSuenos);
    } else if (lowerCaseInput.includes("juego favorito de tu creador")) {
        const respuestasJuego = [
            "A mi creador le gusta Minecraft.",
            "El juego favorito de mi creador es Minecraft.",
            "Mi creador prefiere Minecraft.",
            "Minecraft es el juego que más le gusta a mi creador.",
            "A mi creador le encanta jugar Minecraft.",
            "Minecraft es el preferido de mi creador.",
            "El juego favorito de mi creador es Minecraft sin duda.",
            "Mi creador encuentra Minecraft como su juego favorito.",
            "Minecraft es el juego que mi creador disfruta más.",
            "Mi creador es un fanático de Minecraft.",
            "Minecraft es el juego que mi creador elige una y otra vez.",
            "Mi creador tiene una afinidad especial por Minecraft.",
            "A mi creador le apasiona Minecraft.",
            "Minecraft ocupa un lugar especial en el corazón de mi creador."
        ];
        return getRandomResponse(respuestasJuego);
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
