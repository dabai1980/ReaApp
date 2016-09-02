import { Component } from '@angular/core';
import { Page, NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the SorderdetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/sales/sorderdetail/sorderdetail.html',
})
export class SorderdetailPage {

  pet: string = "1";
  stock:string = "stock1";
  isAndroid: boolean = false;
  sqr: string = "销售部 张三";

  private ddid: string;
  private items: any = [
    {imgurl: 'img/fuwa.jpg',id: '123456', name: '商品1', price: 200.00, num: 3, remark: '这是商品1的简介占位'},
    {imgurl: 'img/fuwa.jpg',id: '123457', name: '商品2', price: 1120.00, num: 9, remark: '这是商品2的简介占位'},
    {imgurl: 'img/fuwa.jpg',id: '123458', name: '商品3', price: 280.00, num: 6, remark: '这是商品3的简介占位'},
    {imgurl: 'img/fuwa.jpg',id: '123459', name: '商品4', price: 2450.23, num: 15, remark: '这是商品4的简介占位'},
    {imgurl: 'img/fuwa.jpg',id: '123460', name: '商品5', price: 900, num: 30, remark: '这是商品5的简介占位'}
  ];

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

  wuliu: any = [
    {remark: '快件已经到达 鞍山 高新区 何** 正在派件 扫描时间：2016-08-18 12:04:17', dt: '2016-08-18 12:04:17'},
    {remark: '快件离开 盘锦中转 已发往 鞍山 扫描时间：2016-08-17 11:22:15', dt: '2016-08-17 11:22:15'},
    {remark: '快件已经到达 盘锦中转 上一站是 杭州中转部，扫描时间：2016-08-17 11:13:24', dt: '2016-08-17 11:13:24'},
    {remark: '快件离开 杭州留下区 已发往 盘锦中转，扫描时间：2016-08-15 16:10:24', dt: '2016-08-15 16:10:24'}
  ];

  //private item: any = this.items.filter((item)=> { return (item.id == this.ddid);});
  private item: any = {id: '123456', name: '订单订单订单1', sum: 200.00, num: 3, dt: '2016/07/23 09:30:00', c: '客户1'};
  constructor(private navCtrl: NavController,
                private params: NavParams) {
    this.ddid = params.data.ddid;
    //this.item = this.items.filter((item)=> { return (item.id == this.ddid)});
  }

}
