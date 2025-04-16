import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Housinglocation } from '../../interface/housinglocation';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSource = new BehaviorSubject<Housinglocation[]>([]);
  cartList$ = this.cartSource.asObservable();
  private currentCart: Housinglocation[] = [];

    
  UpdateCartList(locations: Housinglocation[]) {
    this.cartSource.next(locations);
  }
  AddCartList(location: Housinglocation) {
    const exists = this.currentCart.some(item => item.id === location.id);
    if (!exists) {
      this.currentCart.push(location);
      this.cartSource.next(this.currentCart);
    }
  }
  RemoveCartList(location: Housinglocation) {
    this.currentCart = this.currentCart.filter(item => item.id !== location.id);
    this.cartSource.next(this.currentCart);
  }
  
} 