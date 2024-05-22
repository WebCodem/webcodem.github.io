    function displayUserData(username, profilePic) {
        const userContainer = document.getElementById('userContainer');
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
        } else {
            botResponse = "Lo siento, no entendí. ¿Puedes reformular tu pregunta?";
        }

        return botResponse;
    }
