import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ProductList } from '../../common/interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList: ProductList[];
  activeTab = 'gridView';
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.productList = this.api.getProductList();

  }

}
