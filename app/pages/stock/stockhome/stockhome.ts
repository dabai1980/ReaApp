import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {WarehousingsPage} from '../warehousings/warehousings';
import {AllocationPage} from '../allocation/allocation';
import {CheckPage} from '../check/check';
import {InspectionsPage} from '../inspections/inspections';

/*
  Generated class for the StockhomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/stock/stockhome/stockhome.html',
})
export class StockhomePage {
  pet: string = "1";
  stock:string = "stock1";
  isAndroid: boolean = false;

  constructor(private navCtrl: NavController) {

  }

  AddWarehousings() {
    this.navCtrl.push(WarehousingsPage);
  }

  AddAllocation(){
    this.navCtrl.push(AllocationPage);
  }

  AddCheck(){
    this.navCtrl.push(CheckPage);
  }

  AddInspections(){
    this.navCtrl.push(InspectionsPage)
  }

}
