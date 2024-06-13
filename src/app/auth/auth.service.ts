import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, User } from './login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  
  loginUser(user:Login):Observable<any>{
     return this.http.post<any>("http://127.0.0.1:3000/client/login",user) as Observable<any>
  }
  registerUser(user:User):Observable<any>
{
  return this.http.post<any>("http://localhost:3000/client/create-client",user)as Observable<any>
}
registerAgence(agency:any):Observable<any>
{
  return this.http.post<any>("http://localhost:3000/agency/create-agencyt",agency)as Observable<any>
}
}
