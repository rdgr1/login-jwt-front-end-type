import { Component } from '@angular/core';
import { DefaultLayoutLoginComponent } from "../../components/default-layout-login/default-layout-login.component";
import{FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms"
import { PrimaryInputComponent } from "../../components/primary-input/primary-input.component";
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DefaultLayoutLoginComponent, ReactiveFormsModule, PrimaryInputComponent],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrls:[ './login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router, private loginService: LoginService,
    private toastService: ToastrService
  ){
  }
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  submit() {
        this.loginService
        .login(this.loginForm.value.email!, this.loginForm.value.password!)
        .subscribe({
          next: () => {this.toastService.success("Login Realizado!");this.router.navigate(["user"])},
          error: () => this.toastService.error("Erro inesperado! Tente novamente mais tarde"),
        });
    }  
  navigate(){
    this.router.navigate(["signup"])
  }
}
