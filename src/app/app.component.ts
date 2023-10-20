import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'myStore';

  totalQuantity = 0;
  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.totalQuantity$.subscribe(total => {
      this.totalQuantity = total;
    });
  }

  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  onToggleSidenav() {
    this.sidenav.toggle();
  }

  navigateToCartOrEmptyPage() {
    if (this.totalQuantity === 0) {
      this.router.navigate(['/empty-cart']);
    } else {
      this.router.navigate(['/cart']);
    }
  }
}
