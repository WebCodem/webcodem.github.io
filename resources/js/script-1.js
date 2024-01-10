function buscarTexto() {
      
      let texto = document.getElementById("texto").value;
      if (texto != "") { 
        let contenido = document.getElementById("contenido");
        let regex = new RegExp(texto, "gi");
        contenido.innerHTML = contenido.innerHTML.replace(regex, "<span class='highlight'>$&</span>");
      }
}
