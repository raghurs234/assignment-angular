import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./multi-box/multi-box.module').then(m => m.MultiBoxModule)
  },
  {
    path: 'productList',
    loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListModule)
  },
  {
    path: 'timer',
    loadChildren: () => import('./timer/timer.module').then(m => m.TimerModule)
  },
  {
    path: 'timerSubject',
    loadChildren: () => import('./timer-subject/timer.module').then(m => m.TimerSubjectModule)
  },
  {
    path: 'table',
    loadChildren: () => import('./custom-table/table.module').then(m => m.TableModule)
  },
  {
    path: 'dynamicDiv',
    loadChildren: () => import('./dynamic-div/dynamic-div.module').then(m => m.DynamicDivModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
