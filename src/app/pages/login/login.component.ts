import { Component } from '@angular/core';
import { DefaultLayoutLoginComponent } from "../../components/default-layout-login/default-layout-login.component";
import{FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms"
import { PrimaryInputComponent } from "../../components/primary-input/primary-input.component";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DefaultLayoutLoginComponent, ReactiveFormsModule, PrimaryInputComponent],
  templateUrl: './login.component.html',
  styleUrls:[ './login.component.scss']
})
export class LoginComponent {
  private router!: Router;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  submit() {
    if (this.loginForm.valid) {
      console.log('Form Data:', this.loginForm.value);
    } else {
      console.log('Formulário inválido!');
    }
  }
  navigate(){
    console.log("Inscreva-se")
  }
}
