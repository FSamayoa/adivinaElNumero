let numeroAdivinar = Math.trunc(Math.random() * 100)
let contador = 0
let numeroUsuario = document.getElementById("numeroEntrada");
let varNumeroUsuario = numeroUsuario.value
let etiquetaMensaje = document.getElementById("mensaje") 
let intentos = document.getElementById("mensaje2") 




let accion = document.getElementById("boton")

accion.addEventListener("click", function () {
    contador ++
    intentos.textContent = contador


    if (varNumeroUsuario < 0 || varNumeroUsuario > 100 || varNumeroUsuario == "" ) {
        etiquetaMensaje.textContent = "El numero debe ser entre 0 y 100"
        etiquetaMensaje.style.color = "red";

    } else {
        if (varNumeroUsuario == numeroAdivinar) {
            etiquetaMensaje.textContent = "¡Excelente! ¡adivinaste el numero!"
            etiquetaMensaje.style.color = "green";
            numeroUsuario.disabled = true;
        } else if (varNumeroUsuario < numeroAdivinar) {
            etiquetaMensaje.textContent = "Cerca, prueba un numero mas Alto"
            etiquetaMensaje.style.color = "black";

        } else {
            etiquetaMensaje.textContent = "Cerca, prueba un numero mas Bajo"
            etiquetaMensaje.style.color = "black";

        }
    }




})

