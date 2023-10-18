import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  apiUrl = 'https://fakestoreapi.com';
  private product: IProduct | null = null;
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.apiUrl}/products?limit=20`);
  }

  setProduct(product: IProduct) {
    this.product = product;
  }

  getProduct(): IProduct | null {
    return this.product;
  }

  getProductById(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.apiUrl}/products/${id}`);
  }
}
