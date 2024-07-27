// duración animación de inicio
document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('mainContent');
    
    setTimeout(() => {
        loader.style.display = 'none';
        mainContent.style.display = 'flex';
    }, 2000);
});

      
// Validar que el texto contenga solo letras minúsculas y espacios
function validateInput(text) {
    const regex = /^[a-zñ0-9\s]+$/;
    return regex.test(text);
}

// Mostrar mensaje de error
    let errorTimeout;
    function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    if (errorTimeout) {
        clearTimeout(errorTimeout);
    }

    if (message) {
        errorTimeout = setTimeout(() => {
            errorMessage.textContent = '';
        }, 2500);
    }
}


// Encriptar el texto
    function encryptText() {
    const inputTextElement = document.getElementById('inputText');
    const inputText = inputTextElement.value.trim();

    if (inputText === "") {
        showError('Por favor, ingrese un texto.');
        return;
    }

    if (!validateInput(inputText)) {
        showError('El texto solo debe contener letras minúsculas y espacios. No se permiten acentos ni  caracteres especiales.');
        return;
    }

    const encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    document.getElementById('outputText').value = encryptedText;

    // Borrar el texto del primer input
    inputTextElement.value = '';
    showError('');
}

// Desencriptar el texto
function decryptText() {
    const inputTextElement = document.getElementById('inputText');
    const inputText = inputTextElement.value.trim();

    if (inputText === "") {
        showError('Por favor, ingrese un texto.');
        return;
    }

    if (!validateInput(inputText)) {
        showError('El texto solo debe contener letras minúsculas y espacios. No se permiten acentos ni caracteres especiales.');
        return;
    }

    const decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.getElementById('outputText').value = decryptedText;

    // Borrar el texto del primer input
    inputTextElement.value = '';
    showError('');
}

// Copiar el texto encriptado/desencriptado al portapapeles
function copyText() {
    const outputTextElement = document.getElementById('outputText');
if (outputTextElement.value.trim() === "") {
        showError('No hay texto para copiar.');
        return;
    }
  navigator.clipboard.writeText(outputTextElement.value)
        .then(() => {
            document.getElementById('inputText').value = '';
            document.getElementById('outputText').value = '';
            showCopyMessage();
            showError('');
        })
        .catch(err => {
            showError('Error al copiar el texto: ' + err);
        });
}

// Mostrar mensaje de copiado
function showCopyMessage() {
    const copyMessage = document.getElementById('copyMessage');
    copyMessage.classList.add('show');
    setTimeout(() => {
        copyMessage.classList.remove('show');
    }, 2000);
}

// Detectar el tipo de dispositivo
function detectDevice() {
    const deviceMessage = document.getElementById('deviceMessage');
    const width = window.innerWidth;

    if (width <= 600) {
        deviceMessage.textContent = 'Estás usando un dispositivo móvil.';
    } else if (width <= 1024) {
        deviceMessage.textContent = 'Estás usando una tablet.';
    } else {
        deviceMessage.textContent = 'Estás usando una computadora.';
    }
}

window.onload = detectDevice;
window.onresize = detectDevice;
