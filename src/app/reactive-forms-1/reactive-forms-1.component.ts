import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-forms-1',
  templateUrl: './reactive-forms-1.component.html',
  styleUrl: './reactive-forms-1.component.css'
})
export class ReactiveForms1Component {
  registerForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  })

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(){
    console.log("Submitted: ", this.registerForm.value, this.registerForm.valid);
  }
}
