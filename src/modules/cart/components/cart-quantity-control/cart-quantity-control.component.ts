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
  @Input() productId!: string;
  cart!: Cart;
  private currentCartSub!: Subscription;
  constructor(private user_cart: UserCartService) {}
  ngOnInit() {
    this.currentCartSub = this.user_cart
      .getCurrentCart()
      .subscribe((recievedCart: Cart) => {
        this.cart = recievedCart;
      });
  }

  decrease() {
    this.cart[this.productId]--;
    if (this.cart[this.productId] <= 0) {
      delete this.cart[this.productId];
    }
    this.user_cart.updateCurrentCart(this.cart);
  }

  increase() {
    this.cart[this.productId]++;
    this.user_cart.updateCurrentCart(this.cart);
  }
}
