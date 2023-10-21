import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBillingInfo } from '../../models/billingInfo';
import { CartService } from '../../services/cart.service';
import { NotificationService } from '../../services/notification.service';

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

  constructor(
    private cartService: CartService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  submitForm() {
    const billingData: IBillingInfo = {
      fullName: this.fullName,
      address: this.address,
      totalPrice: this.totalPrice,
    };

    this.notificationService.setBillingInfo(billingData);
    this.router.navigate(['/notification']);

    setTimeout(() => {
      this.cartService.clearCart();
    }, 500);

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
