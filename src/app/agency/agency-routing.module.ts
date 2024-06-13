import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyListComponent } from './agency-list/agency-list.component';


const routes: Routes = [  {path:'',component:AgencyListComponent,}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencyRoutingModule { }
