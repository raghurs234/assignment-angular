import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductListRoutingModule
  ]
})
export class ProductListModule { }
