import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'myStore';

  totalQuantity = 0;
  constructor(private cartService: CartService) {}

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
}
