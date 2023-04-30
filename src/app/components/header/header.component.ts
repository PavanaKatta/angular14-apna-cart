import { Component } from '@angular/core';

import { MatMenuTrigger } from '@angular/material/menu';

import { ProductService } from '../../services/product.service';
import { LookupService } from '../../services/lookup.service';

import { ICategoryType } from '../../model/categoryType';

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
    private lookupService: LookupService
  ) {}

  openMyMenu(menuTrigger: MatMenuTrigger) {
    menuTrigger.openMenu();
  }

  ngOnInit(): void {
    // this.getProducts();

    this.cartCount = this.productService.cartCount;
  }
}
