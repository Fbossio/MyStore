import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../models/product';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: IProduct | null = null;
  quantityList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  display = 'product-detail';
  selectedQuantity = 1;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {
    this.product = this.productsService.getProduct();

    if (!this.product) {
      const productId = this.route.snapshot.paramMap.get('id');

      if (productId) {
        this.productsService.getProductById(productId).subscribe(res => {
          this.product = res;
          this.productsService.setProduct(res);
        });
      }
    }
  }

  ngOnInit(): void {
    this.display = this.getDisplay(window.innerWidth);
  }

  handleSize(event: Event) {
    this.display = this.getDisplay((event.target as Window).innerWidth);
  }

  private getDisplay(width: number): string {
    return width <= 870 ? 'product-detail-sm' : 'product-detail';
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
    }
  }
}
