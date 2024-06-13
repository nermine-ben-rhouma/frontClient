import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  show: boolean = false;
  message: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  submit(): void {
 console.log(this.registerForm.value)
 console.log('agency',this.registerForm.value.role)
 if(this.registerForm.value.role=="agence"){
  let agency:any
  agency.name=this.registerForm.value.username

  agency.firstName=this.registerForm.value.firstName

  agency.lastName=this.registerForm.value.lastName

  agency.role=this.registerForm.value.role
  agency.password=this.registerForm.value.password

  agency.email=this.registerForm.value.email
 
  this.authService.registerAgence(agency).subscribe(
    (response:any) => {
      this.router.navigate(['http://localhost:4200/auth/login']);
    },
    (error:any) => {
      this.show = true;
      this.message = 'Registration failed. Please try again.';
      console.error('Error:', error);
    }
  );
 }else{
  this.authService.registerUser(this.registerForm.value).subscribe(
    (response:any) => {
      this.router.navigate(['/auth/login']);
    },
    (error:any) => {
      this.show = true;
      this.message = 'Registration failed. Please try again.';
      console.error('Error:', error);
    }
  );

}
 }

}
