import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { ICartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private itemsCartSource = new BehaviorSubject<ICartItem[]>([]);
  public itemsCart$ = this.itemsCartSource.asObservable();
  public totalQuantity$ = this.itemsCart$.pipe(
    map((items: ICartItem[]) =>
      items.reduce((total, item) => total + item.quantity, 0)
    )
  );

  addItem(item: ICartItem): void {
    const items = this.itemsCartSource.getValue();
    const itemExistent = items.find(x => x.name === item.name);

    if (itemExistent) {
      itemExistent.quantity = item.quantity;
    } else {
      items.push(item);
    }

    this.itemsCartSource.next(items);
  }
}
