import { Component, Input } from '@angular/core';
import { LocalStorageManagerService } from '@shared/services/local-storage-manager.service';

@Component({
  selector: 'app-cart-btn',
  templateUrl: './cart-btn.component.html',
  styleUrls: ['./cart-btn.component.scss'],
})
export class CartBtnComponent {
  @Input() productId!: number;
  addProductToCart() {
    const carts: any = this._lsManager.getItems('carts', {});
    const currentUser: any = this._lsManager.getItems('currentUser', '');
    if (carts.hasOwnProperty(currentUser)) {
      if (carts[currentUser].hasOwnProperty(this.productId)) {
        carts[currentUser][this.productId]++;
      } else {
        carts[currentUser][this.productId] = 0;
      }
    } else {
      carts[currentUser] = {};
      carts[currentUser][this.productId] = 0;
    }
    this._lsManager.setItems('carts', carts);
    
  }
  constructor(private _lsManager: LocalStorageManagerService) {}
}
