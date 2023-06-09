import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../../model/product';
import { ICategoryType } from '../../../model/categoryType';
import { ProductService } from '../../../services/product.service';
import { LookupService } from '../../../services/lookup.service';

@Component({
  selector: 'app-apna-cart-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  categoryTypes: ICategoryType[] = [];
  catName: string = '';

  constructor(
    private productService: ProductService,
    private lookupService: LookupService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let catName = params['catName'];
      this.getCategoryTypes();
      this.getProducts(catName);
    });
  }

  getProducts(catName: string) {
    this.productService.getProducts().subscribe((x) => {
      this.products =
        catName !== 'selectAll'
          ? x.filter((x) => x.category.toLowerCase() == catName.toLowerCase())
          : x;

      console.log(this.products);

      this.products.forEach((x) => {
        x.quantity = 0;
      });
      console.log(x);
    });
  }

  getCategoryTypes() {
    this.lookupService.getCategoryTypes().subscribe((x) => {
      this.categoryTypes = x;
    });
  }

  UpdateCount(productId: number, type: string) {
    this.products.forEach((x: any) => {
      if (x.id == productId) {
        if (type == 'I') {
          x.quantity = x.quantity + 1;
          this.productService.cartCount = this.productService.cartCount + 1;
        } else {
          x.quantity = x.quantity - 1;
          this.productService.cartCount = this.productService.cartCount - 1;
        }
      }
    });
  }

  navigateToProducts(id: number) {
    let routeURL: string = `product/${id}`;

    this.router.navigate([routeURL]);
  }
}
