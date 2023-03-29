import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../model/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((x) => {
      this.products = x.filter((x) => x.category == 'electronics');
      console.log(x);
    });
  }
}
