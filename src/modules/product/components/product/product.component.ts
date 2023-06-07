import { Component, Input } from '@angular/core';
import { Product } from '../../types/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() productData!: Product;
}
