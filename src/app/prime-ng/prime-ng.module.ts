import { NgModule } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {DockModule} from 'primeng/dock';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';







@NgModule({
  declarations: [],
  imports: [],
  exports: [
    AccordionModule,
    ButtonModule,
    CardModule,
    DockModule,
    MenubarModule,
    PanelModule,
    SplitterModule
  ]
})
export class PrimeNgModule { }
