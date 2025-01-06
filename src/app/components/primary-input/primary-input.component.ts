import { Component, Input , ViewEncapsulation } from '@angular/core';
import { Form, FormGroup, ReactiveFormsModule } from '@angular/forms';
type InputTypes = 'text' | 'email' | 'password'
@Component({
  selector: 'app-primary-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './primary-input.component.html',
  styleUrls: ['./primary-input.component.scss'],
})
export class PrimaryInputComponent {
  @Input() formGroup!: FormGroup;
  @Input() type: InputTypes = 'text';
  @Input() formName: string = "";
  @Input() placeholder : string = "";
  @Input() label: string = "";
}
