import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MatButtonModule } from '@angular/material/button';
import { StarRatingModule } from 'angular-star-rating';

@NgModule({
  declarations: [ProductDetailsComponent, ProductListComponent],
  imports: [
    CommonModule,
    ProductComponent,
    MatButtonModule,
    StarRatingModule.forRoot()
  ],
  exports: [ProductListComponent, ProductDetailsComponent],
})
export class ProductsModule {}
