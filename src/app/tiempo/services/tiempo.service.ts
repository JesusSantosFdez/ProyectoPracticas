import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



import json from '../../../assets/codmun.json'
import { DatosMunicipio } from '../interfaces/datos-munnicipio';
@Injectable({
  providedIn: 'root'
})
export class TiempoService {
  // -------------------------------------------------- DECLARACIÓN DE VARIABLES --------------------------------------------------

  APIKey: String = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYWFsZm9uc29Admlld25leHQuY29tIiwianRpIjoiNDUwYzY4M2MtYjhhOC00ZDAyLTkxYzctODJiNjUyYzg0MTM2IiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE2NzgwOTc5MzUsInVzZXJJZCI6IjQ1MGM2ODNjLWI4YTgtNGQwMi05MWM3LTgyYjY1MmM4NDEzNiIsInJvbGUiOiIifQ.U8sBFVn5yEWRZTm-cgEhaezpe5rKJm5g481jni9L2PE'

  // URL que toma los datos diarios de un municipio (el múnicipio se representa mediante el código de municipio correspondiente en el CSV cod.mun.json que se encuentra dentro de la carpeta assets)
  private daily: String = 'https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria';
  
  // Datos de un municipio dado que se quiere comunicar entre componentes 
  private datosMunicipio: DatosMunicipio[] = [];

  // Constructor de la clase, se hace uso de httpClient para ofrecer los servicios de obtención de datos de la api
  constructor( private http: HttpClient) { }



  // -------------------------------------------------- MÉTODOS QUE VA A PROPORCIONAR EL SERVICIO --------------------------------------------------
  // Método para mostrar un municipio concreto
  mostrarMunicipio( municipio: String){
    //A continuación se obtiene el código REAL del municipio solicitado por el usuario
    let code = this.obtenerCodMun(municipio);

    // Creamos el url con el url que obtiene el tiempo diario + la api key necesaria
    const url = `${ this.daily }/${code}?api_key=${this.APIKey}`;
    
    //Teniendo la url ya se epuede realizar el método get
    return this.http.get(url);
  }



  // Método para obtener el código de un municipio dado a partir de su nombre
  obtenerCodMun (nombre: String) : String {
    
    for (let i = 0; i< json.municipios.length; i++){
      if (json.municipios[i].Nombre === nombre){
        return json.municipios[i].Code;
      }
    }

    return '';
  }

  // Método para obtener los datos de un municipio
  obtenerDatos (uri: String): Observable<Array<DatosMunicipio>> {
    
    // Dentro de este método lo que se pasa es una la URL donde se encuentran los datos por lo que se debe realizar
    // otra petición get a esta nueva url
    const url = `${uri}??api_key=${this.APIKey}`;

    //Tenienod la url donde están los datos ya se puede devolver la petición get
    return this.http.get<Array<DatosMunicipio>>(url);
  
  }

  // Setters y getters de los datos del municipio
  setDatosMunicipio(datos: DatosMunicipio[]) {
      this.datosMunicipio = datos;
  }
  
  getDatosMunicipio() {
    return this.datosMunicipio;

  }

}
