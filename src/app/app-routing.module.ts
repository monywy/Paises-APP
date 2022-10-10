import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorCapitalComponent } from './pais/pages/por-Capital/por-capital.component';
import { PorpaisComponent } from './pais/pages/porPais/porpais.component';
import { PorregionComponent } from './pais/pages/porRegion/porregion.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

//Rutas de navegacion del sidebar
const routes: Routes = [
{
  path: '',
  component: PorpaisComponent,
  pathMatch: 'full'
  
},
{
  path: 'region',
  component: PorregionComponent
 
  
},
{
  path: 'capital',
  component: PorCapitalComponent
  
  
},
{
  path: 'pais/:id',
  component: VerPaisComponent
  
  
},
{
  path: '**',
  redirectTo: '' //se envía al home o se puede enviar a un componente
}


];

@NgModule({
  //Importar y exportar rutas configuradas en routes
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports:[
   RouterModule
  ]
})

export class AppRoutingModule{

}
