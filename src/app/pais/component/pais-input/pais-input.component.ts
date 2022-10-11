import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: []
})
export class PaisInputComponent  {

  //Emisión del termino de la caja de texto

  @Output() onEnter: EventEmitter<string>= new EventEmitter();


 termino: string = '';


 buscar(){
   //Emite el termino con la funcion creada
   this.onEnter.emit(this.termino);
 }

 

}