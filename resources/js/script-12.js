document.addEventListener('DOMContentLoaded', function () {
    const savedProfilePic = localStorage.getItem('profilePic');
    const savedUsernameBase64 = localStorage.getItem('currentUser');
    const savedUsername = savedUsernameBase64 ? atob(savedUsernameBase64) : 'Usuario';

    if (savedProfilePic) {
        displayUserData(savedUsername, savedProfilePic);
    } else {
        const defaultProfilePic = 'https://webcodem-media.github.io/resources/multimedia/imagen/perfil-predeterminado.jpg';
        displayUserData(savedUsername, defaultProfilePic);
    }
});

function chooseProfilePicture() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.addEventListener('change', function () {
        const file = this.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                localStorage.setItem('profilePic', e.target.result);

                const savedUsernameBase64 = localStorage.getItem('currentUser');
                const savedUsername = savedUsernameBase64 ? atob(savedUsernameBase64) : 'Usuario';
                displayUserData(savedUsername, e.target.result);
            };

            reader.readAsDataURL(file);
        }
    });

    input.click();
}

function displayUserData(username, profilePic) {
    const userContainer = document.getElementById('userContainer');
    userContainer.innerHTML = '';

    const img = document.createElement('img');
    img.src = profilePic;
    img.alt = 'Foto de perfil';
    img.style.borderRadius = '50%';
    img.style.width = '40px';
    img.style.height = '40px';
    img.style.marginRight = '10px';

    const span = document.createElement('span');
    span.textContent = username;

    userContainer.appendChild(img);
    userContainer.appendChild(span);

    img.onclick = chooseProfilePicture;
}
