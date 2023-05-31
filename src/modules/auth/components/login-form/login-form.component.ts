import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  constructor(private fb: FormBuilder, private _auth: AuthenticationService) {}

  loginForm = this.fb.nonNullable.group({
    email: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    password: [
      '',
      {
        validators: [
          Validators.minLength(8),
          Validators.required,
          Validators.maxLength(20),
        ],
      },
    ],
  });
  onSubmit() {
    if (this.loginForm.valid) {
      this._auth.login(
        this.loginForm.value.email ?? '',
        this.loginForm.value.password ?? ''
      );
    }
  }
}
