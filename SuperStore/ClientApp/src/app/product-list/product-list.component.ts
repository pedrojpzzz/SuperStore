import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  public products: Product[];


  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Product[]>(baseUrl + 'product').subscribe(result => {
      this.products = result;
    }, error => console.error(error));
  }
}

interface Product {
    identifier: bigint;
    name: string;
    description: string;
    price: number;
    stock: number;
}

