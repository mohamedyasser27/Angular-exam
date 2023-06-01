import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../User';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent {
  signUpForm!: FormGroup;

  passwordMatcher(): ValidatorFn {
    return (): ValidationErrors | null => {
      const rePasswordValue = this.signUpForm?.get('rePassword')?.value;
      const passwordValue = this.signUpForm?.get('password')?.value;
      if (passwordValue === rePasswordValue) {
        return null;
      } else {
        return { passwordMismatch: true };
      }
    };
  }

  constructor(private fb: FormBuilder, private _auth: AuthenticationService) {
    this.signUpForm = this.fb.nonNullable.group({
      name: ['', { validators: [Validators.required] }],
      email: ['', { validators: [Validators.required] }],
      password: [
        '',
        {
          validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.required,
            Validators.maxLength(20),
            this.passwordMatcher(),
          ],
        },
      ],
      rePassword: [
        '',
        {
          validators: [Validators.required, this.passwordMatcher()],
        },
      ],
      telephone: ['', { validators: [Validators.required] }],
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const sentUser: User = {
        ...this.signUpForm.value
      };
      this._auth.register(sentUser);
    }
  }
}
