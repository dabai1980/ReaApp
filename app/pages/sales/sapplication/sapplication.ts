import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';

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
  pet: string = "1";
  stock:string = "stock1";
  isAndroid: boolean = false;
  sqr: string = "销售部 张三";

  dingdan: any = {
    dingdanhao: '1234567890ABCDEF',
    kehu: '鞍山钢铁集团公司',
    xiadantime: '2016-09-01 12:30',
    lianxiren: '外人壹',
    zhiwei: '总经理',
    lianxidianhua: '13000000000',
    shangpinList: [
      {imgurl: 'img/fuwa.jpg', name: '商品1', price: 15.00, shuliang: 2},
      {imgurl: 'img/fuwa.jpg', name: '商品2', price: 25.00, shuliang: 2},
      {imgurl: 'img/fuwa.jpg', name: '商品3', price: 35.00, shuliang: 2}
    ]
  };

  employeeList: any;

  initializeEmployeeList() {
    this.employeeList = [
      {"id": "010101", "name": "张三", "deptid": '0A0A', "deptname": "销售部", "sex": "ios-woman"},
      {"id": "010102", "name": "李四", "deptid": '0A0A', "deptname": "销售部", "sex": "ios-man"},
      {"id": "010103", "name": "王五", "deptid": '0A0A', "deptname": "财务部", "sex": "ios-man"},
      {"id": "010111", "name": "赵六", "deptid": '0A0A', "deptname": "总经办", "sex": "ios-woman"},
      {"id": "010121", "name": "刘七", "deptid": '0A0A', "deptname": "财务部", "sex": "ios-man"},
      {"id": "010104", "name": "马八", "deptid": '0A0A', "deptname": "销售部", "sex": "ios-man"}
    ];
  }

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) {
  this.initializeEmployeeList();
}

  AddCustomer() {
    this.navCtrl.push(SaddcustomerPage, {})
  }

  AddGoods() {
    this.navCtrl.push(SaddgoodsPage, {})
  }

  showEmployeeRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('员工列表');
    for(var i=0;i<this.employeeList.length;i++){
      alert.addInput({
        type:'radio',
        label: this.employeeList[i].deptname + " " + this.employeeList[i].name,
        value:  this.employeeList[i].id
      });
    }
    alert.addButton('取消');
    alert.addButton({
      text: '确定',
      handler: data => {
        this.sqr = data;
        console.log(data);
      }
    });
    alert.present();
  }

}
