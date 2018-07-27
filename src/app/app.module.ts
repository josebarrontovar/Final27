import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { ItemscontainerComponent } from './itemscontainer/itemscontainer.component';
import { FooterComponent } from './footer/footer.component';
import { Page1Component } from './page1/page1.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceComponent } from './service/service.component';
import { Page2Component } from './page2/page2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    SubmenuComponent,
    ItemscontainerComponent,
    FooterComponent,
    Page1Component,
    ServiceComponent,
    Page2Component
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
