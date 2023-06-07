import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-btn',
  templateUrl: './cart-btn.component.html',
  styleUrls: ['./cart-btn.component.scss'],
})
export class CartBtnComponent {
  constructor(private _router: Router) {}
  async openCartPage(): Promise<void> {
    await this._router.navigate(['/cart']);
  }
}
