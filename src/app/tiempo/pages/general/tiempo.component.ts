import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosMunicipio } from '../../interfaces/datos-munnicipio';
import { MunicipioDiario } from '../../interfaces/municipio-diario';
import { TiempoService } from '../../services/tiempo.service';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css']
})
export class TiempoComponent implements OnInit {
    // -------------------------------------------------- DECLARACIÓN DE VARIABLES --------------------------------------------------

  munBus: String = 'Calamonte'; // Nombre del municipio a buscar
  
  // Bandera que indica si se ha producido un error en la búsqueda de municipio
  errorMun: Boolean = false;

  // Elemento que va a guardar los datos del municipio consultado por el usuario
  datosMun!: DatosMunicipio[];

  constructor( private tiempoService: TiempoService,
              private router: Router ){}

    // -------------------------------------------------- MÉTODOS DE LA CLASE  --------------------------------------------------

  ngOnInit(): void {
    this.tiempoService.mostrarMunicipio(this.munBus)
    .subscribe( (resp) => {
      // En este punto lo que se tiene es una descripción de la petición con el estado y los enlaces a los datos
      console.log('respuesta',resp);

      let respuesta = resp as MunicipioDiario;

      // A continuación se deben obtener los datos obtenidos por esa respuesta
      // La dirección de los datos se encuentra almacenada en respuesta.datos
      this.tiempoService.obtenerDatos(respuesta.datos)
      .subscribe ((resp) => {
        // En este momento se tienen los datos del municipio como un array por lo que lo vamos a asignar a nuestra variable de la clase
        this.datosMun = resp;
      })

    });
  }

  buscarMun(municipio : Event):void {
    // Cuando se entra en el métod ose presupone que no habrá error
    this.errorMun = false;

    
    // A continuación se actualiza el municipio de búsqueda
    const input = municipio.target as HTMLInputElement; // Convertir el target en un HTMLInputElement
    this.munBus = input.value;  // A partir de ahí ya se puede obtener el valor y asignarlo como el nuevo municipio de busqueda

    this.tiempoService.mostrarMunicipio(this.munBus)
    .subscribe( (resp) => {

      // A continuación lo que tenemos es un objeto con los datos en un url por lo que vamos a hacer uso de la interfaz definida
      let respuesta = resp as MunicipioDiario;

      // A continuación se deben obtener los datos obtenidos por esa respuesta
      // La dirección de los datos se encuentra almacenada en respuesta.datos

      this.tiempoService.obtenerDatos(respuesta.datos)
      .subscribe ((resp) => {
        // En este momento se tienen los datos del municipio como un array por lo que lo vamos a asignar a nuestra variable de la clase
        this.datosMun = resp;
        console.log("datos", resp);
      })

    },
      (error)=>{
        // En caso de que se haya introducido un término de búsqueda no correcto se indicará que hay error para que se muestre una tarjeta indicándolo
        this.errorMun = true;
      });
  }

  mostrarMunicipio(){
    // Lo primero que debemos hacer es pasar los datos al servicio
    this.tiempoService.setDatosMunicipio(this.datosMun);
    // A continuación redireccionamos a la página propia del municipio
    this.router.navigate(['tiempo',this.datosMun[0].nombre]);
  }
}


