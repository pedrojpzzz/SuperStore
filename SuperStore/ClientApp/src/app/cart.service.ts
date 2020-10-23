import { Injectable } from '@angular/core';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  products: Array<Product> = new Array<Product>();

  addToCart(product: Product, quantity: number) {
    var productAlreadyInCart = this.products.filter(x => x.identifier == product.identifier);

    if ((productAlreadyInCart.length == 0)) {

      if (quantity > product.stock) {
        quantity = product.stock
      }

      const productToAdd: Product = {
        identifier: product.identifier,
        name: product.name,
        description: product.description,
        price: product.price,
        stock: quantity
      }

      this.products.push(productToAdd);
    }
    else {
      productAlreadyInCart[0].stock += quantity;

      if (productAlreadyInCart[0].stock > product.stock) {
        productAlreadyInCart[0].stock = product.stock
      }
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
