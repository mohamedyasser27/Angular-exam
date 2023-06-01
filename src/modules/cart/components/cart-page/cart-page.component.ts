import { Component } from '@angular/core';
import { LocalStorageManagerService } from 'src/modules/shared/services/local-storage-manager.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent {
  constructor(private _lsManager: LocalStorageManagerService) {}
}
