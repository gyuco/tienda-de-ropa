import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartStoreService } from '../services/cart-store.service';
import { Product, ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$!: Observable<Product[]>;

  constructor(
    private productsSrv: ProductServiceService,
    private cartStore: CartStoreService 
  ) { }

  ngOnInit(): void {
    this.products$ = this.productsSrv.getAll();
  }

  addCart(product: Product) {
    this.cartStore.addCart(product);
  }

}
