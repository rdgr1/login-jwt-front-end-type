import { Component } from '@angular/core';
import { DefaultLayoutLoginComponent } from "../../components/default-layout-login/default-layout-login.component";
import{FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms"
import { PrimaryInputComponent } from "../../components/primary-input/primary-input.component";
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DefaultLayoutLoginComponent, ReactiveFormsModule, PrimaryInputComponent],
  templateUrl: './login.component.html',
  styleUrls:[ './login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
    constructor(){
      this.loginForm = new FormGroup({
        email: new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('',[Validators.required,Validators.minLength(6)]),
      })
    }
}
