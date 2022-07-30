import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-service.service';

@Injectable({
  providedIn: 'root'
})
export class CartStoreService {

    private cart = new BehaviorSubject<Product[] | null>(null);
    cart$ = this.cart.asObservable();

  constructor(

  ) { 

  }

  addCart(product: Product) {
    const currentCart = this.cart.value ? this.cart.value : [];
    currentCart.push(product);
    this.cart.next(currentCart);
  }

}
