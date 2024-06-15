document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("loggedIn") === "true") {
      document.querySelector(".overlay").style.display = "none";
    } else {
      document.querySelector(".overlay").style.display = "flex";
    }
  });

  const users = [
    { username: "R2FkZGllbA", password: "MTIxMTk4MjA4" },
    { username: "VGVzdA", password: "VGVzdA" }
  ];

  function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => atob(u.username) === username && atob(u.password) === password);

    if (user) {
      localStorage.setItem("loggedIn", "true");
      closePopup();
    } else {
      alert('Nombre de usuario o contraseña incorrectos. Inténtalo de nuevo.');
    }
  }

  function closePopup() {
    document.querySelector('.overlay').style.display = 'none';
  }
