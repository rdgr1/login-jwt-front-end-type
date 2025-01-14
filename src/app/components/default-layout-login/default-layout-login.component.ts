import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-layout-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './default-layout-login.component.html',
  styleUrls: ['./default-layout-login.component.scss']
})
export class DefaultLayoutLoginComponent {
@Input() isLogin: boolean = false;
@Input() isSign: boolean = false;
@Input() title: string ="";
@Input() text: string = "";
@Input() text2: string = "";
@Input() btnPrimary: string = "";
@Input() btnSecondary: string = "";
@Input() disablePrimaryBtn: boolean = true;
@Output() formSubmit = new EventEmitter<void>();
@Output() navigate = new EventEmitter<void>(); 
onSubmit() {
  this.formSubmit.emit();
}
onNavigate(){
  this.navigate.emit();
}
}
