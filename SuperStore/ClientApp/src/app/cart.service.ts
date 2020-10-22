import { Injectable } from '@angular/core';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  products: Array<Product> = new Array<Product>();

  addToCart(product: Product) {
    var productAlreadyInCart = this.products.filter(x => x.identifier == product.identifier);

    if ((productAlreadyInCart.length == 0)) {
      const productToAdd: Product = {
        identifier: product.identifier,
        name: product.name,
        description: product.description,
        price: product.price,
        stock: 1
      }

      this.products.push(productToAdd);
    }
    else {
      productAlreadyInCart[0].stock += 1;
    }
  }

  getProducts() {
    return this.products;
  }

  clearCart() {
    this.products = new Array<Product>();
    return this.products;
  }
}
