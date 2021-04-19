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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
