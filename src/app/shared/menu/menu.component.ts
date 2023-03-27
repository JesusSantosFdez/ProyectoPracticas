import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit{

  // Listado de elementos a mostrar en el menú:
  dockItems!: MenuItem[];

  ngOnInit(): void {
      this.dockItems = [
        {
          label: 'Calculadora',
          icon: "https://media.istockphoto.com/vectors/calculator-math-kawaii-character-vector-id839879412?k=6&m=839879412&s=612x612&w=0&h=Caqk6WbjzWH9Z7CRtwlPqxQik7UMq4wgekF9DASJ9dE=",
          routerLink: '/'
      },
      {
          label: 'Tiempo',
          icon: "https://th.bing.com/th/id/OIP.GyYUgam5C5O1aWceygGSTAAAAA?pid=ImgDet&w=432&h=432&rs=1",
          routerLink: 'tiempo/main'
      },
      ]
  }
}
