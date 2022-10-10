import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PaisModule } from './pais/pais.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  //Declaracion de todos los modulos
  imports:      [ BrowserModule, FormsModule,PaisModule,SharedModule,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
