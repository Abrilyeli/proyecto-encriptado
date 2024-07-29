// duración animación de inicio
document.addEventListener("DOMContentLoaded", function() {
    const cargador = document.getElementById('cargador');
    const contenidoPrincipal = document.getElementById('contenidoPrincipal');

    setTimeout(() => {
        cargador.style.display = 'none';
        contenidoPrincipal.display = 'flex';
    }, 2000);
});


// Validar que el texto contenga solo letras minúsculas y espacios
function validarEntrada(texto) {
    const regex = /^[a-zñ0-9\s]+$/;
    return regex.test(texto);
}

// Mostrar mensaje de error
    let errorTimeout;
    function mostrarError(mensaje) {
    const mensajeError = document.getElementById('mensajeError');
    mensajeError.textContent = mensaje;
    if (errorTimeout) {
        clearTimeout(errorTimeout);
    }

    if (mensaje) {
        errorTimeout = setTimeout(() => {
            mesajeError.textContent = '';
        }, 2500);
    }
}


// Encriptar el texto
    function encriptarTexto() {
    const elementoTextoEntrada = document.getElementById('textoEntrada');
    const textoEntrada = elementoTextoEntrada.value.trim();

    if (textoEntrada === "") {
        mostrarError('Por favor, ingrese un texto.');
        return;
    }

    if (!validarEntrada(textoEntrada)) {
        mostrarError('El texto solo debe contener letras minúsculas y espacios. No se permiten acentos ni  caracteres especiales.');
        return;
    }

    const textoEncriptado = textoEntrada
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    document.getElementById('textoSalida').value = textoEncriptado;

    // Borrar el texto del primer input
    elementoTextoEntrada.value = '';
    mostrarError('');
}

// Desencriptar el texto
function desencriptarTexto() {
    const elementoTextoEntrada = document.getElementById('textoEntrada');
    const textoEntrada = elementoTextoEntrada.value.trim();

    if (textoEntrada === "") {
        mostrarError('Por favor, ingrese un texto.');
        return;
    }

    if (!validarEntrada(textoEntrada)) {
        mostrarError('El texto solo debe contener letras minúsculas y espacios. No se permiten acentos ni caracteres especiales.');
        return;
    }

    const textoDesencriptado = textoEntrada
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.getElementById('textoSalida').value = textoDesencriptado;

    // Borrar el texto del primer input
    elementoTextoEntrada.value = '';
    mostrarError('');
}

// Copiar el texto encriptado/desencriptado al portapapeles
function copiarTexto() {
    const elementoTextoSalida = document.getElementById('textoSalida');
if (elementoTextoSalida.value.trim() === "") {
        mostrarError('No hay texto para copiar.');
        return;
    }
  navigator.clipboard.writeText(elementoTextoSalida.value)
        .then(() => {
            document.getElementById('textoEntrada').value = '';
            document.getElementById('Textosalida').value = '';
            mostrarMensajeCopiado();
            mostrarError('');
        })
        .catch(err => {
            mostrarError('Error al copiar el texto: ' + err);
        });
}

// Mostrar mensaje de copiado
function mostrarMemsajeCopiado() {
    const mensajeCopiado = document.getElementById('mensajeCopiado');
    mensajeCopiado.classList.add('mostrar');
    setTimeout(() => {
        mensajeCopiado.classList.remove('mostrar');
    }, 2000);
}

// Detectar el tipo de dispositivo
function detectarDispositivo() {
    const mensajeDispositivo = document.getElementById('mensajeDispositivo');
    const ancho = window.innerWidth;

    if (ancho <= 600) {
        mensajeDispositivo.textContent = 'Estás usando un dispositivo móvil.';
    } else if (ancho <= 1024) {
        mensajeDispositivo.textContent = 'Estás usando una tablet.';
    } else {
        mensajeDispositivo.textContent = 'Estás usando una computadora.';
    }
}

window.onload = detectarDispositivo;
window.onresize = detectarDispositivo;