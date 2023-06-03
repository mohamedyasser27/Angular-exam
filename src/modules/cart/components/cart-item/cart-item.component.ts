import { Component, Input } from '@angular/core';
import { ProductApiService } from '../../../product/services/product-api.service';
import { Product } from '@product/types/Product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() productId!: any;

  productData?: Product;
  constructor(private _productApi: ProductApiService) {}
  ngOnInit() {
    this._productApi
      .getProductById(this.productId)
      .subscribe((recievedProductData) => {
        this.productData = recievedProductData;
      });
  }
}
