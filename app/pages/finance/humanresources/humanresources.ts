import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the HumanresourcesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/finance/humanresources/humanresources.html',
})
export class HumanresourcesPage {


  sales: string = "2";
  stock:string = "stock1";
  isAndroid: boolean = false;

  dingdan: any = {
    dingdanhao: '1234567890ABCDEF',
    kehu: '鞍山钢铁集团公司',
    xiadantime: '2016-09-01 12:30',
    lianxiren: '外人壹',
    zhiwei: '总经理',
    lianxidianhua: '13000000000',
    shangpinList: [
      {imgurl: 'img/fuwa.jpg',id: '123456', name: '商品1', price: 200.00, num: 3, remark: '这是商品1的简介占位'},
      {imgurl: 'img/fuwa.jpg',id: '123457', name: '商品2', price: 1120.00, num: 9, remark: '这是商品2的简介占位'},
      {imgurl: 'img/fuwa.jpg',id: '123458', name: '商品3', price: 280.00, num: 6, remark: '这是商品3的简介占位'},
      {imgurl: 'img/fuwa.jpg',id: '123459', name: '商品4', price: 2450.23, num: 15, remark: '这是商品4的简介占位'},
      {imgurl: 'img/fuwa.jpg',id: '123460', name: '商品5', price: 900, num: 30, remark: '这是商品5的简介占位'}
    ]
  };


  constructor(private navCtrl: NavController) {

  }

}
