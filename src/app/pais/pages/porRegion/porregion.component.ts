import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-porregion',
  templateUrl: './porregion.component.html',
  styles: [
    `
    button{
      margin-right: 5px;
      border-color: pink;
    }
    `,
  ],
})
export class PorregionComponent {
  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva: string = '';

  constructor() {}

  //Manejo de clases CSS condicionales para control de interfaz gráfica de busquedas por region

  getClaseCSS (region: string) : string{
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    this.regionActiva = region;
  }
}
