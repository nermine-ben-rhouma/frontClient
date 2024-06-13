import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandonneeRoutingModule } from './randonnee-routing.module';
import { RandonneeComponent } from './randonnee.component';
import { DetailRandonneeComponent } from './detail-randonnee/detail-randonnee.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentaireModule } from '../commentaire/commentaire.module';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    RandonneeComponent,
    DetailRandonneeComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RandonneeRoutingModule,RouterModule,FormsModule,ReactiveFormsModule,CommentaireModule
  ],exports:[ RandonneeComponent,
    DetailRandonneeComponent,
    SearchComponent]
})
export class RandonneeModule { }
