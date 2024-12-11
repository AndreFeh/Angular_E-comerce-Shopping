import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { AboutCompanyComponent } from './pages/about-company/about-company.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { CategoriesComponent } from './components/cards/categories/categories.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {path: '', component:HomeComponent, pathMatch:"full"},
  {path:'content/:id', component:ContentComponent, pathMatch:"prefix"},
  {path:'shopping-cart', component:ShoppingCartComponent, pathMatch:"prefix"},
  {path:'about', component:AboutCompanyComponent, pathMatch:"prefix"},
  {path: 'products', component:ProductsComponent, pathMatch:"prefix"},
  {path: 'category', component:CategoriesComponent, pathMatch:"prefix"},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
