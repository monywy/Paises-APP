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

  //Guardar los resultados de las sugerencias
  paisesSugeridos : Country[] = [];
  mostrarSug: boolean = false;

  constructor(private paisservice: PaisService) { }

  buscar( termino: string){
    this.mostrarSug = false;
    //sino hay un error
    this.hayError = false;
    this.termino = termino;
   // console.log(this.termino);
    this.paisservice.buscarCapital(termino)
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
    this.mostrarSug = true;
    //validación de errores
    this.hayError = false;
    this.termino = termino;
    //Consultar sugerencias de busqueda
    this.paisservice.buscarCapital (termino)
    .subscribe ( paises => this.paisesSugeridos = paises.splice(0,5),
    (err) => this.paisesSugeridos = []
    );
  }

  //Método para buscar la sugerencia
  buscarSug(termino: string){
    this.buscar(termino)
    
   }

}