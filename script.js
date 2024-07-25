function validateInput(text) {
    const regex = /^[a-zñ\s]+$/;
    return regex.test(text);
}

function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
}
// Función para encriptar el texto
function encryptText() {
    const inputTextElement = document.getElementById('inputText');
    const inputText = inputTextElement.value;
    if (!validateInput(inputText)) {
        showError('El texto solo debe contener letras minúsculas y espacios.');
        return;
    }
    const encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('outputText').value = encryptedText;

    // Borrar el texto del  input
    inputTextElement.value = '';

    showError('');
}
// Función para desencriptar el texto
function decryptText() {
    const inputTextElement = document.getElementById('inputText');
    const inputText = inputTextElement.value;
    if (!validateInput(inputText)) {
        showError('El texto solo debe contener letras minúsculas y espacios.');
        return;
    }
    const decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('outputText').value = decryptedText;

    // Borrar el texto del  input
    inputTextElement.value = '';

    showError('');
}
// Función para copiar el texto al portapapeles
function copyText() {
    const outputTextElement = document.getElementById('outputText');
    outputTextElement.select();
    document.execCommand('copy');

    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';

    // Mostrar mensaje de copiado
    showCopyMessage();
}
// Función para mostrar el mensaje de copiado
function showCopyMessage() {
    const copyMessage = document.getElementById('copyMessage');
    copyMessage.classList.add('show');
    setTimeout(() => {
        copyMessage.classList.remove('show');
    }, 2000);
}
  // Función para detectar el gesto de "tirar hacia abajo" para refrescar la página
document.addEventListener('DOMContentLoaded', function() {
    let refreshThreshold = 50; 
    let startY = 0;
    let isPullingDown = false; 

    // Detectar el inicio del gesto de arrastre
    window.addEventListener('touchstart', function(event) {
        if (event.touches.length === 1) {
            startY = event.touches[0].pageY;
            isPullingDown = window.scrollY === 0;
        }
    });

    
    // Detectar el movimiento del gesto de arrastre
    window.addEventListener('touchmove', function(event) {
        if (isPullingDown) {
            let currentY = event.touches[0].pageY;
            if (currentY - startY > refreshThreshold) {
                isPullingDown = false;
                location.reload();
            }
        }
    });
        // Resetear el estado al finalizar el gesto
    window.addEventListener('touchend', function(event) {
        isPullingDown = false;
    });
});

        // Función para detectar el tipo de dispositivo
document.addEventListener("DOMContentLoaded", function() {
    detectDeviceType();
    window.addEventListener("resize", detectDeviceType);
});
function detectDevice() {
    const deviceMessage = document.getElementById('deviceMessage');
    const width = window.innerWidth;
    if (width <= 600) {
        deviceMessage.textContent = 'Estás usando un dispositivo móvil.';
    } else if (width <= 1024) {
        deviceMessage.textContent = 'Estás usando una tablet.';
    } else {
        deviceMessage.textContent = 'Estás usando una computadora .';
    }
}

window.onload = detectDevice;
window.onresize = detectDevice;
