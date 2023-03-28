import { Component, Input, OnInit } from '@angular/core';
import { Viento } from '../../interfaces/datos-munnicipio';
import { PuntoCardinal } from './punto-cardinal.enum';

@Component({
  selector: 'app-viento',
  templateUrl: './viento.component.html',
  styleUrls: ['./viento.component.css']
})

export class VientoComponent implements OnInit{

  // Variable en la que vamos a almacenar el viento recibido como parametro
  @Input()
  vientos !: Viento[];

  // Variable que va a servir para conocer la cantidad de valores recibidos y poder trabajar en función de la
  // cantidad de información que contiene 
  nDatos !: number;

  // Enum que será utilizado para obtener la imagen a mostrar 
  puntoCardinal: typeof PuntoCardinal = PuntoCardinal;
  direcciones !: string[];
  
  ngOnInit(): void {
    //Obtenemos el número de elementos que se reciben
    this.nDatos = this.vientos.length;
    if (this.nDatos > 4) {
      this.vientos = this.vientos.slice(-4);
      this.nDatos = 4;
    }
    
    //Obtenemos las direcciones en un arreglo
    this.direcciones = this.vientos.map((viento) => viento.direccion);
  }

  // Método que retorna la ruta de la imagen correspondiente a una dirección
  obtenerRutaImagen(direccion: string): string {
    if (Object.keys(PuntoCardinal).includes(direccion)) {
      return PuntoCardinal[direccion as keyof typeof PuntoCardinal];
    }
    return '';
  }

}
