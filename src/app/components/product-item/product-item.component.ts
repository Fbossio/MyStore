import { Component, Input } from '@angular/core';
import { IProduct } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: IProduct = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    image: '',
    category: '',
  };

  constructor(private pructsService: ProductsService) {}

  handleProductClick() {
    this.pructsService.setProduct(this.product);
  }
}
