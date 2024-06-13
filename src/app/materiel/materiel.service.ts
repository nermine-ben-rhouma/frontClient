// materiel.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Materiel } from './materiel';
 // Create a Materiel model if not already done

@Injectable({
  providedIn: 'root'
})
export class MaterielService {
  private apiUrl = 'http://localhost:3000/materiel'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  createMateriel(materiel: Materiel): Observable<Materiel> {
    return this.http.post<Materiel>(`${this.apiUrl}/create-materiel`, materiel); 
  }

  listMateriel(): Observable<any> {
    return this.http.get<Materiel[]>(`${this.apiUrl}/list-materiel`) as Observable<any>
  }

  getMateriel(id: number): Observable<Materiel> {
    return this.http.get<Materiel>(`${this.apiUrl}/materiel/${id}`);
  }

  updateMateriel(id: number, materiel: Materiel): Observable<Materiel> {
    return this.http.patch<Materiel>(`${this.apiUrl}/update-materiel/${id}`, materiel);
  }

  deleteMateriel(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete-materiel/${id}`);
  }
}
