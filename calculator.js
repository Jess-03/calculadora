class Calculator {
    basic_operar(num1, num2, operador){
        this.solucion = (num1+operador+num2);
        this.numPantalla = eval(this.solucion);
        return this.numPantalla;
    }
}

const calculadora = new Calculator();

console.log(calculadora.basic_operar("2", "5", "+"));
console.log(calculadora.basic_operar("2", "5", "-"));
console.log(calculadora.basic_operar("2", "5", "*"));
console.log(calculadora.basic_operar("2", "5", "/"));