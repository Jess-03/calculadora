class Display{
   constructor(displayValorAnterior, displayValorActual){
    this.displayValorAnterior = displayValorActual; //se muestra en pantalla
    this.displayValorActual = displayValorAnterior; //se muestra en pantalla
    this.calculadora= new Calculator();
    this.ValorActual = ''; //se hace la operacion
    this.ValorAnterior = ''; //se hace la operacion
   }
   
   addNumber(numero){
    if(numero === '.' && this.ValorActual.includes('.'))
        return this.ValorActual = this.ValorActual.toString() + numero.toString();
               this.printValues();
   }

   printValues(){
    this.displayValorActual.textContent = this.ValorActual;
    this.displayValorAnterior.textContent = this.ValorAnterior;
   }
}
