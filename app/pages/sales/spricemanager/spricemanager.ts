import { Component } from '@angular/core';
import { NavController, NavParams, AlertController  } from 'ionic-angular';
import {SpriceeditPage} from '../spriceedit/spriceedit';

/*
  Generated class for the SpricemanagerPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/sales/spricemanager/spricemanager.html',
})
export class SpricemanagerPage {

  private items;

  constructor(private navCtrl: NavController,
                private alertController: AlertController) {
    this.initializeItems();
  }

  initializeItems(){
    this.items = [
      {id: '123456', name: '商品1', price: 200.00, num: 3, remark: '这是商品1的简介占位'},
      {id: '123457', name: '商品2', price: 1120.00, num: 9, remark: '这是商品2的简介占位'},
      {id: '123458', name: '商品3', price: 280.00, num: 6, remark: '这是商品3的简介占位'},
      {id: '123459', name: '商品4', price: 2450.23, num: 15, remark: '这是商品4的简介占位'},
      {id: '123460', name: '商品5', price: 900, num: 30, remark: '这是商品5的简介占位'}
    ];
  }

  getItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  routeOrderDetail(ddid)
  {
    this.navCtrl.push(SpriceeditPage, {ddid: ddid})
  }

  showPrompt(item) {
    let prompt = this.alertController.create({
      title: item.name,
      message: "原价："+item.price,
      inputs: [
        {
          name: 'price',
          placeholder: '新价格'
        },
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}
