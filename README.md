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

El sistema acepta la letra "ñ" y números ,y solo funciona con letras minúsculas sin acentos ni caracteres especiales. Si se ingresan caracteres inválidos, se muestra un mensaje de error.

## Características del Proyecto

- **Encriptar Texto:** Convierte texto utilizando las reglas de encriptación.
- **Desencriptar Texto:** Restaura el texto original a partir del texto encriptado.
- **Copiar Texto:** Permite copiar el texto encriptado o desencriptado al portapapeles.
- **Borrar Texto:** El texto de los campos de entrada se borra al presionar los botones de encriptar o desencriptar.
- **Mensaje de Copiado:** Muestra un mensaje animado cuando el texto es copiado.
- **Responsivo:** Diseño adaptativo para diferentes dispositivos y orientaciones.
- **Pie de Página Fijo:** Información del programador en el pie de página, que permanece fijo al final de la página.

## Actualizaciones Recientes

### Cambios Recientes en CSS:
- Ajustes para mantener la posición de los elementos al cambiar la orientación de la página.
- se agregó un mensaje de error para cuando no se ponga ningun texto en el cuadro
- Se agregó una animación para el mensaje de copiado, ahora el mensaje es más grande y de letras de color blanco dentro de un rectangulo verde.
- Se asegura que los elementos como el título y los textos permanezcan visibles y correctamente posicionados.
- se agrego una animacion de carna inical.
- 

### Cambios Recientes en JavaScript:
- Funcionalidad para borrar el texto de los campos de entrada al presionar los botones de encriptar o desencriptar.
- Eliminación de la alerta para el copiado del texto.
- Mejor manejo de la validación de entradas para asegurar que solo se acepten caracteres válidos.
- se agrego un temporizador de 3s a los mensajes de error.
- se agrego un tiempo maximo para mostrar los mensajes de error y a la animacion inical
- se agrega mensaje de error no hay texto para copiar

## Código Fuente

### HTML
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Encriptador</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
          <div id="loader" class="loader">
              <div class="loading">
                 <span></span>
                  <span></span>
                 <span></span>
              <span></span>
           </div>
        </div>
     <div class="container">
      <a href="https://www.aluracursos.com/">
         <img src="alura3.svg" alt="logo alura" class="logo">
        </a>

        <h1>Encriptador de Texto</h1>


        <textarea id="inputText" placeholder="Ingrese el texto aquí..."></textarea>
        <button onclick="encryptText()">Encriptar</button>
        <button onclick="decryptText()">Desencriptar</button>



        <textarea id="outputText" placeholder="El resultado aparecerá aquí..." readonly></textarea>
        <button onclick="copyText()">Copiar</button>
        <p id="errorMessage" class="error"></p>
        <p id="deviceMessage" class="device"></p>
        <div id="copyMessage" class="copy-message">¡Texto copiado!</div>
    </div>
    <footer class="footer">
    <p>Alura Challenge by Jorge echeverria.</p>


    </footer>
     <script src="script.js"></script>
       </body>
</html>
