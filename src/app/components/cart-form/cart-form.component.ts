import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css'],
})
export class CartFormComponent implements OnInit {
  fullName = '';
  address = '';
  creditCard = '';
  totalPrice = 0;

  constructor(private cartService: CartService) {}

  submitForm() {
    const formData = {
      fullName: this.fullName,
      address: this.address,
      totalPrice: this.totalPrice,
    };
    console.log(formData);
    this.fullName = '';
    this.address = '';
    this.creditCard = '';
  }

  ngOnInit(): void {
    this.cartService.totalPrice$.subscribe(data => {
      this.totalPrice = data;
    });
  }
}
