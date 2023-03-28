import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MunicipioDetalleComponent } from './pages/municipio-detalle/municipio-detalle.component';
import { TiempoRoutingModule } from './tiempo-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { DatosDiaComponent } from './components/datos-dia/datos-dia.component';
import { TemperaturaComponent } from './components/temperatura/temperatura.component';
import { SensacionTermicaComponent } from './components/sensacion-termica/sensacion-termica.component';
import { PrecipitacionesComponent } from './components/precipitaciones/precipitaciones.component';
import { EstadoCieloComponent } from './components/estado-cielo/estado-cielo.component';
import { EstadoCieloImagenesComponent } from './components/estado-cielo-imagenes/estado-cielo-imagenes.component';
import { EstadoCieloImagenesPeriodoComponent } from './components/estado-cielo-imagenes-periodo/estado-cielo-imagenes-periodo.component';
import { HumedadComponent } from './components/humedad/humedad.component';



@NgModule({
  declarations: [
    MunicipioDetalleComponent,
    DatosDiaComponent,
    TemperaturaComponent,
    SensacionTermicaComponent,
    PrecipitacionesComponent,
    EstadoCieloComponent,
    EstadoCieloImagenesComponent,
    EstadoCieloImagenesPeriodoComponent,
    HumedadComponent
  ],
  imports: [
    CommonModule,
    TiempoRoutingModule,
    PrimeNgModule
  ],
  exports: [
    MunicipioDetalleComponent,
    DatosDiaComponent
  ]
})
export class TiempoModule { }
