import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';

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
    this.activatedRounter.params
    .subscribe( ({ id }) =>{
      console.log(id);

      this.paisServices.getPaisPorAlpha( id )
      .subscribe(pais => {
        console.log(pais);
      })
    });
  }

}