import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '@material/angular-material.module';

import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartQuantityControlComponent } from './components/cart-quantity-control/cart-quantity-control.component';
import { AddToCartBtnComponent } from './components/add-to-cart-btn/add-to-cart-btn';
import { CartBtnComponent } from './components/cart-btn/cart-btn.component';

@NgModule({
  declarations: [
    AddToCartBtnComponent,
    CartBtnComponent,
    CartItemComponent,
    CartListComponent,
    CartQuantityControlComponent,
  ],
  imports: [CommonModule, AngularMaterialModule],
  exports: [AddToCartBtnComponent, CartListComponent,CartBtnComponent],
})
export class CartModule {}
