import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PicturesRoutingModule } from './pictures-routing.module';
import { PicturesComponent } from './pictures/pictures.component';


@NgModule({
  declarations: [
    PicturesComponent
  ],
  imports: [
    CommonModule,
    PicturesRoutingModule
  ]
})
export class PicturesModule { }
