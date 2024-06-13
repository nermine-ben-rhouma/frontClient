export class Commentaire {
    id?: number;
    content?: string;
    clientId: any; // Replace `any` with `Client` if the Client model is defined
    randonneeId: any; // Replace `any` with `Randonnee` if the Randonnee model is defined
    urlImage:any
  }