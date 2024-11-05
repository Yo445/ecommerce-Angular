import { Component } from '@angular/core';
import { StoreData } from '../../ViewModels/store-data';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from "../order/product-list/product-list.component";
import { OrderComponent } from "../order/Order master/Order.component"; // <-- Important for *ngIf and *ngFor

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductListComponent, OrderComponent], // <-- Include CommonModule in imports
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  storeInfo: StoreData;
  isShowm: boolean = true;

  constructor() {
    this.storeInfo = new StoreData('ITI', 'https://fakeimg.pl/300/', ['Giza', 'Alex', 'Aswan', 'Cairo']);
  }

  toggleimg() {
    this.isShowm = !this.isShowm;
  }
}
