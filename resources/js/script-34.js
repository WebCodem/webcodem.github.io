document.addEventListener("DOMContentLoaded", function() {

  if (localStorage.getItem("loggedIn") === "true") {
    document.querySelector(".popup-container").style.display = "none";
  } else {
    
    document.querySelector(".popup-container").style.display = "flex";
  }

  document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    register(); 
  });

  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    login();
  });
});

function register() {
  
  var username = document.getElementById("registerUsername").value;
  var password = document.getElementById("registerPassword").value;

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  document.getElementById("registerSuccess").style.display = "block";
}

function login() {
  
  var username = document.getElementById("loginUsername").value;
  var password = document.getElementById("loginPassword").value;

  var storedUsername = localStorage.getItem("username");
  var storedPassword = localStorage.getItem("password");

  if (username === storedUsername && password === storedPassword) {
    
    localStorage.setItem("loggedIn", true);
    document.querySelector(".popup-container").style.display = "none";
  } else {
    
    alert("Nombre de usuario o contraseña incorrectos.");
  }
}
