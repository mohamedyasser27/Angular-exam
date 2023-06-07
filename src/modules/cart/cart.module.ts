import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '@material/angular-material.module';

import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartBtnComponent } from './components/add-to-cart-btn/add-to-cart-btn';
import { CartQuantityControlComponent } from './components/cart-quantity-control/cart-quantity-control.component';


@NgModule({
  declarations: [ CartBtnComponent, CartItemComponent, CartListComponent, CartQuantityControlComponent],
  imports: [CommonModule,AngularMaterialModule],
  exports: [CartBtnComponent,CartListComponent],
})
export class CartModule {}
