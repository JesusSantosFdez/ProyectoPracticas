import { Component, Input, OnInit } from '@angular/core';
import { Dato, HumedadRelativa } from '../../interfaces/datos-munnicipio';

@Component({
  selector: 'app-sensacion-termica',
  templateUrl: './sensacion-termica.component.html',
  styleUrls: ['./sensacion-termica.component.css']
})
export class SensacionTermicaComponent implements OnInit{

  // La sensación térmica viene dada en un objeto de tipo humedad relativa
  @Input() 
  sensacionTermica !: HumedadRelativa; 

  maxima!: number;
  minima!: number;
  datos!: Dato[];

  // Variable que nos ayudará a saber el número de datos de la sensación térmica que existen
  ndatos!: number;

  ngOnInit(): void {
    
    // Para comenzar se extraen los parámetros pasados por el padre

    this.maxima = this.sensacionTermica.maxima;
    this.minima = this.sensacionTermica.minima;
    this.datos = this.sensacionTermica.dato;

    // Obtenemos el número de datos que se han cargado 
    this.ndatos = this.datos.length;
  }
}
