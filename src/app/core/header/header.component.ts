import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  role: string='';
  userId: number=0;
  client: any;
  query: string = 'randonnée';
  results: any[] = [];
  isLoggedIn: boolean=false;
  private apiUrl = 'http://localhost:3000/random/search';
  constructor(private activatedRoute:ActivatedRoute,private http: HttpClient,private router: Router, ) {}
  logout() {
    this.router.navigate(['/auth/login']);
    const allCookies = document.cookie.split(';');
   
    
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
    
      this.role = this.getCookie('role')
      if(this.role!=''){
        this.isLoggedIn=true
      }
      this.userId=Number(this.getCookie('userId'))
    this.client=this.getClientById(this.userId)
  })


}
getCookie(cname: string) {
var name = cname + "=";
var decodedCookie = decodeURIComponent(document.cookie);
var ca = decodedCookie.split(';');
for (var i = 0; i < ca.length; i++) {
var c = ca[i];
while (c.charAt(0) == ' ') {
  c = c.substring(1);
}
if (c.indexOf(name) == 0) {
  return c.substring(name.length, c.length);
}
}
return "";
}


getClientById(id: number) {
  return this.http.get('http://localhost:3000/client'+JSON.stringify(id))
}


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
