import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-porpais',
  templateUrl: './porpais.component.html',
  styles: [
  `
   li{
     cursor: pounter;
   }
  `
  ]
})
export class PorpaisComponent {
 //Manejo de errores de la peticion a la API
   hayError: boolean = false;
   termino: string = '';

   //Mostrar información en la tabla
   paises : Country[] = [];

   //Guardar los resultados de las sugerencias
   paisesSugeridos : Country[] = [];

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

    //Consultar sugerencias de busqueda
    this.paisservice.buscarPais (termino)
    .subscribe ( paises => this.paisesSugeridos = paises.splice(0,5),
    (err) => this.paisesSugeridos = []
    );

  }

}