import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RandonneeModule } from '../randonnee/randonnee.module';



@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,RouterModule,HttpClientModule,FormsModule,ReactiveFormsModule,RandonneeModule
  ],
  exports:[
    HeaderComponent,
    SideNavComponent,
    FooterComponent
  ]
})
export class CoreModule { }
