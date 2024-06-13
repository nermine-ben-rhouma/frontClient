import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'auth',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
   {path:'home',loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)},
  {path:'randonnee',loadChildren:()=>import('./randonnee/randonnee.module').then(m=>m.RandonneeModule)},
  {path:'pictures',loadChildren:()=>import('./pictures/pictures.module').then(m=>m.PicturesModule)},
  {path:'agency',loadChildren:()=>import('./agency/agency.module').then(m=>m.AgencyModule)},
  {path:'blog',loadChildren:()=>import('./blog/blog.module').then(m=>m.BlogModule)},
  {path:'materiel',loadChildren:()=>import('./materiel/materiel.module').then(m=>m.MaterielModule)},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
