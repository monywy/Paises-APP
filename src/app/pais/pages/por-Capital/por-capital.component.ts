import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: []
})
export class PorCapitalComponent {
  //Manejo de errores de la peticion a la API
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

  //Método para mostrar las sugerencias conforme voy escribiendo
  sugerencias(termino: string){
    //validación de errores
    this.hayError = false;

  }

  

}