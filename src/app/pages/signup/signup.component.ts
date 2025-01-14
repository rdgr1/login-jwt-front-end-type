import { Component } from '@angular/core';
import { DefaultLayoutLoginComponent } from "../../components/default-layout-login/default-layout-login.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { PrimaryInputComponent } from "../../components/primary-input/primary-input.component";
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [DefaultLayoutLoginComponent, ReactiveFormsModule, PrimaryInputComponent],
  providers: [RegisterService],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent {
  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(
    private router: Router,
    private registerService: RegisterService,
    private toastService: ToastrService
  ) {}

  submit() {
    if (this.signupForm.invalid) {
      this.toastService.error("Por favor, preencha os campos corretamente.");
      return;
    }

    const { name, email, password, passwordConfirm } = this.signupForm.value;

    if (password !== passwordConfirm) {
      this.toastService.error("As senhas não coincidem.");
      return;
    }

    this.registerService.register(name!, email!, password!).subscribe({
      next: () => {this.toastService.success("Cadastro Realizado!");
        this.router.navigate(["login"]);
      },
      error: (err) => {
        console.error(err);
        this.toastService.error("Erro inesperado! Tente novamente mais tarde.");
      },
    });
  }

  navigate() {
    this.router.navigate(["login"]);
  }
}
