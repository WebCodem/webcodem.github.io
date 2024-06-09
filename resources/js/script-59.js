function isBase64(str) {
    try {
        const decoded = atob(str);
        const encoded = btoa(decoded);
        return encoded === str;
    } catch (err) {
        return false;
    }
}

function decodeFromBase64() {
    const inputText = document.getElementById('inputText').value;

    if (!inputText.trim()) {
        alert("Por favor, introduce algún texto antes de decodificar de código Base64.");
        return;
    }

    if (!isBase64(inputText)) {
        alert("El texto ingresado no parece ser un código en Base64 válido.");
        return;
    }

    try {
        const decodedText = atob(inputText);
        document.getElementById('result').textContent = decodedText;
    } catch (err) {
        alert('Error al decodificar el código en Base64');
    }
}

function copyToClipboard() {
    const resultElement = document.getElementById('result');
    const resultText = resultElement.textContent.trim();
    const copyIcon = document.getElementById('copyIcon');
    const checkIcon = document.getElementById('checkIcon');
    const copyText = document.getElementById('copyText');
    
    if (resultText === "") {
        alert("No hay texto decodificado para copiar.");
        return;
    }

    const range = document.createRange();
    range.selectNodeContents(resultElement);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    
    try {
        document.execCommand('copy');
        copyIcon.style.display = 'none';
        checkIcon.style.display = 'inline';
        copyText.textContent = '¡Copiado!';
        setTimeout(function() {
            copyIcon.style.display = 'inline';
            checkIcon.style.display = 'none';
            copyText.textContent = 'Copiar';
        }, 1500);
    } catch (err) {
        alert('Error al copiar el texto decodificado');
    }
    
    selection.removeAllRanges();
}

const textarea = document.getElementById('inputText');
const container = document.querySelector('.container');

textarea.addEventListener('focus', () => {
    textarea.style.height = '150px'; 
});

textarea.addEventListener('blur', () => {
    textarea.style.height = '80px';  
});
