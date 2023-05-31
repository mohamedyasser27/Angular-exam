import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MatButtonModule } from '@angular/material/button';
import { StarRatingModule } from 'angular-star-rating';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductListComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    StarRatingModule.forRoot(),
    MatMenuModule,
    MatButtonModule,
    MatButtonModule,
    RouterLink,
    StarRatingModule,
    MatCardModule
  ],
  exports: [ProductListComponent, ProductDetailsComponent],
})
export class ProductsModule {}
