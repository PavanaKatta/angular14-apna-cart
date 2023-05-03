import { Component } from '@angular/core';

import { MatMenuTrigger } from '@angular/material/menu';

import { ProductService } from '../../services/product.service';
import { LookupService } from '../../services/lookup.service';

import { ICategoryType } from '../../model/categoryType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apna-cart-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  matSidenavOpened = false;
  cartCount: number = 0;
  categories: ICategoryType[] = [];

  constructor(
    public productService: ProductService,
    private lookupService: LookupService,
    private router: Router
  ) {}

  openMyMenu(menuTrigger: MatMenuTrigger) {
    menuTrigger.openMenu();
  }

  ngOnInit(): void {
    // this.getProducts();

    this.lookupService.getCategoryTypes().subscribe((x) => {
      this.categories = x;
      let selectAllProduct: ICategoryType = {
        id: -1,
        name: 'selectAll',
        displayName: 'Select All',
      };
      this.categories.unshift(selectAllProduct);
    });

    this.cartCount = this.productService.cartCount;
  }

  navigateToProducts(productName: string) {
    let routeURL: string = `productList/${productName}`;

    this.router.navigate([routeURL]);
  }
}
