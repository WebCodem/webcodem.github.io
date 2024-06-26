document.addEventListener("DOMContentLoaded", function() {
  if (localStorage.getItem("loggedIn") === "true") {
    const currentUser = atob(localStorage.getItem("currentUser"));
    if (bannedUsers.includes(currentUser)) {
      alert('Tu cuenta ha sido baneada.');
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("currentUser");
      document.querySelector(".overlay").style.display = "flex";
    } else {
      document.querySelector(".overlay").style.display = "none";
    }
  } else {
    document.querySelector(".overlay").style.display = "flex";
  }
});

const users = [
  { username: "R2FkZGllbA", password: "MTIxMTk4MjA4" },
  { username: "VGVzdA", password: "VGVzdA" },
  { username: "QWxwZWRv", password: "d2F6YWFhMDgwOTA3" },
  { username: "U2FudGlubw", password: "VG90b3JvMTExMTA5" },
  { username: "SmVhbiBQYXRyaWNpbw", password: "TGlmZWxpbmU3MjI" },
  { username: "Vmlubnk", password: "dmlhbmV5bG9w" },
  { username: "ZGFuaXppbmhhYnNi", password: "SmFwYUAxODEw" },
  { username: "TWFyY3Vz", password: "MTcyODI3Mw" },
  { username: "SXNhbWVycGY", password: "TGlhbjk4NzY1NA" },
  { username: "cG9raWlpcw", password: "am9uYXNnYWVsMjAxNg" },
  { username: "UmF1dzE", password: "YWxib25kaWdh" },
  { username: "VGhlIGdvb2Q", password: "aGFsb2NvbWJhdGV2b2w" },
  { username: "SnVhbg", password: "anVhbmVscHJvNTY" },
  { username: "QnJ1bm90ZQ", password: "YnJ1bml0bzA0" },
  { username: "TWlzaG9u", password: "dG9vb28xMzM" },
  { username: "Sm9zdWU", password: "bG9zYm9sb3MxMg" },
  { username: "VHJ1bWdhMTU5NzQxMjM", password: "QW5pbWVsYW5oYXRAMTIz" }
];

let bannedUsers = [""]; 

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const user = users.find(u => atob(u.username) === username && atob(u.password) === password);

  if (user) {
    if (bannedUsers.includes(user.username)) {
      alert('Este usuario está baneado.');
    } else {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("currentUser", btoa(user.username));
      closePopup();
    }
  } else {
    alert('Nombre de usuario o contraseña incorrectos. Inténtalo de nuevo.');
  }
}

function closePopup() {
  document.querySelector('.overlay').style.display = 'none';
}

function banUser(username) {
  if (!bannedUsers.includes(username)) {
    bannedUsers.push(username);
    if (localStorage.getItem("loggedIn") === "true") {
      const currentUser = atob(localStorage.getItem("currentUser"));
      if (currentUser === username) {
        alert('Tu cuenta ha sido baneada.');
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("currentUser");
        document.querySelector(".overlay").style.display = "flex";
      }
    }
  }
}
