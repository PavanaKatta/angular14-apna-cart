import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../../model/product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-apna-cart-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  catName: string = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let catName = params['catName'];
      this.getProducts(catName);
    });
  }

  getProducts(catName: string) {
    this.productService.getProducts().subscribe((x) => {
      this.products = x.filter((x) => x.category == catName);

      this.products.forEach((x) => {
        x.quantity = 0;
      });
      console.log(x);
    });
  }

  UpdateCount(productId: number, type: string) {
    this.products.forEach((x: any) => {
      if (x.id == productId) {
        if (type == 'I') {
          x.quantity = x.quantity + 1;
        } else {
          x.quantity = x.quantity - 1;
        }
      }
      this.productService.cartCount += x.quantity;
    });
  }
}
