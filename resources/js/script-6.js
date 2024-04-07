        var botAvatarPath = "/resources/multimedia/bot.jpg"; 

        function sendMessage() {
            var messageInput = document.getElementById("messageInput");
            var message = messageInput.value;

            if (message.trim() !== "") {
                var chatbox = document.getElementById("chatbox");

                chatbox.innerHTML += "<p>Yo: " + message + "</p>";

                var botMessageContainer = document.createElement("div");

                botMessageContainer.innerHTML += '<img id="botAvatar" src="' + botAvatarPath + '" alt="CodeBot Avatar">';

                botMessageContainer.innerHTML += '<span id="botName">CodeBot</span>';

                var systemResponse = "¿En qué puedo ayudarte? Selecciona lo que quieras decirle al soporte.";
                
                botMessageContainer.innerHTML += '<p class="system-message">Hola ' + systemResponse + '</p>';

                botMessageContainer.innerHTML += '<button class="bot-option" onclick="showAdditionalInfo(1)">¿Hablar con el soporte en vivo?</button>';
                botMessageContainer.innerHTML += '<button class="bot-option" onclick="showAdditionalInfo(2)">¿Contactar al desarrollador de la página?</button>';
                botMessageContainer.innerHTML += '<button class="bot-option" onclick="showAdditionalInfo(3)">¿Reportar bugs o fallos de la página?</button>';
                botMessageContainer.innerHTML += '<button class="bot-option" onclick="showAdditionalInfo(4)">¿Iniciar sesión o fallos al iniciar sesión?</button>';
                botMessageContainer.innerHTML += '<button class="bot-option" onclick="showAdditionalInfo(5)">¿Jugar juegos de la biblioteca no disponibles?</button>';

                chatbox.appendChild(botMessageContainer);

                document.getElementById("additionalInfo").innerHTML = "";
                
                document.getElementById("additionalInfo").style.display = "none";

                messageInput.value = "";
            }
        }

        function showAdditionalInfo(option) {
            var additionalInfo = document.getElementById("additionalInfo");

            additionalInfo.innerHTML = "";

            if (option === 1) {
                additionalInfo.innerHTML = "¿Quieres hablar con soporte en vivo? Entra a este <a href='./soporte-en-vivo'>enlace</a> para ser atendido por el soporte en línea en las 24 horas del día.";
            } else if (option === 2) {
                additionalInfo.innerHTML = "Puedes contactar al desarrollador mediante este <a href='./contacto'>enlace</a>. Estaremos atendiendo las 24 horas del día.";
            } else if (option === 3) {
                additionalInfo.innerHTML = "Para informar que hay bugs o fallos en nuestra página, entra al <a href='./bugs-o-fallos'>enlace</a>. Recuerda que estamos al pendiente las 24 horas al día.";
            } else if (option === 4) {
                additionalInfo.innerHTML = "Puedes iniciar sesión con este <a href='./inicio-de-sesión'>enlace</a> y también puedes registrar tu cuenta para tener el acceso a la página de funciones. Si te parece que el inicio de sesión fue exitoso y no te manda a la página de funciones, reinicia la página. Si aún no te manda a la página de funciones, puedes reportarlo en la pestaña de reportar fallos o bugs. Te estaremos atendiendo las 24 horas del día.";
            } else if (option === 5) {
                additionalInfo.innerHTML = "Puedes jugar algún juego que aún no han salido en la biblioteca de juegos en este <a href='#'>enlace</a> Estos juegos pueden tener bugs o fallos dentro del juego, por eso te recomendamos reportar cada bug o fallo en la pestaña de reportar bugs o fallos. Recuerda que estaremos atendiendo las 24 horas del día.";
            }

            chatbox.appendChild(additionalInfo);

            additionalInfo.style.display = "block";
        }
