import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandonneeService {
  private apiUrl = 'http://localhost:3000/';
  constructor(private http:HttpClient) { }
getRandonneeById(id:number){
  return this.http.get(this.apiUrl+'random/'+JSON.stringify(id))
}
getRandonneeALL():Observable<any>{
  return this.http.get(this.apiUrl+'random/list-randoon') as Observable<any>
}
createReservation(reservation: any): Observable<any> {
  return this.http.post(`${this.apiUrl}reservation/create-reservation`, reservation);
}

}
