import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
S
@Injectable({
  providedIn: 'root'
})
export class ServicepictureService {

  private apiUrl = 'http://localhost:3000/';
  constructor(private http:HttpClient) { }
  getAllpictures():Observable<any>{
    return this.http.get(this.apiUrl+'/pictures/pictures') as Observable<any>
  }
}
