<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    // Destinatario del correo electrónico
    $to = 'webcodemgt@gmail.com';

    // Asunto del correo electrónico
    $subject = 'Nuevo mensaje de contacto';

    // Contenido del correo electrónico
    $message = "Nombre: $nombre\n";
    $message .= "Correo Electrónico: $email\n";
    $message .= "Mensaje:\n$mensaje\n";

    // Cabeceras adicionales (opcional)
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Enviar correo electrónico
    if (mail($to, $subject, $message, $headers)) {
        echo 'El mensaje ha sido enviado correctamente.';
    } else {
        echo 'Error al enviar el mensaje.';
    }
}
?>
