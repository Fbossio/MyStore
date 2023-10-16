import { Component, Input } from '@angular/core';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: IProduct;

  constructor() {
    this.product = {
      id: 0,
      title: '',
      price: 0,
      description: '',
      image: '',
      category: '',
    };
  }
}
