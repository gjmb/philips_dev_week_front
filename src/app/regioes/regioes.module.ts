import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort'; 
import {MatCardModule} from '@angular/material/card'; 

import { RegioesRoutingModule } from './regioes-routing.module';
import { RegioesComponent } from './regioes/regioes.component';



@NgModule({
  declarations: [
    RegioesComponent
  ],
  imports: [
    CommonModule,
    RegioesRoutingModule,
    MatSortModule,
    MatCardModule
  ]
})
export class IncidenciasModule { }
