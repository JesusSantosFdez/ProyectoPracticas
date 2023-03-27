import { Component, Input, OnInit } from '@angular/core';
import { EstadoCielo } from '../../interfaces/datos-munnicipio';

@Component({
  selector: 'app-estado-cielo',
  templateUrl: './estado-cielo.component.html',
  styleUrls: ['./estado-cielo.component.css']
})
export class EstadoCieloComponent implements OnInit {

  // Variable en la que se van a guardar el estado del cielo
  @Input()
  estado !: EstadoCielo[];
  // Variables en las que se van a almacenar las descripciónes y periodo del estado
  descripcion !: String[];
  descripcionesPeriodo !: String[]; // Para quedarnos con las ultimas cuatros descripciones correspondientes a periodos
  // Variable la cual va a guardar el número de descripciones que se tienen
  nDatos !: number;

  // Variable que va a indicar si se cuenta con datos de periodos para mostrar los datos o no:
  estadoPeriodos !: Boolean;



  ngOnInit(): void {

    // Obtenemos las descripciones
    this.obtenerDescripciones();

    this.nDatos = this.numeroDatos();

    this.estadoPeriodos = this.hayPeriodos();

    if (this.hayPeriodos()){
      this.descripcionesPeriodo = this.descripcion.slice(-4);
    }

  }


  // Método que se encarga de guardar las descripciones de las variantes del cielo a lo largo del día en el array de descripciones
  obtenerDescripciones(){
    this.descripcion = [];
    for (let i = 0; i < this.estado.length; i++) {
      this.descripcion[i] = this.estado[i].descripcion;
    }
  }

  // Método que devuelve el número de descripciones con las que se cuenta
  numeroDatos(): number{
    return this.descripcion.length;
  }


  hayPeriodos(): boolean{
    return (this.descripcion.length>3) ? true: false;
  }
}
