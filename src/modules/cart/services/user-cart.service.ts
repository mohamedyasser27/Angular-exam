import { Injectable } from '@angular/core';
import { Cart } from '@cart/types/cart';
import { LocalStorageManagerService } from '@shared/services/local-storage-manager.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserCartService {
  private currentUserName!: string;
  private carts!: { [key: string]: Cart };
  currentCart!: BehaviorSubject<Cart>;
  constructor(private _lsManager: LocalStorageManagerService) {
  }

  getCurrentUserCart() {
    this.currentUserName = this._lsManager.getItems('currentUser', '');
    this.carts = this._lsManager.getItems('carts', {});
    this.currentCart = new BehaviorSubject(
      this.carts[this.currentUserName] ?? {}
    );
    this.currentCart.next(this.carts[this.currentUserName] ?? {});
  }

  saveCurrentUserCart(newCart: Cart) {
    this.currentCart.next(newCart);
    this._lsManager.setItems('carts', {
      ...this.carts,
      [this.currentUserName]: newCart,
    });
  }
}
