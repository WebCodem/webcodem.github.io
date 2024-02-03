        var imagenes = [];
        var indiceImagenActual = 0;

        function mostrarImagen() {
            var contenedorImagen = document.getElementById('contenedorImagen');
            var contenedorCarga = document.getElementById('contenedorCarga');
            var imagenNoEncontrada = document.getElementById('imagenNoEncontrada');
            var botonesNavegacion = document.querySelector('.botonesNavegacion');
            var nombreImagen = document.getElementById('nombreImagen').value.trim();

            contenedorCarga.style.display = 'block';

            contenedorImagen.innerHTML = '';
            imagenNoEncontrada.style.display = 'none';
            botonesNavegacion.style.display = 'none';

            setTimeout(function () {
                
                contenedorCarga.style.display = 'none';

                if (nombreImagen.toLowerCase() === 'werensita') {
                    imagenes = [
                        'imagen1.jpg',
                        'imagen2.jpg', 
                        'imagen3.jpg', 
                        'imagen4.jpg', 
                        'imagen5.jpg', 
                        'imagen6.jpg', 
                        'imagen7.jpg', 
                        'imagen8.jpg',
                        'imagen9.jpg',
                        'imagen10.jpg', 
                        'imagen11.jpg'
                    ];
                } else if (nombreImagen.toLowerCase() === 'akane') {
                    imagenes = [
                        'imagen12.jpg',
                        'imagen13.jpg',
                        'imagen14.jpg',
                        'imagen15.jpg', 
                        'imagen16.jpg', 
                        'imagen17.jpg', 
                        'imagen18.jpg', 
                        'imagen19.jpg'                                               
                    ];
                } else if (nombreImagen.toLowerCase() === 'hanapunzell') {
                    imagenes = [
                        'imagen20.jpg',
                        'imagen21.jpg', 
                        'imagen22.jpg', 
                        'imagen23.jpg', 
                        'imagen24.jpg'
                                              
                    ];                                                                                                       
                } else {
                
                    imagenNoEncontrada.style.display = 'block';
                    return;
                }

                mostrarImagenActual();
                botonesNavegacion.style.display = 'flex';
            }, 2000);
        }

        function mostrarImagenActual() {
            var contenedorImagen = document.getElementById('contenedorImagen');
            contenedorImagen.innerHTML = '';

            if (imagenes.length > 0 && indiceImagenActual < imagenes.length) {
                var imagen = imagenes[indiceImagenActual];
                var imgElement = document.createElement('img');
                imgElement.src = imagen;
                imgElement.alt = 'Imagen ' + (indiceImagenActual + 1);
                contenedorImagen.appendChild(imgElement);
            }
        }

        function imagenSiguiente() {
            if (indiceImagenActual < imagenes.length - 1) {
                indiceImagenActual++;
            } else {
                indiceImagenActual = 0;
            }

            mostrarImagenActual();
        }

        function imagenAnterior() {
            if (indiceImagenActual > 0) {
                indiceImagenActual--;
            } else {
                indiceImagenActual = imagenes.length - 1;
            }

            mostrarImagenActual();
        }
