import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';;
import { DynamicDivComponent } from './dynamic-div/dynamic-div.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicDivComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicDivRoutingModule { }
