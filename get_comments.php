<?php
// Conexión a la base de datos
$conexion = new mysqli("localhost", "usuario", "contraseña", "basededatos");

// Verificar conexión
if ($conexion->connect_error) {
    die("Error de conexión a la base de datos: " . $conexion->connect_error);
}

// Obtener comentarios de la base de datos
$sql = "SELECT nombre, comentario FROM comentarios";
$result = $conexion->query($sql);

if ($result->num_rows > 0) {
    // Mostrar comentarios
    while($row = $result->fetch_assoc()) {
        echo "<div><strong>" . $row["nombre"] . ":</strong> " . $row["comentario"] . "</div>";
    }
} else {
    echo "No hay comentarios.";
}

// Cerrar conexión
$conexion->close();
?>
