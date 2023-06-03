import { Component } from '@angular/core';
import { LocalStorageManagerService } from '@shared/services/local-storage-manager.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent {
  cartList: string[] = [];
  currentUser: string = this._lsManager.getItems('currentUser', '');

  constructor(private _lsManager: LocalStorageManagerService) {}
  ngOnInit() {
    this.cartList = Object.keys(
      this._lsManager.getItems('carts', {})[this.currentUser]
    );
  }
}
