import { Component, Input, OnInit } from '@angular/core';
import { ProbPrecipitacion } from '../../interfaces/datos-munnicipio';

@Component({
  selector: 'app-precipitaciones',
  templateUrl: './precipitaciones.component.html',
  styleUrls: ['./precipitaciones.component.css']
})
export class PrecipitacionesComponent implements OnInit{

  //Declaramos una variable en la cual se va a almacenar la probabilidad de precipaticón 
  @Input() 
  precipitaciones!: ProbPrecipitacion[];

  // Array que va a contener los cuatro últimos elementos de la probabilidad para poder se mostrado en caso de contar
  // con los periodos
  precipitacionesPeriodos!: ProbPrecipitacion[];

  lluvia!: boolean; // variable que va a indicar si lloverá (prob > 70) o no
  nDatos !: number; //variable que va a obtener el número de elementos pasados

  
  ngOnInit(): void {
  
    // Nada más comenzar se va a obtener el número de elementos pasados. De esta forma se sabrá si se tienen
    // datos de las preicipitaciones por periodo o no.

    // En caso de que nDatos > 3 entonces se tienen datos por periodo
    this.nDatos = this.precipitaciones.length;

    this.precipitacionesPeriodos = this.precipitaciones.slice(-4);

    // Además, se obtiene la probabilidad de que llueva o no
    this.lluvia = this.llovera(this.precipitaciones[0]);
  }

  llovera(probabilidad: ProbPrecipitacion): boolean{
    return (probabilidad.value > 70) ? true : false;
  }

}
