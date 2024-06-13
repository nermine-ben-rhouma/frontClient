import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgencyRoutingModule } from './agency-routing.module';
import { AgencyListComponent } from './agency-list/agency-list.component';


@NgModule({
  declarations: [
    AgencyListComponent
  ],
  imports: [
    CommonModule,
    AgencyRoutingModule
  ]
})
export class AgencyModule { }
