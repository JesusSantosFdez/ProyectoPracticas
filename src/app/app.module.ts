import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { TiempoComponent } from './tiempo/pages/general/tiempo.component'
import { HttpClientModule } from "@angular/common/http";


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { SharedModule } from './shared/shared.module';
import { AppRotuerModule } from './app-rotuer.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { TiempoModule } from './tiempo/tiempo.module';
import { CalculadoraModule } from './calculadora/calculadora.module';




@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    TiempoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule,
    SharedModule,
    AppRotuerModule,
    PrimeNgModule,
    CalculadoraModule,
    TiempoModule,
    HttpClientModule,
  ],
  exports: [
    PrimeNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
