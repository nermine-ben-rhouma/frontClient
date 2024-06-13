export class Login {
    constructor(
        public email? : string,
        public password? : string,
        public role? : string
      ) {}
}
export class User{
    id?: number;

    username?: string;
  
    password?: string;
   
    email?: string;
  
    firstName?: string;
  
    lastName?: string;
  
    role?: string;
  
    createdAt?: Date;
  
    updatedAt?: Date;
  
    isActive?: boolean;
  
    tokenValue?: string;

}