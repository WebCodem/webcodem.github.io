<?php
// Conexión a la base de datos
$conexion = new mysqli("localhost", "usuario", "contraseña", "basededatos");

// Verificar conexión
if ($conexion->connect_error) {
    die("Error de conexión a la base de datos: " . $conexion->connect_error);
}

// Recibir datos del formulario de comentarios
$name = $_POST["name"];
$comment = $_POST["comment"];

// Insertar comentario en la base de datos
$sql = "INSERT INTO comentarios (nombre, comentario) VALUES ('$name', '$comment')";

if ($conexion->query($sql) === TRUE) {
    echo "Comentario guardado exitosamente.";
} else {
    echo "Error al guardar el comentario: " . $conexion->error;
}

// Cerrar conexión
$conexion->close();
?>
