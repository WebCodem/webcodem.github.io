document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("loggedIn") === "true") {
        const currentUserBase64 = localStorage.getItem("currentUser");
        const currentUser = currentUserBase64 ? atob(currentUserBase64) : null;
        if (currentUser && bannedUsers.includes(currentUser)) {
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
    { username: "VGVzdA", password: "VGVzdA" } 
];

let bannedUsers = ["VGVzdA"]; 

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => atob(u.username) === username && atob(u.password) === password);

    if (user) {
        if (bannedUsers.includes(atob(user.username))) {
            alert('Este usuario está baneado.');
        } else {
            localStorage.setItem("loggedIn", "true");
            localStorage.setItem("currentUser", user.username);
            closePopup();

            const profilePic = localStorage.getItem('profilePic') || 'https://webcodem-media.github.io/resources/multimedia/imagen/perfil-predeterminado.jpg';
            displayUserData(username, profilePic);
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
            const currentUserBase64 = localStorage.getItem("currentUser");
            const currentUser = currentUserBase64 ? atob(currentUserBase64) : null;
            if (currentUser === username) {
                alert('Tu cuenta ha sido baneada.');
                localStorage.removeItem("loggedIn");
                localStorage.removeItem("currentUser");
                document.querySelector(".overlay").style.display = "flex";
            }
        }
    }
}
