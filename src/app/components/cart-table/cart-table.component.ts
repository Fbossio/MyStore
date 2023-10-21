import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ICartItem } from '../../models/cartItem';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css'],
})
export class CartTableComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();
  cartItems: ICartItem[] = [];
  displayedColumns: string[] = ['name', 'price', 'quantity'];

  quantityList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  totalPrice = 0;

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.itemsCart$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(items => {
        this.cartItems = items;
      });

    this.cartService.totalPrice$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(total => {
        this.totalPrice = total;
      });

    this.cartService.totalQuantity$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(totalQuantity => {
        if (totalQuantity === 0) {
          this.router.navigate(['/empty-cart']);
        }
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onItemQuantityChange(item: ICartItem) {
    if (item.quantity === 0) {
      this.cartItems = this.cartItems.filter(i => i.name !== item.name);
    }
    this.cartService.updateItemInCart(item);
  }
}
