import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';

//Declaramos la rutas que va a tener nuestra aplicación
const routes: Routes = [

  // Ruta N1. Calculadora
  {
    path: 'calculadora',  // El path por defecto va a ser la calculadora
    component: CalculadoraComponent,
    pathMatch: 'full'
  },
  // Ruta N2. Tiempo
  {
    path: 'tiempo',
    loadChildren: () => import('src/app/tiempo/tiempo.module').then(m => m.TiempoModule)
  },
  // Ruta N3. Cualquier otra ruta
  {
    path: '**',
    redirectTo: 'calculadora'

  }

]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]

})
export class AppRotuerModule { }
