import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  public products: Product[];
  public client: HttpClient;
  public url: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    this.client = http;
    this.url = baseUrl;
    http.get<Product[]>(baseUrl + 'product').subscribe(result => {
      this.products = result;
    }, error => console.error(error));
  }

  public addProductToCart(id: number, quantity: number) {
    const productToAdd: Product = {
      identifier: this.products[id-1].identifier,
      name: this.products[id].name,
      description: this.products[id].description,
      price: this.products[id].price,
      stock: quantity
    }

    this.client.put<Product>(this.url + 'shoppingcart' + '/' + productToAdd.identifier, productToAdd).subscribe(error => console.error(error));
  }
}

interface Product {
    identifier: number;
    name: string;
    description: string;
    price: number;
    stock: number;
}

