import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [ProductDetailsComponent, ProductListComponent],
  imports: [CommonModule, ProductComponent],
  exports: [ProductListComponent],
})
export class ProductsModule {}
