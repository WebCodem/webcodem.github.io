<?php
if(isset($_POST['submit'])) {
    $file_name = $_FILES['pdf_file']['name'];
    $file_tmp = $_FILES['pdf_file']['tmp_name'];
    
    $upload_dir = 'uploads/'; // Directorio donde se guardarán los archivos subidos
    
    if(move_uploaded_file($file_tmp, $upload_dir.$file_name)) {
        echo "Archivo PDF subido con éxito.";
        echo "<br>";
        echo "Visor de PDF:";
        echo "<br>";
        echo "<embed src='$upload_dir$file_name' type='application/pdf' width='100%' height='600px'>";
    } else {
        echo "Error al subir el archivo PDF.";
    }
}
?>
