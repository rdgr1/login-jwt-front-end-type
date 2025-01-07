import { Component } from '@angular/core';
import { DefaultLayoutLoginComponent } from "../../components/default-layout-login/default-layout-login.component";
import{FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms"
import { PrimaryInputComponent } from "../../components/primary-input/primary-input.component";
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [DefaultLayoutLoginComponent, ReactiveFormsModule, PrimaryInputComponent],
  providers: [LoginService],
  templateUrl: './signup.component.html',
  styleUrls:[ './signup.component.scss']
})
export class SignUpComponent {
  constructor(private router: Router, private loginService: LoginService,
    private toastService: ToastrService
  ){
  }
  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  submit() {
        this.loginService
        .login(this.signupForm.value.email!, this.signupForm.value.password!)
        .subscribe({
          next: () => this.toastService.success("Cadastro Realizado!"),
          error: () => this.toastService.error("Erro inesperado! Tente novamente mais tarde"),
        });
    }  
  navigate(){
    console.log('formSubmit event received!')
    this.router.navigate(["login"])
  }
}
