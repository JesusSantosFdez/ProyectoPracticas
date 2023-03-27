import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-estado-cielo-imagenes-periodo',
  templateUrl: './estado-cielo-imagenes-periodo.component.html',
  styleUrls: ['./estado-cielo-imagenes-periodo.component.css']
})
export class EstadoCieloImagenesPeriodoComponent {
// Paramétro que guarda la descripcion y si existen los periodos
@Input()
periodo !: string | undefined;

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  console.log(this.periodo, 'periodo')
}

}
