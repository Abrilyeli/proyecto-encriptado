### README.md

# Proyecto de Encriptación de Texto

Este proyecto es una aplicación web que permite encriptar y desencriptar texto utilizando reglas específicas de reemplazo de caracteres. También ofrece la funcionalidad de copiar como compartir el texto encriptado o desencriptado  y es completamente responsivo, adaptándose a diferentes dispositivos como móviles, tablets y laptops.

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
- **Modo Oscuro:** Se agregó un modo oscuro para mejorar la experiencia del usuario en ambientes con poca luz.
- **Compartir:** Funcionalidad para compartir el texto encriptado o desencriptado.
- **Botón de Limpiar:** Aparece un nuevo botón que permite limpiar los campos de entrada de texto.
- **Botón de Reglas:** Se agregó un botón que muestra las reglas de encriptación.
- **Pie de Página Fijo:** Información del programador en el pie de página, que permanece fijo al final de la página y pude desaparecer al cambiar horientacion horizontal en pantallas pequeñas.

## Actualizaciones Recientes
---
### Cambios Recientes en CSS:
- Ajustes para mantener la posición de los elementos al cambiar la orientación de la página.
- se agregó un mensaje de error para cuando no se ponga ningun texto en el cuadro
- Se agregó una animación para el mensaje de copiado, ahora el mensaje es más grande y de letras de color blanco dentro de un rectangulo verde.
- Se asegura que los elementos como el título y los textos permanezcan visibles y correctamente posicionados.
- se agrego una animacion de carna inical.
- se cambia apariencia de botones y se agrega uno para activar y desactivar modo oscuro
- nuevo botones para limpiar y compartir .
  
---
### Cambios Recientes en JavaScript:
- Funcionalidad para borrar el texto de los campos de entrada al presionar los botones de encriptar o desencriptar.
- Eliminación de la alerta para el copiado del texto.
- Mejor manejo de la validación de entradas para asegurar que solo se acepten caracteres válidos.
- se agrego un temporizador de 3s a los mensajes de error.
- se agrego un tiempo maximo para mostrar los mensajes de error y a la animacion inical
- se agrega mensaje de error no hay texto para copiar
- - **Modo Oscuro:** Implementación de un modo oscuro para la interfaz.
- **Compartir:** Funcionalidad para compartir el texto en redes sociales o a través de otras aplicaciones.
- **Nuevo Botón de Limpiar:** Aparece un botón de limpiar los campos de entrada de texto mientras se escribe.
- **Botón de Reglas:** Se agregó un botón que muestra las reglas de encriptación.
---
¡Gracias por utilizar esta aplicación de encriptación de texto! Si tienes alguna sugerencia o encuentras algún problema, por favor abre un issue en el repositorio.

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
    <div id="cargador" class="cargador" role="status" aria-live="polite">
        <div class="cargando">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <div id="contenidoPrincipal" class="contenedor">
        <a href="https://www.aluracursos.com/" aria-label="Ir a Alura Cursos">
            <img src="alura3.svg" alt="Logo de Alura" class="logo">
        </a>
       <button id="modoOscuroToggle" class="modo-oscuro-toggle">🌙</button> <!-- Interruptor de modo oscuro -->

      <!-- Icono de ayuda -->
<button id="iconoAyuda" class="icono-ayuda">❓</button>

<!-- Ventana emergente de reglas -->
<div id="ventanaReglas" class="ventana-reglas">
    <div class="ventana-contenido">
        <span id="cerrarVentana" class="cerrar-ventana">&times;</span>
        <h2>Reglas del Encriptador</h2>
        <p></p>
        <p></p>
        <ul>
            <li>Debe funcionar solo con letras minúsculas</li>
            <li>No deben ser utilizados letras con acentos ni caracteres especiales</li>
           <li>Se acepta la letra ñ</li>
            <li>Se aceptan numeros</li>
            <li>Se aceptan espacios.</li>
        </ul>
    </div>
</div>
            <h1>Encriptador de Texto</h1>

        <textarea id="textoEntrada" placeholder="Ingrese el texto aquí..." aria-label="Texto a encriptar o desencriptar"></textarea>
        <div class="contenedor-botones">
            <button onclick="encriptarTexto()">Encriptar</button>
            <button onclick="desencriptarTexto()">Desencriptar</button>
              </div>  
        <textarea id="textoSalida" placeholder="El resultado aparecerá aquí..." readonly aria-label="Resultado"></textarea>
      <div class="contenedor-botones">
      <button onclick="copiarTexto()">Copiar</button>
      <button id="compartirTexto" onclick="compartirTexto()">Compartir</button>
        </div>
        <button id="btnLimpiar" class="btn-limpiar" onclick="limpiarCampos()">Limpiar</button>
        <p id="mensajeError" class="error"></p>
        <p id="mensajeDispositivo" class="dispositivo"></p>
        <div id="mensajeCopiado" class="mensaje-copiado" role="alert">¡Texto copiado!</div>
    </div>
    <footer class="pie">
        <p>Alura Challenge by Jorge Echeverría.</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>
