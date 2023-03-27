import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-estado-cielo-imagenes',
  templateUrl: './estado-cielo-imagenes.component.html',
  styleUrls: ['./estado-cielo-imagenes.component.css']
})
export class EstadoCieloImagenesComponent {
  
  // Paramétro que guarda la descripcion y si existen los periodos
  @Input()
  descripcion !: String;


  // Método que sirve para comprobar si la descripción contiene una palabra pasada como cadena
  contiene(termino : string): boolean{
    return (this.descripcion.trim().includes(termino)) ? true : false;
    
  }
}
