import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../../model/product';
import { ICategoryType } from '../../../model/categoryType';
import { ProductService } from '../../../services/product.service';
import { LookupService } from '../../../services/lookup.service';

@Component({
  selector: 'app-apna-cart-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProducDetailComponent implements OnInit {
  ProductInfo: any = {};

  constructor(
    private productService: ProductService,
    private lookupService: LookupService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let catName = params['id'];
      this.getProductById(catName);
    });
  }

  getProductById(prodId: number) {
    this.productService.getProducts().subscribe((x) => {
      this.ProductInfo = x.filter((x) => x.id == prodId)[0];

      console.log(this.ProductInfo);
    });
  }
}
