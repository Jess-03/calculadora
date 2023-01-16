class Calculator {
    basic_operar(num1, num2, operador){
        this.solucion = (num1+operador+num2); // 2 + 5 
        this.numPantalla = eval(this.solucion);
        return this.numPantalla;
    }

    advanced_operar(num1, num2){
        this.num1 = parseFloat(num1);
        this.num2 = parseFloat(num2);
    }
}

/* const calculadora = new Calculator(); */

/* console.log(calculadora.basic_operar("2", "5", "+"));
console.log(calculadora.basic_operar("2", "5", "-"));
console.log(calculadora.basic_operar("2", "5", "*"));
console.log(calculadora.basic_operar("2", "5", "/")); */

