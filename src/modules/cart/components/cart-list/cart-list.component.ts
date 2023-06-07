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
  cart!: Cart;
  private currentCartSub!: Subscription;
  constructor(private user_cart: UserCartService) {
    this.currentCartSub = this.user_cart
      .getCurrentCart()
      .subscribe((recievedCart: Cart) => {
        this.cart = recievedCart;
      });
  }

  ngOnDestroy() {
    this.currentCartSub.unsubscribe();
  }
}
