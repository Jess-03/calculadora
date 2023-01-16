class Display{
   constructor(displayValorAnterior, displayValorActual) {
      this.displayValorAnterior = displayValorAnterior; //se muestra en pantalla
      this.displayValorActual = displayValorActual; //se muestra en pantalla
      this.calculadora = new Calculator();
      this.operacion = undefined;
      this.valorActual = ''; //se hace la operacion
      this.valorAnterior = ''; //se hace la operacion
      this.signos = {
         sumar: '+',
         restar: '-',
         dividir: '/',
         multiplicar: '*',
         potenciar: '**'
      }
   }

   //Evita que se añada otro punto cuando ya detecto que hay uno
   addNumber(numero){
      if (numero === '.' && this.valorActual.includes('.')) return
      this.valorActual = this.valorActual.toString() + numero.toString();
      this.printValues();
   }

   printValues(){
      this.displayValorActual.textContent = this.valorActual;
      this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.operador] || ''}`;
   }

   // <---
   deleteValue(){
      this.valorActual = this.valorActual.toString().slice(0,-1); //elimina el último número
      this.printValues();
   }

   //C
   deleteAll(){
      this.valorActual = '';
      this.valorAnterior = '';
      this.operador = undefined; 
      this.printValues();
   }

   computar(tipo){
      //console.log('llegaste aca ' + tipo);
      this.operador !== 'igual' && this.calcular(this.verificador);
      this.operador = tipo;

      this.operacion = this.signos[this.operador];
      this.verificador = 'basic_operar';
      
      this.valorAnterior = this.valorActual || this.valorAnterior;
      this.valorActual='';
      this.printValues();
   }

   calcular(x){
      this.funcion = x;
      //console.log('holi');
      if((this.valorAnterior != '') && (this.valorActual !='')){
         this.valorActual = this.calculadora[this.funcion](this.valorAnterior, this.valorActual, this.operacion);
      }
   }
}