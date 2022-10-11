import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: []
})
export class VerPaisComponent implements OnInit {

  //Para suscribirnos a cualquier cambio del URL
  constructor(private activatedRounter:ActivatedRoute) { }
  
  //Se ejecuita cuando el componente esta inicializado
  ngOnInit():void {
    this.activatedRounter.params
    .subscribe( ({ id }) =>{
      console.log(id);
    });
  }

}