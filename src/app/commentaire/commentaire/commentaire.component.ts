import { Component } from '@angular/core';
import { CommentaireService } from '../commentaire.service';
import { Commentaire } from '../commentaire';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent {
  commentaires: Commentaire[] = [];

  constructor(private commentaireService: CommentaireService) {}

  ngOnInit(): void {
    this.commentaireService.getCommentaires().subscribe(data => {
      this.commentaires = data;
    });
  }

}
