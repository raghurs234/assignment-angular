import { NgModule } from '@angular/core';
import {BoxComponent} from './box/box.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: BoxComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultiBoxRoutingModule { }
