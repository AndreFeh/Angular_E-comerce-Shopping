import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { AboutCompanyComponent } from './pages/about-company/about-company.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { MainComponent } from './components/cards/main/main.component';
import { DestaquesComponent } from './components/cards/destaques/destaques.component';
import { MiniCardsComponent } from './components/cards/mini-cards/mini-cards.component';
import { CategoriesComponent } from './components/cards/categories/categories.component';
import { ElementsComponent } from './components/shopping-cart/elements/elements.component';
import { ResultedComponent } from './components/shopping-cart/resulted/resulted.component';
import { ProductsComponent } from './pages/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    ShoppingCartComponent,
    AboutCompanyComponent,
    MenuBarComponent,
    FooterBarComponent,
    MainComponent,
    DestaquesComponent,
    MiniCardsComponent,
    CategoriesComponent,
    ElementsComponent,
    ResultedComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
