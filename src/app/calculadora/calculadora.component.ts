import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  // Digitos pulsados por el usuario:
  operando1: string = '';     // Los operandos se inicializan a vacíos teniendo en cuenta que si el usuario no pulsa ningún dígito su valor será 0
  operando2: string = '';
  operador: string = '';

  // Resultado de la operación
  resultado: number = 0;

  // Banderas que van a servir para saber si la operación que se está realizando es una operación válida: 
  resCorre: boolean = false; // Bandera que indica si el resultado se ha obtenido
  error: boolean = false;    // Bandera que indica si se ha introducido una operación errónea
  opExiste: boolean = false; // Bandera que indica si ya se ha pulsado un operador previamente

  // Bandera para mostrar los botones del modo ciéntifico:
  cientifico: boolean = false;


  constructor() { }

  // Método que va a llevar el registro de los números pulsados
  pulsarBoton(boton: string): void {

    /*
     Antes de comenzar a trabjar con los datos se debe comprobar si ya se ha realizado una operación previamente
    */

    if (this.resCorre) {
      console.log("hay un resultado")
      if (this.esOperador(boton)) {
        console.log("se quiere continuar con la ejecución")
        // Si entramos en esta parte del código significa que se está continuando con la operación

        // Esto significa que se toma el resultado como primer operando
        this.operando1 = '';
        this.operando1 = this.operando1 + this.resultado;

        // Una vez se tiene el nuevo operando se reinicia el resultado:
        this.resultado = 0;
        this.resCorre = false;
        this.operador = boton;
        this.operando2 = '';
      } else {
        // En caso contrario, se está realizando una operación independiente y por tanto se deben resetar los valores
        this.resultado = 0; // El resultado pasa a ser 0
        this.opExiste = false; // El operador utilizado anteriormente deja de tener validez
        this.operando2 = ''; // El segundo operador pasa a tener un valor nulo
        this.resCorre = false; // se reinicia el valor de la bandera que indica que se ha obtenido un resultado correcto

        // Se entiende que al reiniciar la operación se trabaja sobre el primer operando por lo que se va actualizar el valor de este
        this.operando1 = boton;
      }

    }
    else {


      // A continuación se va a comprobar si se ha pulsado previamente:
      if (this.opExiste) {

        // Si ya se ha pulsado un operador no se permite volver a pulsar otro:
        if (this.esOperador(boton)) {
          // Si tras haber pulsado un operador se pulsa de nuevo otro operador entonces
          // se debe indicar que se trata de una operación errónea

          this.error = true;
        }

        // -----------------------------------------------------------------------------
        // -------------------------------- OPERANDO 2 ---------------------------------
        // -----------------------------------------------------------------------------

        this.operando2 = this.operando2 + boton;
      }

      // En caso de no haber pulsado todavía un operador se trata se trabaja aún con el primer operando:
      else {

        // Se comprueba si el botón pulsado por el usuario se trata de un operando
        if (this.esOperador(boton)) {
          this.operador = boton;
          this.opExiste = true;

          // Además, en caso de que el primer operando no se haya introducido, como se quiere mostrar, se va a presuponer 
          // que el usuario pide que sea 0:
          if (this.operando1 === '') { this.operando1 = '0'; }

        }
        else {

          // -----------------------------------------------------------------------------
          // -------------------------------- OPERANDO 1 ---------------------------------
          // -----------------------------------------------------------------------------

          this.operando1 = this.operando1 + boton;
        }
      }
    }

  }

  // Método para comprobar si el botón pulsado por el usuario se trata de un operador
  esOperador(operador: string): boolean {

    return (operador === 'mult' || operador === 'div' ||
      operador === 'add' || operador === 'min' || operador === 'elev')
      ? true : false;
  }

  // Método para borrar los calculos y devolver todos los valores a nulo
  borrar() {
    console.log('borrando...')
    this.operando1 = '';
    this.operador = '';
    this.operando2 = '';
    this.resultado = 0;

    this.error = false;
    this.opExiste = false;
    this.resCorre = false;
  }

  // Método que ejecuta la operación indicada por el resultado
  ejecutar() {
    // Lo primero que se quiere comprobar es que se haya introducido una operación
    if (!this.opExiste) {
      // Do nothing
    }
    else {
      // Se comprueba si el segundo operando se ha introducido. En caso contrario se toma como que el usuario
      // desea introducir un 0
      if (this.operando2 === '') {
        this.operando2 = '0';
      }

      // A continuación se debe realizar la operación
      this.realizarOperacion();
    }
  }

  realizarOperacion() {
    let i = parseInt(this.operando2);
    // En función de la operación se va a ejecutar una operación u otra:
    switch (this.operador) {
      
      case 'mult':
        this.resultado = parseFloat(this.operando1) * parseFloat(this.operando2);
        break;
      case 'div':
        this.resultado = parseFloat(this.operando1) / parseFloat(this.operando2);;
        break;
      case 'min':
        this.resultado = parseFloat(this.operando1) - parseFloat(this.operando2);;
        break;
      case 'add':
        this.resultado = parseFloat(this.operando1) + parseFloat(this.operando2);;
        break;
      case 'elev':
          
          this.resultado = parseFloat(this.operando1);
          for(i;i>1;i=i-1){
            this.resultado = this.resultado * parseInt(this.operando1);
            console.log("algo")
            
          }
        break;
    }
    
    this.resultado = parseFloat(this.resultado.toFixed(2));
    // Al realizar la operación indicamos que el resultado obtenido es correcto
    this.resCorre = true;
  }


  // Método para mostrar ocultar botones del cientifico:
  mostrarCientifico(){
    (this.cientifico) ? this.cientifico = false: this.cientifico = true;
  }
}
