import { Component } from '@angular/core';
import { ProductApiService } from 'src/modules/products/services/product-api.service';
import { Product } from '../../types/Product';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/modules/auth/User';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: Array<Product> = [];
  sub: Subscription = new Subscription();
  constructor(
    private _productsApi: ProductApiService,
    private _Activatedroute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.sub = this._Activatedroute.paramMap.subscribe((params: ParamMap) => {
      if (params.get('category') == 'all' || params.get('category') == null) {
        this._productsApi
          .getProducts()
          .subscribe((recievedProducts) => (this.products = recievedProducts));
      } else {
        this._productsApi
          .getProductsByCategory(params.get('category'))
          .subscribe((recievedProducts) => (this.products = recievedProducts));
      }
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  // ngOnInit() {
  //   this._productsApi.getProducts().subscribe((recievedProducts) => (this.products = recievedProducts));
  // }
}
