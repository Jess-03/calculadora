// Resultado
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');


// Botones
const botonesNumero = document.querySelectorAll('.numero');
const botonesOperador = document.querySelectorAll('.operador');

//Acción de botones
const display = new Display(displayValorAnterior, displayValorActual);

//Eventos

/* Cuando de clic en un número lo va a procesar, va a tomar el número que está en el HTML y lo va a mostrar en la pantalla. */

botonesNumero.forEach(boton => {
    boton.addEventListener('click', () => {
        display.addNumber(boton.innerHTML);
    });
});


/* Cuando de clic a un operador va a agregar el operador a un lado del número */
botonesOperador.forEach(boton => {
    boton.addEventListener('click', () => {
        display.computar(boton.value); // muestra la operacion en la pantalla
    });
});


//Ejemplo
//const calculadora = new Calculator();
//console.log(calculadora.basic_operar("5", "2", "+"));
