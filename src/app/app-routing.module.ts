import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginFormComponent } from 'src/modules/auth/components/login-form/login-form.component';
import { SignUpFormComponent } from 'src/modules/auth/components/sign-up-form/sign-up-form.component';
import { ProductListComponent } from 'src/modules/products/components/product-list/product-list.component';
import { ProductDetailsComponent } from 'src/modules/products/components/product-details/product-details.component';

const routes: Routes = [
  {
    path: 'products',
    component: HomePageComponent,
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: ':category', component: ProductListComponent },
    ],
  },
  { path: 'login', component: LoginFormComponent },
  { path: 'signUp', component: SignUpFormComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: '', redirectTo: 'products/all', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
