//Resultado
const DisplayValorAnterior = document.getElementById('valor-anterior');
const DisplayValorActual = document.getElementById('valor-actual');


//Botones
const botonesNumero = document.querySelectorAll('.numero');
const botonesOperador = document.querySelectorAll('.operador');

//Acción de botones
const display = new Display(displayValorAnterior, displayValorActual);

botonesNumero.forEach(boton =>{
    boton.addEventListener('click', ()=>{
        display.addNumber(boton.innerHTML);
    });
});

