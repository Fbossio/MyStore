import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  mybreakpoint = 3;
  rowHeight = '1:1.5';
  products: IProduct[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.mybreakpoint = this.getBreakpoint(window.innerWidth);
    this.rowHeight = this.getRowHeight(window.innerWidth);
    this.productsService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  handleSize(event: Event) {
    this.mybreakpoint = this.getBreakpoint((event.target as Window).innerWidth);
    this.rowHeight = this.getRowHeight((event.target as Window).innerWidth);
  }

  private getBreakpoint(width: number): number {
    return width <= 920 ? 1 : width <= 1200 ? 2 : 3;
  }

  private getRowHeight(width: number): string {
    return width <= 289
      ? '1:2'
      : width <= 307
      ? '1:1.9'
      : width <= 325
      ? '1:1.8'
      : width <= 345
      ? '1:1.7'
      : width <= 360
      ? '1:1.6'
      : width <= 400
      ? '1:1.5'
      : width <= 460
      ? '1:1.4'
      : width <= 700
      ? '1:1.1'
      : width <= 810
      ? '1:0.8'
      : width <= 920
      ? '1:0.7'
      : width <= 1200
      ? '1:1.2'
      : '1:1.4';
  }
}
