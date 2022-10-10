import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-porpais',
  templateUrl: './porpais.component.html',
  styleUrls: ['./porpais.component.css']
})
export class PorpaisComponent {

  termino: string = '';

  constructor(private paisservice: PaisService) { }

  buscar(){
    console.log(this.termino);
    this.paisservice.buscarPais(this.termino)
    .subscribe ( resp => {
      console.log(resp);

    });
  }

}