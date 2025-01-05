import { Component } from '@angular/core';
import { DefaultLayoutLoginComponent } from "../../components/default-layout-login/default-layout-login.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DefaultLayoutLoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
