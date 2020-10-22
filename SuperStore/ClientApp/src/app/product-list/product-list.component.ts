import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';
import { Product } from '../product.interface';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  public products: Product[];

  constructor(
    http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private cartService: CartService) {

    http.get<Product[]>(baseUrl + 'productlist').subscribe(result => {
      this.products = result;
    }, error => console.error(error));
  }

  addToCart(product) {
    this.cartService.addToCart(product);
  }
}
