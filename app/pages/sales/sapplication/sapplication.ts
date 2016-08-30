import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {SaddcustomerPage} from'../saddcustomer/saddcustomer';
import {SaddgoodsPage} from '../saddgoods/saddgoods';
/*
 Generated class for the SapplicationPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/sales/sapplication/sapplication.html',
})
export class SapplicationPage {
  dingdan: any = {
    dingdanhao: '1234567890ABCDEF',
    kehu: '鞍山钢铁集团公司',
    xiadantime: '2016-09-01 12:30',
    zhiwei: '总经理',
    lianxidianhua: '13000000000',
    shangpinList: [
      {imgurl: 'img/fuwa.jpg', name: '商品1', price: 15.00, shuliang: 2},
      {imgurl: 'img/fuwa.jpg', name: '商品2', price: 25.00, shuliang: 2},
      {imgurl: 'img/fuwa.jpg', name: '商品3', price: 35.00, shuliang: 2}
    ]
  };

  constructor(private navCtrl: NavController) {

  }

  AddCustomer() {
    this.navCtrl.push(SaddcustomerPage, {})
  }

  AddGoods() {
    this.navCtrl.push(SaddgoodsPage, {})
  }

}
