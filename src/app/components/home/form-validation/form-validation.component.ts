import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form = new UntypedFormGroup({
    email: new UntypedFormControl('', Validators.compose([
      Validators.required,
      Validators.email
    ])),
    name: new UntypedFormControl('', Validators.required),
    profile: new UntypedFormControl('', Validators.required),
    active: new UntypedFormControl(false)
  });

  submited = false;

  profiles = ['Admin', 'Collaborator']

  submit(){
    this.submited = true;
    if(this.form.invalid) return;
    /*Todo form valid*/
  }

  cancel(){
    this.form.patchValue({
      email: '',
      name: '',
      profile: '',
      active: false
    });
    this.submited = false;
  }
}
