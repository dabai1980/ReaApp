import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
//1
import {SsalehomePage} from '../sales/ssalehome/ssalehome';
import {PurchasehomePage} from '../purchase/purchasehome/purchasehome'
import {StockhomePage} from '../stock/stockhome/stockhome'
import {FinancehomePage} from '../finance/financehome/financehome'
import {ProductionhomePage} from '../production/productionhome/productionhome'

import {TransportationhomePage} from '../transportation/transportationhome/transportationhome'
import {PosthomePage} from '../postsales/posthome/posthome'
import {DailyhomePage} from '../daily/dailyhome/dailyhome'

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  //2
  ssalehomePage=SsalehomePage;
  purchasehomePage=PurchasehomePage;
  stockhomePage=StockhomePage;
  financehomePage=FinancehomePage;
  productionhomePage=ProductionhomePage;

  transportationhomePage=TransportationhomePage;
  posthomePage=PosthomePage;
  dailyhomePage=DailyhomePage;

  time: Date;

  public name;
  constructor(public navCtrl: NavController) {
    this.name = "Andrew";

    this.time = new Date();
    setInterval(() => this.time = new Date(), 1000);

  }
}
