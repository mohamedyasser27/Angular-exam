import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CartModule } from '@cart/cart.module';
import { SharedModule } from '@shared/shared.module';
import { ProductModule } from '@product/product.module';

@NgModule({
  declarations: [HomePageComponent, CartPageComponent],
  imports: [CommonModule, CartModule,SharedModule,ProductModule],
  exports: [HomePageComponent, CartPageComponent],
})
export class PagesModule {}
