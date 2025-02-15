// import { Component } from '@angular/core';
// import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
// import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
// import { Router } from '@angular/router';
// import { LoginService } from '../../services/login/login.service';
// import { SignupService } from '../../services/signup.service';
// import { ToastrService } from 'ngx-toastr';
// import { HttpClient } from '@angular/common/http';


// interface SignupForm{
//   name: FormControl
//   email: FormControl,
//   password: FormControl,
//   passwordConfirm: FormControl
// }

// @Component({
//   selector: 'app-signup',
//   standalone: true,
//   imports: [DefaultLoginLayoutComponent, ReactiveFormsModule,PrimaryInputComponent],
//   providers: [
//     LoginService    
//   ],
//   templateUrl: './signup.component.html',
//   styleUrl: './signup.component.scss'
// })
// export class SignUpComponent {
//   signupForm!: FormGroup<SignupForm>;  

//   constructor(
//     private router: Router, 
//     private signupService: SignupService,
//     private toastService: ToastrService
//   ){
//     this.signupForm = new FormGroup({      
//       name: new FormControl('', [Validators.required,Validators.minLength(6)]),
//       email: new FormControl('', [Validators.required,Validators.email]),
//       password: new FormControl('', [Validators.required,Validators.minLength(6)]),
//       passwordConfirm: new FormControl('', [Validators.required,Validators.minLength(6)])
//     })
//   }

//   submit(){
//     this.signupService.create(this.signupForm.value.name,this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.passwordConfirm){
        
//     }
//   }
//   navigate(){
//     this.router.navigate(["login"])
//   }
// }
