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

      if (quantity > product.units) {
        quantity = product.units
      }

      const productToAdd: Product = {
        identifier: product.identifier,
        name: product.name,
        description: product.description,
        price: product.price,
        units: quantity
      }

      this.products.push(productToAdd);
    }
    else {
      productAlreadyInCart[0].units += quantity;

      if (productAlreadyInCart[0].units > product.units) {
        productAlreadyInCart[0].units = product.units
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
