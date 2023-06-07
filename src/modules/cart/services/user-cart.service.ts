import { Injectable } from '@angular/core';
import { Cart } from '@cart/types/cart';
import { LocalStorageManagerService } from '@shared/services/local-storage-manager.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserCartService {
  private UserName!: string;
  private allCarts!: { [key: string]: Cart };
  private cartSubject!: BehaviorSubject<Cart>;

  constructor(private _lsManager: LocalStorageManagerService) {
    this.getCurrentCartFromStorage();
    this.cartSubject = new BehaviorSubject(this.allCarts[this.UserName] ?? {});
  }

  private getCurrentCartFromStorage() {
    this.UserName = this._lsManager.getItems('currentUser', '');
    this.allCarts = this._lsManager.getItems('carts', {});
  }

  getCurrentCart(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  refreshCurrentCart() {
    this.getCurrentCartFromStorage();
    this.cartSubject.next(this.allCarts[this.UserName] ?? {});
  }

  updateCurrentCart(newCart: Cart): void {
    this.cartSubject.next(newCart);
    this.allCarts[this.UserName] = newCart;
    this._lsManager.setItems('carts', this.allCarts);
  }
}
