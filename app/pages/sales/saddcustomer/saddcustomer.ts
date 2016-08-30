import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {SapplicationPage} from '../sapplication/sapplication';
/*
  Generated class for the SaddcustomerPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/sales/saddcustomer/saddcustomer.html',
})
export class SaddcustomerPage {

  customerList: any = [
    {name: '鞍山钢铁公司', value: 'A'},
    {name: '小米科技', value: 'B'},
    {name: '华为通讯', value: 'C'},
    {name: '客户3', value: 'D'},
    {name: '客户4', value: 'E'},
    {name: '客户5', value: 'F'}
  ];

  constructor(private navCtrl: NavController) {

  }

  goback() {
    this.navCtrl.push(SapplicationPage);
  }

}
