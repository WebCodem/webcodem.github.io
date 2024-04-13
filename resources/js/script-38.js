  const formulario = document.getElementById("formulario");
  const respuestas = formulario.querySelectorAll("input[type='radio']");

  respuestas.forEach(respuesta => {
    respuesta.addEventListener("change", () => {
      const valor = respuesta.value;

      let nextPage = "";
      switch(valor) {
        case "si":
          nextPage = "webcodem.github.io/funciones/formulario/respuesta-1";
          break;
        case "no":
          nextPage = "webcodem.github.io/funciones/formulario/respuesta-2";
          break;
      
      }
      
      window.location.href = nextPage;
    });
  });
