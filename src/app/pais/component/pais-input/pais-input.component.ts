import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject,debounceTime } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: []
})
export class PaisInputComponent implements OnInit {
  termino: string = ''; //termino de la caja de texto
  //Emisión del termino de la caja de texto
  @Output() onEnter: EventEmitter<string>= new EventEmitter();
  // Detectar el termino que se esta escribiendo
  @Output() onDebounce: EventEmitter<string>= new EventEmitter();
  //  debouncer es un observable especial para detectar un evento
   debouncer: Subject<string> = new Subject();
   //suscribcion al debouncer mediante el ngOnInit
   ngOnInit(){
     this.debouncer
      //Método para transformar la salida del suscribe
     .pipe(
       //No hacer el suscribir hasta que se dejen de emitir valores por ese lapso de tiempo
       debounceTime(300)
     )
     .subscribe(valor =>{
      console.log('debouncer:',valor);
     });
   }


 buscar(){
   //Emite el termino con la funcion creada
   this.onEnter.emit(this.termino);
 }
 
 //Detectar tecla precionada
  // teclaPrecionada(event: any){
  //   const valor = event.target.value;
 //   console.log(valor);
 //   console.log(this.termino);}

 teclaPrecionada(){
   //cada que alguien precione una tecla va a mandar a llamar al next que esta suscrito en el ngOnInit()
   this.debouncer.next( this.termino );
 }
 

}