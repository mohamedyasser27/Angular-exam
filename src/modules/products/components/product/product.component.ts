import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../types/Product';
import { RouterLink } from '@angular/router';
import { StarRatingModule } from 'angular-star-rating';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CurrencyPipe,
    RouterLink,
    StarRatingModule
  ],
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
