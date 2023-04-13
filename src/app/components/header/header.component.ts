import { Component } from '@angular/core';

import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-apna-cart-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  matSidenavOpened = false;
  name = 'Brian Love';

  constructor() {}

  openMyMenu(menuTrigger: MatMenuTrigger) {
    menuTrigger.openMenu();
  }
}
