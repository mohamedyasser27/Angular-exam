import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginFormComponent } from 'src/modules/auth/components/login-form/login-form.component';
import { SignUpFormComponent } from 'src/modules/auth/components/sign-up-form/sign-up-form.component';
import { ProductListComponent } from 'src/modules/products/components/product-list/product-list.component';
import { ProductDetailsComponent } from 'src/modules/products/components/product-details/product-details.component';
import { CategoriesPageComponent } from 'src/modules/category/components/categories-page/categories-page.component';
import { CartPageComponent } from 'src/modules/cart/components/cart-page/cart-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'categories',
    component: CategoriesPageComponent,
    children: [
      { path: ':category', component: ProductListComponent },
      { path: '', redirectTo: 'all', pathMatch: 'full' },
    ],
  },
  {
    path: 'cart', component: CartPageComponent
  
  },

  { path: 'login', component: LoginFormComponent },
  { path: 'signUp', component: SignUpFormComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
