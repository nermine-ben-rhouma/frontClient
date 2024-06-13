import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RandonneeComponent } from './randonnee.component';
import { DetailRandonneeComponent } from './detail-randonnee/detail-randonnee.component';
const routes: Routes = [{path:'',component:RandonneeComponent},
  {path:'detail-randonnee/:id',component:DetailRandonneeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RandonneeRoutingModule { }
