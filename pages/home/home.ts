import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
OriginalPrice: "originalprice";
SellingPrice: "sellingprice";
savings: number;
markdownrate: number;

calculateMCA1() {
  this.savings = this.OriginalPrice - this.SellingPrice;
  this.markdownrate = (this.savings / this.SellingPrice) * 100;
}
}