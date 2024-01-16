function cambiarIdioma(idioma) {
      localStorage.setItem('idioma', idioma);
      redirigir();
    }

    function redirigir() {
      const idiomaSeleccionado = localStorage.getItem('idioma');
      if (idiomaSeleccionado === 'en') {
        window.location.href = 'https://webcodem.github.io/index-en';
      }
    }
    
    redirigir();

function cambiarIdioma(idioma) {
      localStorage.setItem('idioma', idioma);
      const paginaAnterior = document.referrer;
      window.location.href = paginaAnterior || 'https://webcodem.github.io/';
}
