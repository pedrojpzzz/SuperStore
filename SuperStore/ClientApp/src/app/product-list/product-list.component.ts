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
  public quantities: Array<number>;

  constructor(
    http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private cartService: CartService) {

    this.quantities = new Array<number>();

    http.get<Product[]>(baseUrl + 'productlist').subscribe(result => {
      this.products = result;
      this.initQuantities();
    }, error => console.error(error));
  }

  initQuantities() {
    this.products.map(x => { this.quantities[x.identifier] = 1 })
  }

  addToCart(product: Product, quantity: number) {
    this.cartService.addToCart(product, quantity);
  }
}
