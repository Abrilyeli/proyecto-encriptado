// animación de inicio
document.addEventListener("DOMContentLoaded", function() {
    const cargador = document.getElementById('cargador');
    const contenidoPrincipal = document.getElementById('contenidoPrincipal');

    setTimeout(() => {
        cargador.style.display = 'none';
        contenidoPrincipal.style.display = 'flex';
    }, 1500);


// Funcionalidad de modo oscuro
    const modoOscuroToggle = document.getElementById('modoOscuroToggle');
    modoOscuroToggle.addEventListener('click', () => {
        document.body.classList.toggle('modo-oscuro');
        if (document.body.classList.contains('modo-oscuro')) {
            modoOscuroToggle.textContent = '☀️';
        } else {
            modoOscuroToggle.textContent = '🌙';
        }
    });
});

// Funcionalidad de la ventana emergente de reglas
    const iconoAyuda = document.getElementById('iconoAyuda');
    const ventanaReglas = document.getElementById('ventanaReglas');
    const cerrarVentana = document.getElementById('cerrarVentana');

    iconoAyuda.addEventListener('click', () => {
        ventanaReglas.classList.add('mostrar');
    });

    cerrarVentana.addEventListener('click', () => {
        ventanaReglas.classList.remove('mostrar');
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
            mensajeError.textContent = '';
        }, 2500);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const textarea = document.getElementById('textoEntrada');
    const btnLimpiar = document.getElementById('btnLimpiar');

    // Mostrar u ocultar el botón basado en el contenido del campo de texto
    textarea.addEventListener('input', function() {
        if (textarea.value.trim() !== '') {
            btnLimpiar.style.display = 'block'; // Mostrar el botón
        } else {
            btnLimpiar.style.display = 'none'; // Ocultar el botón
        }
    });
});

// Función para limpiar el campo de texto
function limpiarCampos() {
    const textarea = document.getElementById('textoEntrada');
    textarea.value = '';
    document.getElementById('textoSalida').value = ''; // Opcional: limpiar también el campo de salida
    document.getElementById('btnLimpiar').style.display = 'none'; // Ocultar el botón después de limpiar
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
        mostrarError('Solo letras minúsculas y espacios. Sin acentos ni caracteres especiales.');
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
        mostrarError('Solo letras minúsculas y espacios. Sin acentos ni caracteres especiales.');
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
            
            mostrarMensajeCopiado();
            mostrarError('');
        })
        .catch(err => {
            mostrarError('Error al copiar el texto: ' + err);
        });
}
// Mostrar mensaje de copiado
function mostrarMensajeCopiado() {
    const mensajeCopiado = document.getElementById('mensajeCopiado');
    mensajeCopiado.classList.add('mostrar');
    setTimeout(() => {
        mensajeCopiado.classList.remove('mostrar');
    }, 2000);
}

function compartirTexto() {
    const textoSalida = document.getElementById('textoSalida').value;
    const url = window.location.href;
    if (!textoSalida.trim()) {
        alert('Ingrese texto para compartir.');
        return;
    }
    if (navigator.share) {
        navigator.share({
            title: 'Texto Encriptado',
            text: `Mensaje encriptado:\n${textoSalida}\n\nEnlace:\n${url}`
        }).then(() => {
            url: window.location.href
        }).then(() => {
            console.log('Compartido exitosamente');
        }).catch((error) => {
            console.error('Error al compartir', error);
        });
    } else {
        alert('La API de compartir no es compatible con este navegador.');
    }
}


// Detectar el tipo de dispositivo

function detectarDispositivo() {
    const ancho = window.innerWidth;
    let tipoDispositivo;

    if (ancho <= 600) {
        tipoDispositivo = 'móvil';
    } else if (ancho <= 1024) {
        tipoDispositivo = 'tablet';
    } else {
        tipoDispositivo = 'computadora';
    }

    // Almacenar el tipo de dispositivo en el almacenamiento local
    localStorage.setItem('tipoDispositivo', tipoDispositivo);

    // Registrar en la consola
    console.log(`Estás usando un ${tipoDispositivo}.`);
}
window.onload = detectarDispositivo;
window.onresize = detectarDispositivo;