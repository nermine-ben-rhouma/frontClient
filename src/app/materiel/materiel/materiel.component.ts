import { Component } from '@angular/core';
import { MaterielService } from '../materiel.service';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent {
  materiels:any = [];
  show = false;
  idMateriel: number=0;

  constructor(private materielService: MaterielService) {}

  ngOnInit(): void {
    this.loadMateriels();
  }

  loadMateriels(): void {
    this.materielService.listMateriel().subscribe(data => {
   this.materiels=data[0]
   console.log("this.materiels",this.materiels)
    });
  }

  deleteAction(id: number): void {
    this.idMateriel = id;
    this.show = true;
  }

  closeAction(): void {
    this.show = false;
  }

  saved(): void {
    this.show = false;
    this.loadMateriels();
  }

}
