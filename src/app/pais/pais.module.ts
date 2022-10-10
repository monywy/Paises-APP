import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PorpaisComponent } from './pages/porPais/porpais.component';
import { PorregionComponent } from './pages/porRegion/porregion.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PorCapitalComponent } from './pages/por-Capital/por-capital.component';


@NgModule({
  
  declarations: [PorCapitalComponent,PorpaisComponent,PorregionComponent,VerPaisComponent],
  exports:[PorCapitalComponent,PorpaisComponent,PorregionComponent,VerPaisComponent],
  imports: [
    CommonModule
  ]
})
export class PaisModule { }