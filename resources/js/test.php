<?php
// Recibir datos del formulario de comentarios
$name = $_POST["name"];
$comment = $_POST["comment"];

// Guardar el comentario en un archivo JSON
$commentsFile = "comments.json";
$currentComments = json_decode(file_get_contents($commentsFile), true);
$currentComments[] = array("name" => $name, "comment" => $comment);
file_put_contents($commentsFile, json_encode($currentComments));

// Responder con un mensaje de éxito
echo "Comentario guardado exitosamente.";
?>
