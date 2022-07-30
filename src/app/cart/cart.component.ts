import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartStoreService } from '../services/cart-store.service';
import { Product } from '../services/product-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart$!: Observable<Product[] | null>;

  constructor(
    private cartStore: CartStoreService
  ) { }

  ngOnInit(): void {
    this.cart$ = this.cartStore.cart$;
  }

}
