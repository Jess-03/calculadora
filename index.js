// Resultado
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');


// Botones
const botonesNumero = document.querySelectorAll('.numero');
const botonesOperador = document.querySelectorAll('.operador');

//Acción de botones
const display = new Display(displayValorAnterior, displayValorActual);

botonesNumero.forEach(boton=>{
    boton.addEventListener('click',()=>{
     display.addNumber(boton.innerHTML);
    });
});

botonesOperador.forEach(boton=>{
    boton.addEventListener('click', ()=>{
        display.computar(boton.value);
    });
});



//const calculadora = new Calculator();
//console.log(calculadora.basic_operar("5", "2", "+"));
