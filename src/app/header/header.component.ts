import { Component } from '@angular/core';

@Component({
  selector: 'app-apna-cart-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  matSidenavOpened = false;
  name = 'Brian Love';

  toggleMatSidenav(): void {
    this.matSidenavOpened = !this.matSidenavOpened;
  }
}
