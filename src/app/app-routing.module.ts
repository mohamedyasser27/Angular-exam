import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from 'src/modules/auth/components/login-form/login-form.component';
import { SignUpFormComponent } from 'src/modules/auth/components/sign-up-form/sign-up-form.component';
import { ProductDetailsComponent } from 'src/modules/products/components/product-details/product-details.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'home/:category', component: HomePageComponent },

  { path: 'login', component: LoginFormComponent },
  { path: 'signUp', component: SignUpFormComponent },
  { path: 'product/:id', component: ProductDetailsComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
