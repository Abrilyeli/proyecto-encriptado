### README.md

# Proyecto de Encriptación de Texto

Este proyecto es una aplicación web que permite encriptar y desencriptar texto utilizando reglas específicas de reemplazo de caracteres. También ofrece la funcionalidad de copiar el texto encriptado o desencriptado al portapapeles y es completamente responsivo, adaptándose a diferentes dispositivos como móviles, tablets y laptops.

## Reglas de Encriptación

Las reglas de encriptación son las siguientes:
- La letra "e" se convierte en "enter"
- La letra "i" se convierte en "imes"
- La letra "a" se convierte en "ai"
- La letra "o" se convierte en "ober"
- La letra "u" se convierte en "ufat"

Ejemplo:
- "gato" se convierte en "gaitober"
- "gaitober" se convierte en "gato"

El sistema acepta la letra "ñ" y solo funciona con letras minúsculas sin acentos ni caracteres especiales. Si se ingresan caracteres inválidos, se muestra un mensaje de error.

## Características del Proyecto

- **Encriptar Texto:** Convierte texto utilizando las reglas de encriptación.
- **Desencriptar Texto:** Restaura el texto original a partir del texto encriptado.
- **Copiar Texto:** Permite copiar el texto encriptado o desencriptado al portapapeles.
- **Borrar Texto:** El texto de los campos de entrada se borra al presionar los botones de encriptar o desencriptar.
- **Mensaje de Copiado:** Muestra un mensaje animado cuando el texto es copiado.
- **Responsivo:** Diseño adaptativo para diferentes dispositivos y orientaciones.
- **Pie de Página Fijo:** Información del programador con enlaces a redes sociales en el pie de página, que permanece fijo al final de la página.
- **Pull-to-Refresh:** Refresca la página al realizar el gesto de tirar hacia abajo en dispositivos móviles.

## Actualizaciones Recientes

### Cambios Recientes en CSS:
- Ajustes para mantener la posición de los elementos al cambiar la orientación de la página.
- Implementación de `position: fixed;` para el pie de página para que permanezca en su lugar al cambiar la orientación.
- Se agregó una animación para el mensaje de copiado, ahora el mensaje es más grande y de letras de color blanco dentro de un rectangulo verde.
- Se asegura que los elementos como el título y los textos permanezcan visibles y correctamente posicionados.

### Cambios Recientes en JavaScript:
- Funcionalidad para borrar el texto de los campos de entrada al presionar los botones de encriptar o desencriptar.
- Eliminación de la alerta para el copiado del texto.
- Mejor manejo de la validación de entradas para asegurar que solo se acepten caracteres válidos.
- Implementación de la funcionalidad `pull-to-refresh` para dispositivos móviles.

## Código Fuente

### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Encriptador de Texto</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <img src="logo.png" alt="Logo" class="logo">
        <h1>Encriptador de Texto</h1>
        <textarea id="input-text" placeholder="Ingrese el texto aquí..."></textarea>
        <div class="buttons">
            <button onclick="encrypt()">Encriptar</button>
            <button onclick="decrypt()">Desencriptar</button>
            <button onclick="copyText()">Copiar</button>
        </div>
        <textarea id="output-text" readonly placeholder="El texto encriptado aparecerá aquí..."></textarea>
        <p id="device-type" class="device"></p>
    </div>
    <div class="copy-message" id="copy-message">Texto copiado</div>
    <footer class="footer">
        <p>Desarrollado por Jorge Echeverria, estudiante de programación</p>
        </div>
    </footer>
    <script src="script.js"></script>
</body>
</html>
