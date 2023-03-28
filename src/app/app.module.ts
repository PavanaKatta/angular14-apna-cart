import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Materail
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareButtonsModule,
    ShareIconsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
