import { Component, Input, OnInit } from '@angular/core';
import { Dato, HumedadRelativa } from '../../interfaces/datos-munnicipio';

@Component({
  selector: 'app-humedad',
  templateUrl: './humedad.component.html',
  styleUrls: ['./humedad.component.css']
})
export class HumedadComponent implements OnInit{

  // Variable en la que se va a guardar los datos de la humedad obtenidos
  @Input()
  humedad !: HumedadRelativa;
  
  // Variable utilizada para contar el número de datos obtenidos
  nDatos!: number;

  // Variables para contener la humedad máxima, mínima y extraer los datos
  maxima !: number;
  minima !: number;
  datos !: Dato[];

  ngOnInit(): void {
    
    // Al inicializar el componente se obtienen los datos relativos a la humedad máxima, mínima y los datos
    this.maxima = this.humedad.maxima;
    this.minima = this.humedad.minima;

    this.datos = this.humedad.dato;

    // Tras esto obtenemos el número de datos
    this.nDatos = this.humedad.dato.length;
    
  }
}
