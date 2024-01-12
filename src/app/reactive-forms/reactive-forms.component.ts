import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  deliveryAddress = this.formBuilder.group({
    zipCode: ['', Validators.required],
    street: ['', Validators.required]
  })

  registerForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    deliveryAddress: this.deliveryAddress
  })

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(){
    console.log("Submitted: ", this.registerForm.value, this.registerForm.valid);
  }
}
