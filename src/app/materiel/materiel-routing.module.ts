import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterielDetailComponent } from './materiel-detail/materiel-detail.component';
import { MaterielComponent } from './materiel/materiel.component';
const routes: Routes = [
  {path:'' ,component:MaterielComponent},
  {path:'MaterielDetail' ,component:MaterielComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterielRoutingModule { }
