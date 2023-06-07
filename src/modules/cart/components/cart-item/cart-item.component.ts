import { Component, Input } from '@angular/core';
import { ProductApiService } from '../../../product/services/product-api.service';
import { Product } from '@product/types/Product';
import {  Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() productId!: string;
  productData!: Product;
  private currentProductSub!: Subscription;

  constructor(private _productApi: ProductApiService) {}
  ngOnInit() {
    this.currentProductSub = this._productApi
      .getProductById(this.productId)
      .subscribe((recievedProductData) => {
        this.productData = recievedProductData;
      });
  }
 

  ngOnDestroy() {
    this.currentProductSub.unsubscribe();
  }
}
