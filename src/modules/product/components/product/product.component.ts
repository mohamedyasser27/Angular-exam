import { Component, Input } from '@angular/core';
import { Product } from '../../types/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  
})
export class ProductComponent {
  @Input() inputProduct: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    rating: { count: 0, rate: 0 },
    image: '',
  };
}
