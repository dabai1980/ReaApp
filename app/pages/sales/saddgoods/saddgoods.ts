import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {SapplicationPage} from '../sapplication/sapplication';
/*
  Generated class for the SaddgoodsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/sales/saddgoods/saddgoods.html',
})
export class SaddgoodsPage {
  goodsList: any = [
    {name: '商品12', value: 'A'},
    {name: '商品13', value: 'B'},
    {name: '商品14', value: 'C'},
    {name: '商品15', value: 'D'},
    {name: '商品16', value: 'E'},
    {name: '商品17', value: 'F'}
  ];
  constructor(private navCtrl: NavController) {

  }

  goback() {
    this.navCtrl.push(SapplicationPage);
  }

}
