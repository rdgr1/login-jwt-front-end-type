import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-layout-login',
  standalone: true,
  imports: [],
  templateUrl: './default-layout-login.component.html',
  styleUrls: ['./default-layout-login.component.scss']
})
export class DefaultLayoutLoginComponent {
@Input() title: string ="";
@Input() text: string = "";
@Input() text2: string = "";
@Input() btnPrimary: string = "";
@Input() btnSecondary: string = "";

@Output("submit") formSubmit = new EventEmitter<void>();
@Output("navigate") onNavigate = new EventEmitter<void>(); 
onSubmit() {
  this.formSubmit.emit();
}
navigate(){
  this.onNavigate.emit();
}
}
