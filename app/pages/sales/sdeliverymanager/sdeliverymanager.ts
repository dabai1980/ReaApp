import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SdeliveryinfoPage} from '../sdeliveryinfo/sdeliveryinfo';

/*
  Generated class for the SdeliverymanagerPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/sales/sdeliverymanager/sdeliverymanager.html',
})
export class SdeliverymanagerPage {
  items;

  constructor(private navCtrl: NavController) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      {id: '123456', name: '订单订单订单1', sum: 200.00, num: 3, dt: '2016/07/23 09:30:00', c: '客户1'},
      {id: '123457', name: '订单订单订单2', sum: 1120.00, num: 9, dt: '2016/07/22 09:30:00', c: '客户2'},
      {id: '123458', name: '订单订单订单3', sum: 280.00, num: 6, dt: '2016/07/12 09:30:00', c: '客户4'},
      {id: '123459', name: '订单订单订单4', sum: 2450.23, num: 15, dt: '2016/07/03 09:30:00', c: '客户5'},
      {id: '123460', name: '订单订单订单5', sum: 900, num: 30, dt: '2016/05/23 09:30:00', c: '客户9'}
    ];
  }

  getItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.id.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  routeOrderDetail(ddid) {
    this.navCtrl.push(SdeliveryinfoPage, {ddid: ddid});
  }
}
