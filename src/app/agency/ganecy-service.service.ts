import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }


  getAllAgencies(): Observable<any> {
    return this.http.get<any>(this.apiUrl+'agency/list-agency');
  }

  addAgency(agency: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'agency/create-agency', agency);
  }

  getAgencyById(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'agency/agency-detail/'+JSON.stringify(id));
  }

  editAgencyById(id: number, agency: any): Observable<any> {
    return this.http.patch<any>(this.apiUrl + 'agency/' +  JSON.stringify(id), agency);
  }

  deleteAgencyById(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + 'agency/' +JSON.stringify(id));
  }
}
