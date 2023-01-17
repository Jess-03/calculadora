class Display {
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
   addNumber(numero) {
      if (numero === '.' && this.valorActual.includes('.')) return
      this.valorActual = this.valorActual.toString() + numero.toString();
      this.printValues();
   }

   //Función para que muestre los valores/operadores en la pantalla de la caluladora
   printValues() {
      this.displayValorActual.textContent = this.valorActual;
      this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.operador] || ''}`;
   }

   // <--- Borrar un valor
   deleteValue() {
      this.valorActual = this.valorActual.toString().slice(0, -1); //elimina el último número
      this.printValues();
   }

   //C Borrar todo
   deleteAll() {
      this.valorActual = '';
      this.valorAnterior = '';
      this.operador = undefined;
      this.printValues();
   }

   //Hacer operaciones y obtener resultado
   computar(tipo) {
         /*  Si presiono el botón = imprimirá el resultado, pero si oprimo otro botón, 
         proseguirá con la función de la operación.
      */
      this.operador !== 'igual' && this.calcular(this.verificador);
      this.operador = tipo;

      //  Que operacion va a realizar
      //   muestra signo -->   +   más no la palabra "suma"     
      this.operacion = this.signos[this.operador];
      this.verificador = 'basic_operar';

      // Va a mostrar en la pantalla de la caluladora los números que quiero calcular
      // 10 +  --> 10 era valor actual, pero al ingresar el 5 pasa a ser el valor anterior
      // 5  --> pasa a ser el valor actual
      this.valorAnterior = this.valorActual || this.valorAnterior;
      this.valorActual = '';
      this.printValues(); //para "imprimir" el valor actual, es decir, que nos muestre el resultado
   }

   calcular(x) {
      this.funcion = x;
      /* Si los valores(anterior y actual) no estan vacios, entonces que realice la operacion 
       Si uno está vacío no va a hacer la operación; ambos valores deben tener un número para que se realice la función */
      if ((this.valorAnterior != '') && (this.valorActual != '')) {
         this.valorActual = this.calculadora[this.funcion](this.valorAnterior, this.valorActual, this.operacion);
      }                                 // Por ejemplo:           10                   5               +
   }
}