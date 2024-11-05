import { Component } from '@angular/core';
import { IProduct } from '../../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../../Models/icategory';
import { LightBoxDirective } from '../../../Directives/light-box.directive';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LightBoxDirective,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  PrdctList:IProduct[];
  constructor()
  {
    this.PrdctList=[
      {id:100,name:'lenoveThinkpad labtop',quantity:1,price:11000,imgUrl:'https://fakeimg.pl/250x100/',categoryID:1},
      {id:200,name:'Apple iphone',quantity:1,price:10000,imgUrl:'https://fakeimg.pl/250x100/',categoryID:2},
      {id:300,name:'lenove tablet',quantity:2,price:22000,imgUrl:'https://fakeimg.pl/250x100/',categoryID:3},
      {id:400,name:'Dell tablet',quantity:9,price:21000,imgUrl:'https://fakeimg.pl/250x100/',categoryID:3},
      {id:500,name:'Samsung ',quantity:5,price:20000,imgUrl:'https://fakeimg.pl/250x100/',categoryID:2},
      {id:600,name:'HP labtop',quantity:7,price:45000,imgUrl:'https://fakeimg.pl/250x100/',categoryID:1},
]}

}
