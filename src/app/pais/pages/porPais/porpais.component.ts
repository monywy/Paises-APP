import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-porpais',
  templateUrl: './porpais.component.html',
  styleUrls: ['./porpais.component.css']
})
export class PorpaisComponent {
//  Manejo de errores de la peticion a la API
   hayError: boolean = false;

  termino: string = '';

  constructor(private paisservice: PaisService) { }

  buscar(){
    //sino hay un error
    this.hayError = false;
    console.log(this.termino);
    this.paisservice.buscarPais(this.termino)
    .subscribe ( resp => {
      console.log(resp);

    },(err) => {
    //metodo para controlar errores con .suscribe 
      this.hayError = true;

      }); 

  }

}