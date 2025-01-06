import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-layout-login',
  standalone: true,
  imports: [],
  templateUrl: './default-layout-login.component.html',
  styleUrl: './default-layout-login.component.scss'
})
export class DefaultLayoutLoginComponent {
@Input() title: string ="";
@Input() text: string = "";
@Input() text2: string = "";
@Input() btnPrimary: string = "";
@Input() btnSecondary: string = "";
}
