import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../types/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'https://fakestoreapi.com/products';
  getProductById(productId: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${productId}`);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  getProductsByCategory(categoryFilter: string): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.apiUrl}/category/${categoryFilter}`
    );
  }
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }
}
