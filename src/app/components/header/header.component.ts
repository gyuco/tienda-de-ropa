import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartStoreService } from 'src/app/services/cart-store.service';
import { Product } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cart$!: Observable<Product[] | null>;

  constructor(
    private cartStore: CartStoreService
  ) { }

  ngOnInit(): void {
    this.cart$ = this.cartStore.cart$;
  }

}
