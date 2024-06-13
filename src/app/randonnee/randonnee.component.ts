import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RandonneeService } from './randonnee.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-randonnee',
  templateUrl: './randonnee.component.html',
  styleUrls: ['./randonnee.component.css']
})
export class RandonneeComponent  {
  @Input("result")result:any =[]
randonneeId: number=0;
  randonneeList: any;
  activeIndex=0
constructor(private route:ActivatedRoute, private randonneeService:RandonneeService,private http: HttpClient) {}
items = [
  { src: 'https://www.lolitaontheroad.com/_next/image?url=https%3A%2F%2Fcdn.lolitaontheroad.com%2Fmedias%2F2022%2F05%2FRANDONNEE--finale-.jpeg&w=3840&q=100', alt: 'Image 5'},
  { src: 'https://images.ladepeche.fr/api/v1/images/view/5c2f11898fe56f0cb75ea19d/hd/image.jpg?v=1', alt: 'Image 1' },
  { src: 'https://www.trekking-mont-blanc.com/wp-content/uploads/2020/06/Materiel-pour-une-randonnee-en-ete.jpg', alt: 'Image 2' },
  { src: 'https://res.cloudinary.com/dzd04po8j/image/upload/v1716395782/jhdfchp68dfwjyt09ivx.jpg', alt: 'Image 3' },
  { src: 'https://res.cloudinary.com/dzd04po8j/image/upload/v1716395790/oofnxnmceesbshmjovga.jpg', alt: 'Image 4' },

];
query: string = 'randonnée';
results: any[] = [];
private apiUrl = 'http://localhost:3000/random/search'; // Update with your NestJS server URL



search(query: string): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}?query=${query}`);
}
getValue(event:any){
  console.log(this.query)

}

onSearch() {
  this.query=this.query
  this.search(this.query).subscribe(data => {
    this.results = data;
    console.log(  this.results )
  });
}


selectSlide(index: number) {
  this.activeIndex = index;
}

prevSlide() {
  this.activeIndex = (this.activeIndex > 0) ? this.activeIndex - 1 : this.items.length - 1;
}

nextSlide() {
  this.activeIndex = (this.activeIndex + 1) % this.items.length;
}
ngOnInit(): void {
this.getAllrandonnée()
this.onSearch()

}
getAllrandonnée(){
  this.randonneeService.getRandonneeALL().subscribe(data=>{
    this.randonneeList=data[0]
    console.log( this.randonneeList)
  })
}
}
