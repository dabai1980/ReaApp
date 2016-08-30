import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the SdeliveryinfoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/sales/sdeliveryinfo/sdeliveryinfo.html',
})
export class SdeliveryinfoPage {
  item: any = {id: '123456', name: '订单订单订单1', sum: 200.00, num: 3, dt: '2016/07/23 09:30:00', c: '客户1', dstate:'已发货', ddt: '2016/07/26 04:30:00',
  wuliudanhao: '2394845jd2983u', chengjiewuliu: '顺丰快递'};

  items: any = [
    {remark: '快件已经到达 鞍山 高新区 何** 正在派件 扫描时间：2016-08-18 12:04:17', dt: '2016-08-18 12:04:17'},
    {remark: '快件离开 盘锦中转 已发往 鞍山 扫描时间：2016-08-17 11:22:15', dt: '2016-08-17 11:22:15'},
    {remark: '快件已经到达 盘锦中转 上一站是 杭州中转部，扫描时间：2016-08-17 11:13:24', dt: '2016-08-17 11:13:24'},
    {remark: '快件离开 杭州留下区 已发往 盘锦中转，扫描时间：2016-08-15 16:10:24', dt: '2016-08-15 16:10:24'}
  ];

  constructor(private navCtrl: NavController) {

  }

}
