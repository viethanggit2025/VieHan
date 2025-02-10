import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    HomeComponent,
    AdminComponent,
    CheckoutComponent,
    CartComponent,
    ProductDetailComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
