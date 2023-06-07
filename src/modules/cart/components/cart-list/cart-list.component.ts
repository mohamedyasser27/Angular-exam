import { Component } from '@angular/core';
import { UserCartService } from '@cart/services/user-cart.service';
import { Cart } from '@cart/types/cart';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent {
  cartList!: Cart;
  private currentCartSub!: Subscription;
  constructor(public _current_cart_list: UserCartService) {
    this._current_cart_list.getCurrentUserCart();
    this.currentCartSub = this._current_cart_list.currentCart.subscribe(
      (currentCart) => {
        this.cartList = currentCart;
      }
      );
  }

  ngOnDestroy() {
    this.currentCartSub.unsubscribe();
  }
}
