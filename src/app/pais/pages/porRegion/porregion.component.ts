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
    `
  ]
})
export class PorregionComponent {

  regiones: string[] = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva: string = '';

  constructor() { }

  activarRegion(region: string){
    this.regionActiva = region;
  }

  

}