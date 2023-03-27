import { Component, Input } from '@angular/core';
import { Dia } from '../../interfaces/datos-munnicipio';

@Component({
  selector: 'app-datos-dia',
  templateUrl: './datos-dia.component.html',
  styleUrls: ['./datos-dia.component.css']
})
export class DatosDiaComponent {

  // Esta clase va a contener los datos obtenidos de la api para un municipio determinado:
  @Input() // Se utiliza la etiqueta imput para recibir los datos del padre
  datos !: Dia; // Se presupone que estos datos siempre van a estar cargados

}
