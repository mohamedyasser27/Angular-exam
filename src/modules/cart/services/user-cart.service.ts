import { Injectable } from '@angular/core';
import { Cart } from '@cart/types/cart';
import { LocalStorageManagerService } from '@shared/services/local-storage-manager.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserCartService {
  private currentUserName!: string;
  private carts!: { [key: string]: Cart };
  currentCart!: BehaviorSubject<Cart>;
  constructor(private _lsManager: LocalStorageManagerService) {
    this.getCurrentCartFromStorage();
    this.currentCart = new BehaviorSubject(
      this.carts[this.currentUserName] ?? {}
    );
    this.currentCart.next(this.carts[this.currentUserName] ?? {});
  }

  private getCurrentCartFromStorage() {
    this.currentUserName = this._lsManager.getItems('currentUser', '');
    this.carts = this._lsManager.getItems('carts', {});
  }

  getCurrentCart(): Observable<Cart> {
    return this.currentCart.asObservable();
  }
  refreshCurrentCart() {
    this.getCurrentCartFromStorage();
    this.currentCart.next(this.carts[this.currentUserName] ?? {});
  }
  
  updateCurrentCart(newCart: Cart): void {
    this.currentCart.next(newCart);
    this.carts[this.currentUserName] = newCart;
    this._lsManager.setItems('carts', this.carts);
  }
}
