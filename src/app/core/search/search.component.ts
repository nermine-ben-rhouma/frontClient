import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string = 'randonnée';
  results: any[] = [];
  private apiUrl = 'http://localhost:3000/random/search'; // Update with your NestJS server URL

  constructor(private http: HttpClient) { }

  search(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?query=${query}`);
  }
  getValue(event:any){
    console.log(this.query)

  }

  onSearch() {
    this.query=this.query
    this.search(this.query).subscribe(data => {
      this.results = data[0];
      console.log(  this.results )
    });
  }

}
