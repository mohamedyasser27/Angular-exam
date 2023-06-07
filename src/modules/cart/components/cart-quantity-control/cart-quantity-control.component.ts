import { Component, Input } from '@angular/core';
import { UserCartService } from '@cart/services/user-cart.service';
import { Cart } from '@cart/types/cart';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-cart-quantity-control',
  templateUrl: './cart-quantity-control.component.html',
  styleUrls: ['./cart-quantity-control.component.scss'],
})
export class CartQuantityControlComponent {
  @Input() productId!: number;
  currentCart!: Cart;
  private currentCartSub!: Subscription;

  constructor(private _current_user_cart: UserCartService) {}
  ngOnInit() {
    this._current_user_cart.getCurrentUserCart();
    this.currentCartSub = this._current_user_cart.currentCart.subscribe(
      (currentCart: Cart) => {
        this.currentCart = currentCart;
      }
    );
  }
  ngOnDestroy() {
    this.currentCartSub.unsubscribe();
  }

  decrease() {
    this.currentCart[this.productId]--;
    if (this.currentCart[this.productId] <= 0) {
      delete this.currentCart[this.productId];
    }
    this._current_user_cart.currentCart.next(this.currentCart);
    this._current_user_cart.saveCurrentUserCart(this.currentCart);

  }

  increase() {
    this.currentCart[this.productId]++;
    this._current_user_cart.currentCart.next(this.currentCart);
    this._current_user_cart.saveCurrentUserCart(this.currentCart);
  }
}
