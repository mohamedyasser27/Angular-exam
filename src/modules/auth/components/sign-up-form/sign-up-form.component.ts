import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../User';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent {
  constructor(private fb: FormBuilder, private _auth: AuthenticationService) {}

  signUpForm = this.fb.nonNullable.group({
    name: ['asdasd', Validators.required],
    email: ['asd@gmial.com', Validators.required],
    password: [
      'adsfasdf',
      Validators.compose([
        Validators.minLength(8),
        Validators.required,
        Validators.maxLength(20),
      ]),
    ],
    rePassword: ['adsfasdf'],
    telephone: ['asdfasdf', Validators.required],
  });

  onSubmit() {
    
    if (this.signUpForm.valid) {
      const sentUser: User = {
        name:String( this.signUpForm.value.name),
        email:String( this.signUpForm.value.email),
        password:String( this.signUpForm.value.password),
        telephone:String( this.signUpForm.value.telephone),
      };
      this._auth.register(sentUser);
    }
  }
}
