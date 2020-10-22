import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  public products: Product[];
  public client: HttpClient;
  public url: string;

  constructor(
    http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private cartService: CartService) {

    this.client = http;
    this.url = baseUrl;
    http.get<Product[]>(baseUrl + 'productlist').subscribe(result => {
      this.products = result;
    }, error => console.error(error));
  }

  addToCart(product) {
    this.cartService.addToCart(product);
  }

  public addProductToCart(id: number, quantity: number) {
    var index: number;
    index = id - 1;
    const productToAdd: Product = {
      identifier: this.products[index].identifier,
      name: this.products[index].name,
      description: this.products[index].description,
      price: this.products[index].price,
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
