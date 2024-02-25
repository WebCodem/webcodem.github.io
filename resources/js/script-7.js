async function generarContrasena() {
            const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
            const longitud = 12;

            try {
                const array = new Uint32Array(longitud);
                window.crypto.getRandomValues(array);

                let contrasena = "";
                array.forEach(index => {
                    contrasena += caracteres.charAt(index % caracteres.length);
                });

                document.getElementById("contrasenaGenerada").textContent = contrasena;
                
                document.getElementById("copiarContrasena").style.display = "inline-block";

                document.getElementById("mensajeExito").textContent = "";

            } catch (error) {
                console.error("Error al generar la contraseña:", error);
            }
        }

        function copiarContrasena() {
            const contrasenaGenerada = document.getElementById("contrasenaGenerada").textContent;
            
            const soloContrasena = contrasenaGenerada;
            
            const elementoTemporal = document.createElement("textarea");
            elementoTemporal.value = soloContrasena;
            
            document.body.appendChild(elementoTemporal);
            
            elementoTemporal.select();
            document.execCommand("copy");

            document.body.removeChild(elementoTemporal);

            const mensajeExito = document.getElementById("mensajeExito");
            mensajeExito.textContent = "Contraseña copiada";
            mensajeExito.style.display = "block";

            setTimeout(() => {
                mensajeExito.style.display = "none";
            }, 2000);
        }
