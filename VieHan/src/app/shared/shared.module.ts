import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerTopComponent } from './banner-top/banner-top.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BannerTopComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
