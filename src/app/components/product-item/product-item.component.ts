import { Component, Input } from '@angular/core';
import { IProduct } from '../../models/product';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../services/products.service';
import { alert } from '../../utils/alert';

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
  quantityList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selectedQuantity = 1;

  constructor(
    private pructsService: ProductsService,
    private cartService: CartService
  ) {}

  handleProductClick() {
    this.pructsService.setProduct(this.product);
  }

  addToCart(): void {
    if (this.product) {
      const cartItem = {
        name: this.product.title,
        quantity: this.selectedQuantity,
        image: this.product.image,
        price: this.product.price,
      };

      this.cartService.addItem(cartItem);
      alert('Success', 'Item added to cart', 'success');
    }
  }
}
