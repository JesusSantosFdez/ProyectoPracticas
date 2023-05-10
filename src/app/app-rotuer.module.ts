import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { HomeComponent } from './home/home.component';
import { CalculadoraV2Component } from './calculadora-v2/calculadora-v2.component';

//Declaramos la rutas que va a tener nuestra aplicación
const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    pathMatch:'full'
  },
  {
    // Ruta N2. Calculadora
    path: 'calculadora',  // El path por defecto va a ser la calculadora
    component: CalculadoraComponent,
  },
  // Ruta N3. Tiempo
  {
    path: 'tiempo',
    loadChildren: () => import('src/app/tiempo/tiempo.module').then(m => m.TiempoModule)
  },
  {
    path:'calculadoraV2',
    component: CalculadoraV2Component
  },
  // Ruta N4. Cualquier otra ruta
  {
    path: '**',
    redirectTo: ''

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
