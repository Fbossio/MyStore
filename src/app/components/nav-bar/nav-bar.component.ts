import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  @Output() toggle = new EventEmitter<void>();

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

  toggleSidenav() {
    this.toggle.emit();
  }

  navigateToCartOrEmptyPage() {
    if (this.totalQuantity === 0) {
      this.router.navigate(['/empty-cart']);
    } else {
      this.router.navigate(['/cart']);
    }
  }
}
