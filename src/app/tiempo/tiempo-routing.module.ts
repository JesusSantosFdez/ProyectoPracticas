import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TiempoComponent } from './pages/general/tiempo.component';
import { MunicipioDetalleComponent } from './pages/municipio-detalle/municipio-detalle.component';


const routes: Routes =[
  {
    path: '',
    children:[
      {
        path: 'main',
        component: TiempoComponent,
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: MunicipioDetalleComponent
      },
      {
        
        path: '**',
        redirectTo: ''
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class TiempoRoutingModule { }
