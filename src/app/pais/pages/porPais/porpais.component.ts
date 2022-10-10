import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-porpais',
  templateUrl: './porpais.component.html',
  styleUrls: ['./porpais.component.css']
})
export class PorpaisComponent {

  termino: string = '';

  constructor() { }

  buscar(){
    console.log(this.termino);
  }

}