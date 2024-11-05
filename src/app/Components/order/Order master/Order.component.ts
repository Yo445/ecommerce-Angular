import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../../Models/icategory';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../../Models/iproduct';

@Component({
  selector: 'app-Order',
  standalone: true,
  templateUrl: './Order.component.html',
  styleUrls: ['./Order.component.css'],
  imports: [FormsModule, ProductListComponent, CommonModule],
})
export class OrderComponent {
  totalPrice: number = 0;
  prdList: IProduct[]=[];
  catList: ICategory[];
  selectCatID: number = 0;
  constructor() {
    this.catList = [
      { id: 1, name: 'laptop' },
      { id: 2, name: 'mobile' },
      { id: 3, name: 'tablets' },
    ];
  }

  buyPr(prdPrice: number, count: any) {
    this.totalPrice = +count * prdPrice;
    return this.totalPrice;
  }

  filterbyCategoryID(){
    return this.prdList.filter(p=>p.categoryID === this.selectCatID); // it will stored in variable 
  }



}
