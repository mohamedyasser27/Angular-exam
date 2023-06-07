import { Component } from '@angular/core';
import { ProductApiService } from '../../services/product-api.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../types/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  constructor(
    private _currentRoute: ActivatedRoute,
    private _productApi: ProductApiService
  ) {}
  productData!: Product;
  ngOnInit() {
    this._productApi
      .getProductById(this._currentRoute.snapshot.params['id'])
      .subscribe((recievedProduct) => {
        this.productData = recievedProduct;
      });
  }
}
