import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form = new FormGroup({
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email
    ])),
    name: new FormControl('', Validators.required),
    profile: new FormControl('', Validators.required),
    active: new FormControl(false)
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
