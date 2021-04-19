import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultiBoxRoutingModule } from './multi-box-routing.module';
import { BoxComponent } from './box/box.component';


@NgModule({
  declarations: [BoxComponent],
  imports: [
    CommonModule,
    MultiBoxRoutingModule
  ]
})
export class MultiBoxModule { }
