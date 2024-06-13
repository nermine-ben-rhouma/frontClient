import { Component } from '@angular/core';
import { AgencyService } from '../ganecy-service.service';

@Component({
  selector: 'app-agency-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.css']
})
export class AgencyListComponent {
  show: boolean=false;
  agencies: any;
  agencyId: number=0;
  constructor( private agencyService: AgencyService) {}
  ngOnInit(): void {
    this.getAllAgency()
  }
  getAllAgency()
{
  this.agencyService.getAllAgencies().subscribe(data=>{
    console.log('data',data)
    this.agencies=data[0]
    console.log( this.agencies)
  })

}
}
