import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  constructor(private fb: FormBuilder) {}

  loginForm = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: [
      '',
      Validators.compose([
        Validators.minLength(8),
        Validators.required,
        Validators.maxLength(20),
      ]),
    ],
  });
  onSubmit() {
    // TODO add pop up
    console.log(this.loginForm.value);
  }
}
