import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PorpaisComponent } from './pages/porPais/porpais.component';
import { PorregionComponent } from './pages/porRegion/porregion.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PorCapitalComponent } from './pages/por-Capital/por-capital.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaisTablaComponent } from './component/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './component/pais-input/pais-input.component';


@NgModule({
  //Declaración y exportacion de todos los componentes de la carpeta.
  declarations: [PorCapitalComponent,PorpaisComponent,PorregionComponent,VerPaisComponent,PaisTablaComponent,PaisInputComponent],
  exports:[PorCapitalComponent,PorpaisComponent,PorregionComponent,VerPaisComponent,PaisTablaComponent,PaisInputComponent],
  imports: [
    CommonModule, FormsModule, RouterModule
  ]
})
export class PaisModule { }