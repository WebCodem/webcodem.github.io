function mostrarModal(enlaceId) {
    document.getElementById('fondoModal').style.display = 'block';
    document.getElementById('miModal').style.display = 'block';
    
    if (enlaceId === 'Enlace-Pagina1') {
      document.getElementById('contenidoModal').innerText = "Este enlace en la Página 1...";
    }
    
  }

  function cerrarModal() {
    document.getElementById('fondoModal').style.display = 'none';
    document.getElementById('miModal').style.display = 'none';
  }

  function mostrarModal(enlaceId) {
    document.getElementById('fondoModal').style.display = 'block';
    document.getElementById('miModal').style.display = 'block';
    
    if (enlaceId === 'Enlace-Pagina2') {
      document.getElementById('contenidoModal').innerText = "Este enlace en la Página 1...";
    }
    
  }

  function cerrarModal() {
    document.getElementById('fondoModal').style.display = 'none';
    document.getElementById('miModal').style.display = 'none';
  }
