import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getCommentaires(): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/commentaire/list-commentaire');
  }

  createCommentaire(commentaire: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/commentaire/create-commentaire', commentaire);
  }


}
