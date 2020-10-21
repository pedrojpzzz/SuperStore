import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shopping-cart-component',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent {
  public products: Product[];
  public client: HttpClient;
  public url: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    this.client = http;
    this.url = baseUrl;
    http.get<Product[]>(baseUrl + 'shoppingcart').subscribe(result => {
      this.products = result;
    }, error => console.error(error));
  }
}

interface Product {
  identifier: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}
