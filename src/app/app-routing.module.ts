import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from 'src/modules/auth/components/login-form/login-form.component';
import { SignUpFormComponent } from 'src/modules/auth/components/sign-up-form/sign-up-form.component';
import { ProductListComponent } from 'src/modules/products/components/product-list/product-list.component';

const routes: Routes = [
  { path: 'home', component: ProductListComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'signUp', component: SignUpFormComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
