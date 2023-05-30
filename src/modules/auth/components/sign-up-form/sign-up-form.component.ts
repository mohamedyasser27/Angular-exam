import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent {
  constructor(private fb: FormBuilder) {}

  signUpForm = this.fb.nonNullable.group({
    name: ['', Validators.required],

    email: ['', Validators.required],

    password: [
      '',
      Validators.compose([
        Validators.minLength(8),
        Validators.required,
        Validators.maxLength(20),
      ]),
    ],
    rePassword: [''],
    phone: ['', Validators.required],
  });
  onSubmit() {
    // TODO add pop up
    console.log(this.signUpForm.value);
  }
}
