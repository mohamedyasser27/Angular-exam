import { Component, Input } from '@angular/core';
import { UserCartService } from '@cart/services/user-cart.service';
import { Cart } from '@cart/types/cart';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-to-cart-btn',
  templateUrl: './add-to-cart-btn.component.html',
  styleUrls: ['./add-to-cart-btn.component.scss'],
})
export class AddToCartBtnComponent {
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
  addProductToCart(event: Event) {
    if (this.cart.hasOwnProperty(this.productId)) {
      this.cart[this.productId]++;
    } else {
      this.cart[this.productId] = 1;
    }
    this.user_cart.updateCurrentCart(this.cart);
    event.stopPropagation();
  }
}
