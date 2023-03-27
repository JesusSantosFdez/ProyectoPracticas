import { Component, OnInit } from '@angular/core';
import { DatosMunicipio } from '../../interfaces/datos-munnicipio';
import { MunicipioDiario } from '../../interfaces/municipio-diario';
import { TiempoService } from '../../services/tiempo.service';


@Component({
  selector: 'app-municipio-detalle',
  templateUrl: './municipio-detalle.component.html',
  styleUrls: ['./municipio-detalle.component.css']
})


export class MunicipioDetalleComponent implements OnInit{

  // Estos serán los datos del municipio que se está mostrando
  datosMun!: DatosMunicipio[];

  // Vamos a hacer uso del servicio de tiempo para pasar los datos
  constructor(private tiempoService: TiempoService){}

  ngOnInit(): void {
    // Cargada la página lo primero que se debe hacer es obtener los datos del municipio que se quiere mostrar
    this.datosMun = this.tiempoService.getDatosMunicipio();
    console.log('Datos iniciales:', this.datosMun[0]);
    // Con esto ya se tienen los datos de los municipios y se podría trabajar con ellos. No obstante, si se recarga la página
    // se perderían estos datos por lo que habrá que obtenerlos de forma manual
    if (this.datosMun.length === 0){
      // Comenzamos obteniendo el nombre del municipio con el que estamos trabajando el cual se encuentra en la url
      // Obtener la URL actual
      const urlActual = window.location.href;

      // Dividir la URL en partes separadas por "/"
      const partesUrl = urlActual.split('/');

      // Obtener el último elemento de la matriz resultante y quitarle los acentos
      const nombreMunicipioCodificado = partesUrl[partesUrl.length - 1];
      const nombreMunicipio = decodeURIComponent(nombreMunicipioCodificado);
      const nombreMunicipioSinAcentos = this.quitarAcentos(nombreMunicipio);
            
      this.tiempoService.mostrarMunicipio(nombreMunicipioSinAcentos)
      .subscribe( (resp) => {
        // En este punto lo que se tiene es una descripción de la petición con el estado y los enlaces a los datos
let respuesta = resp as MunicipioDiario;

        // A continuación se deben obtener los datos obtenidos por esa respuesta
        // La dirección de los datos se encuentra almacenada en respuesta.datos
        this.tiempoService.obtenerDatos(respuesta.datos)
        .subscribe ((resp) => {
          // En este momento se tienen los datos del municipio como un array por lo que lo vamos a asignar a nuestra variable de la clase
          this.datosMun = resp;
          console.log(' datos: ', this.datosMun[0]);
        })
      });
    }
  }

  // Método para quitar los acentos
    quitarAcentos(texto: string): string {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  
  // Método para obtener el nombre del día de la semana en función de la fecha pasada como parámetro
  obtenerNombreDiaSemanaFecha(fecha: any): string {
    // Declaración de los días de la semana
    let diasDeSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    // Creación de un objeto de tipo fecha
    let fechaObj = new Date(fecha);
    // Obtención del día de la semana
    let diaDeSemana = diasDeSemana[fechaObj.getDay()];
    // Formateo de la muestra de la fecha numérica
    let fechaConFormato = fechaObj.toLocaleDateString().split('/').join('-');
    // Concatenación del día de la semana junto con la fecha numérica mediante un espacio.
    let nombreDiaSemanaFecha = `${diaDeSemana} ${fechaConFormato}`;
    return nombreDiaSemanaFecha;
  }

}
