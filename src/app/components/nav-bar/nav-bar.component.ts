import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  @Output() toggle = new EventEmitter<void>();

  totalQuantity = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.totalQuantity$.subscribe(total => {
      this.totalQuantity = total;
    });
  }

  toggleSidenav() {
    this.toggle.emit();
  }
}
