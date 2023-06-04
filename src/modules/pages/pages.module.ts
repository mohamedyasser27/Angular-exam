import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CartModule } from '../cart/cart.module';

@NgModule({
  declarations: [HomePageComponent, CartPageComponent],
  imports: [CommonModule, CartModule],
})
export class PagesModule {}
