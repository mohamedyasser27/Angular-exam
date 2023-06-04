import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '@material/angular-material.module';

//custom components
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoginFormComponent, SignUpFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
  exports: [LoginFormComponent, SignUpFormComponent],
})
export class AuthModule {}
