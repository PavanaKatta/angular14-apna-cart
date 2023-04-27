import { Component } from '@angular/core';

import { MatMenuTrigger } from '@angular/material/menu';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-apna-cart-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  matSidenavOpened = false;
  cartCount = 0;

  constructor(public productService: ProductService) {}

  openMyMenu(menuTrigger: MatMenuTrigger) {
    menuTrigger.openMenu();
  }

  ngOnInit(): void {
    // this.getProducts();

    this.cartCount = this.productService.cartCount;
  }
}
