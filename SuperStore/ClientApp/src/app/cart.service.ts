import { Injectable } from '@angular/core';
import { Product } from './product.interface';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  products: Array<Product> = new Array<Product>();

  addToCart(product: Product) {
    var productAlreadyInCart = this.products.filter(x => x.identifier == product.identifier);

    if ((productAlreadyInCart.length == 0)) {
      this.products.push(product);
    }
    else {
      productAlreadyInCart[0].stock += 1;
    }
  }

  getItems() {
    return this.products;
  }

  clearCart() {
    this.products = new Array<Product>();
    return this.products;
  }
}
