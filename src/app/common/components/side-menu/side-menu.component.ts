import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor() { }
  menuList = [
    {
     path : '',
     title: 'Div Inside Another'
    },
    {
      path : '/productList',
      title: 'Product List'
     },
     {
      path : '/timer',
      title: 'Timer'
     },
     {
      path : '/timerSubject',
      title: 'Timer With Subject'
     },
     {
      path : '/table',
      title: 'Table with sort'
     },
     {
      path : '/dynamicDiv',
      title: 'Dynamic Div'
     },
  ];

  ngOnInit(): void {
  }

}
