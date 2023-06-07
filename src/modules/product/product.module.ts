import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { StarRatingModule } from 'angular-star-rating';

import { RouterLink } from '@angular/router';
import { CartModule } from '../cart/cart.module';

import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductListComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    StarRatingModule.forRoot(),
    RouterLink,
    StarRatingModule,
    CartModule,
    AngularMaterialModule,
  ],
  exports: [ProductListComponent, ProductDetailsComponent],
})
export class ProductModule {}
