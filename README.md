Encriptación de Texto 
Este proyecto es una aplicación web que permite encriptar y desencriptar texto utilizando reglas específicas de reemplazo de caracteres. También ofrece la funcionalidad de copiar el texto encriptado o desencriptado al portapapeles y es completamente responsivo, adaptándose a diferentes dispositivos como móviles, tablets y laptops.
Reglas de EncriptaciónLas reglas de encriptación son las siguientes:

la letra "e" se convierte en "enter"  la letra "i" se convierte en"imes"
la letra "a" se convierte en "ai"
La letra "o" se convierte en "ober"
La letra "u" se convierte en "ufat"

Ejemplo:"gato" se convierte en "gaitober"
"gaitober" se convierte en "gato"

El sistema acepta la letra "ñ" y solo funciona con letras minúsculas sin acentos ni caracteres especiales. Si se ingresan caracteres inválidos, se muestra un mensaje de error.
Características del Proyecto

Encriptar Texto: Convierte texto utilizando las reglas de encriptación.

Desencriptar Texto: Restaura el texto original a partir del texto encriptado.

Copiar Texto: Permite copiar el texto encriptado o desencriptado al portapapeles.
Borrar Texto: El texto de los campos de entrada se borra al presionar los botones de encriptar o desencriptar.

Mensaje de Copiado: Muestra un mensaje animado cuando el texto es copiado.

Responsivo: Diseño adaptativo para diferentes dispositivos y orientaciones.

Pie de Página Fijo: Información del programador en el pie de página, que permanece fijo al final de la página.

Actualización Versión Actual: 1.5 Fecha de Actualización: 19 de julio de 2024

Cambios y Mejoras Validación de Entrada Mejorada:

Se añadió validación para asegurar que solo se acepten letras minúsculas y espacios. Si se ingresan caracteres inválidos (mayúsculas, números, signos o caracteres especiales), se muestra un mensaje de error. Mensaje de Error:

Se añadió un párrafo en el HTML (

) para mostrar mensajes de error cuando el texto ingresado contiene caracteres inválidos. Botón de Copiado:
Se añadió un botón para copiar el texto resultante al portapapeles, utilizando la misma funcionalidad que Ctrl+C. Diseño Responsivo:

Se añadieron parámetros para ajustar el diseño según el tamaño de la pantalla, mejorando la experiencia en dispositivos móviles, tabletas y laptops/PCs. Se añadió detección de dispositivo con JavaScript para mostrar un mensaje correspondiente según el tipo de dispositivo utilizado. Pie de Página Personalizado:

Se añadió un pie de página con lo datos del programador Jorge Echeverría, con un estilo brillante.
    
       Actualización Versión Actual: 1.6 Fecha de Actualización: 24 de julio de 2024

  Cambios Recientes en CSS:se realiza cambio de imagen de fondo Ajustes para mantener la posición de los elementos al cambiar la orientación de la página.
Implementación de position: fixed; para el pie de página para que permanezca en su lugar al cambiar la orientación.
Se agregó una animación para el mensaje de copiado, ahora el mensaje es más grande y de color blanco.
Se asegura que los elementos como el título y los textos permanezcan visibles y correctamente posicionados.
Cambios Recientes en JavaScript:Funcionalidad para borrar el texto de los campos de entrada al presionar los botones de encriptar o desencriptar.Eliminación de la alerta para el copiado del texto.
Mejor manejo de la validación de entradas para asegurar que solo se acepten caracteres válidos.
cambios HTML: se agrega etiqueta<a> al logo de alura para agregar enlace oficial y una animacion al presionar 