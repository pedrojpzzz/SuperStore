import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})

export class CartComponent implements OnInit {
  products: Array<Product>;

  constructor(private cartService: CartService) { }
 
  ngOnInit() {
    this.products = this.cartService.getProducts();
  }
}
