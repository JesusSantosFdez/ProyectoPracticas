import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OperatorPipe } from '../pipes/operator.pipe';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MenuComponent } from './menu/menu.component';
import { DecimalPipe } from '@angular/common';




@NgModule({
  declarations: [
    MenuComponent,
    OperatorPipe
  ],
  exports:[
    MenuComponent,
    DecimalPipe,
    OperatorPipe,
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SharedModule { }
