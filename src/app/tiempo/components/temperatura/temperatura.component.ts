import { Component, Input } from '@angular/core';
import { HumedadRelativa } from '../../interfaces/datos-munnicipio';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})
export class TemperaturaComponent {


  @Input() 
  temperatura !: HumedadRelativa; // Se presupone que estos datos siempre van a estar cargados

}
