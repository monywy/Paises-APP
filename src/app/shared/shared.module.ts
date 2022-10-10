import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,AppRoutingModule
  ],
  exports:[
   SidebarComponent
  ],
  declarations: [SidebarComponent]
})
export class SharedModule { }