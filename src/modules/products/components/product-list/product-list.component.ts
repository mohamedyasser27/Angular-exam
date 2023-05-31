import { Component, Input, SimpleChange } from '@angular/core';
import { ProductApiService } from 'src/modules/products/services/product-api.service';
import { Product } from '../../types/Product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: Array<Product> = [];
  @Input() chosenCategoryFilter: string = '';

  ngOnChanges(changes: any) {
    if (!changes.chosenCategoryFilter.firstChange) {
      if (changes.chosenCategoryFilter.currentValue == 'all') {
        this._productsApi
          .getProducts()
          .subscribe((recievedProducts) => (this.products = recievedProducts));
      } else {
        this._productsApi
          .getProductsByCategory(changes.chosenCategoryFilter.currentValue)
          .subscribe((recievedProducts) => (this.products = recievedProducts));
      }
    }
  }
  constructor(private _productsApi: ProductApiService) {}
  ngOnInit() {
    this._productsApi
      .getProducts()
      .subscribe((recievedProducts) => (this.products = recievedProducts));
  }
}
