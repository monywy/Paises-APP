import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/por-Capital/por-Capital.component';
import { PorpaisComponent } from './pages/porPais/porpais.component';
import { PorregionComponent } from './pages/porRegion/porregion.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PorCapitalComponent,PorpaisComponent,PorregionComponent,VerPaisComponent],
  exports:[PorCapitalComponent,PorpaisComponent,PorregionComponent,VerPaisComponent]
})
export class PaisModule { }