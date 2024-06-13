import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterielRoutingModule } from './materiel-routing.module';

import { MaterielDetailComponent } from './materiel-detail/materiel-detail.component';
import { MaterielComponent } from './materiel/materiel.component';


@NgModule({
  declarations: [
    MaterielComponent,
    MaterielDetailComponent
  ],
  imports: [
    CommonModule,
    MaterielRoutingModule
  ]
})
export class MaterielModule { }
