import { Component, Input } from '@angular/core';
import { UserCartService } from '@cart/services/user-cart.service';
import { Cart } from '@cart/types/cart';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-btn',
  templateUrl: './cart-btn.component.html',
  styleUrls: ['./cart-btn.component.scss'],
})
export class CartBtnComponent {
  @Input() productId!: number;
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
  addProductToCart() {
    if (this.cart.hasOwnProperty(this.productId)) {
      this.cart[this.productId]++;
    } else {
      this.cart[this.productId] = 1;
    }
    this.user_cart.updateCurrentCart(this.cart);
  }
}
