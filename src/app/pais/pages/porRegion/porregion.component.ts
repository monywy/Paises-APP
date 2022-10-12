import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

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

  //Mostrar información en la tabla
   paises : Country[] = [];

  constructor(private paisServices: PaisService) {}

  //Manejo de clases CSS condicionales para control de interfaz gráfica de busquedas por region

  getClaseCSS (region: string) : string{
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    this.regionActiva = region;
    this.paisServices.buscarRegion(region)
    .subscribe(paises => this.paises = paises);
    

  }
}
