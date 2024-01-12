import {Component, inject} from '@angular/core';
import {ControlContainer, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reusable-form',
  templateUrl: './reusable-form.component.html',
  styleUrl: './reusable-form.component.css',
  viewProviders:[
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, {skipSelf: true})
    }
  ]
})
export class ReusableFormComponent {
  parentContainer = inject(ControlContainer);

  get parentFormGroup(){
    return this.parentContainer.control as FormGroup;
  }

  get zipCodeFormControl(){
    return this.parentFormGroup.get('deliveryAddress')?.get('zipCode');
  }

  get streetFormControl(){
    return this.parentFormGroup.get('deliveryAddress')?.get('street');
  }

  ngOnInit(){
    console.log(this.zipCodeFormControl?.hasError('required'));
    this.parentFormGroup.addControl('deliveryAddress',
      new FormGroup({
        zipCode: new FormControl('', Validators.required),
        street: new FormControl('', Validators.required)
    }));
  }

  ngOnDestroy(){
    this.parentFormGroup.removeControl('deliveryAddress');
  }
}
