import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  list:any
  constructor(private homeService:HomeService){}
  ngOnInit(): void {
    this.homeService.getAllRandonnee().subscribe(data=>{
      this.list=data[0]
      console.log(data)
    })
    
  }
}
