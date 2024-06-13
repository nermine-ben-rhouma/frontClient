import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentaireRoutingModule } from './commentaire-routing.module';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { AddCommentaireComponent } from './add-commentaire/add-commentaire.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CommentaireComponent,
    AddCommentaireComponent
  ],
  imports: [
    CommonModule,
    CommentaireRoutingModule,ReactiveFormsModule,FormsModule
  ],
  exports:[
    CommentaireComponent,
    AddCommentaireComponent
  ],
})
export class CommentaireModule { }
