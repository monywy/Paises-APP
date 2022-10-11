import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap }  from 'rxjs/operators'; //Permite recibir un observable y regresar un observable

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: []
})
export class VerPaisComponent implements OnInit {

  //Para suscribirnos a cualquier cambio del URL
  constructor(
    private activatedRounter:ActivatedRoute,
    private paisServices: PaisService
    ) { }
  
  //Se ejecuita cuando el componente esta inicializado
  ngOnInit():void {
    //Manejos de valores dependientes de un observable Método 1
    /*this.activatedRounter.params
    .subscribe( ({ id }) =>{
      console.log(id);

      this.paisServices.getPaisPorAlpha( id )
      .subscribe(pais => {
        console.log(pais);
      })
    });*/

    ///////////////////////////////////////////////Método 2

     this.activatedRounter.params
     //Uso de operadores de rxjs
     .pipe(
       //Recibe el valor del observable anterior y retorna un nuevo observable
       switchMap( (params)=> this.paisServices.getPaisPorAlpha(params.id) )
     )
     .subscribe(resp=>{
      console.log(resp)
     });

  }

}