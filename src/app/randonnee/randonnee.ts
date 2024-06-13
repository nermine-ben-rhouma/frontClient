import { User } from "../auth/login";

export class Reservation {
  
    id?: number;
   
    dateReservation?: Date; 
 
    prix?: number; 

    nombreParticipation?: number; 
 
    userId?: number ;  

    randonneeId?:any

    clientId?: any
    isValid?: boolean=false

    cancel?: boolean=false
}