import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { CardComponent } from './card/card.component';
import { HomeModule } from './home/home.module';
import { RandonneeModule } from './randonnee/randonnee.module';
import { PicturesModule } from './pictures/pictures.module';
import { MaterielModule } from './materiel/materiel.module';
import { CommentaireModule } from './commentaire/commentaire.module';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CoreModule,AuthModule,HomeModule,RandonneeModule,PicturesModule,MaterielModule,CommentaireModule
  ],
  exports:[CardComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
