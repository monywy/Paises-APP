import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
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

   //Mostrar información en la tabla
   paises : Country[] = [];


  constructor(private paisservice: PaisService) { }

  buscar( termino: string){
    //sino hay un error
    this.hayError = false;
    this.termino = termino;
   // console.log(this.termino);
    this.paisservice.buscarPais(termino)
    .subscribe ( paises => {
      console.log(paises);
      this.paises= paises;

    },(err) => {
    //metodo para controlar errores con .suscribe 
      this.hayError = true;
      this.paises = [];
      }); 

  }

}