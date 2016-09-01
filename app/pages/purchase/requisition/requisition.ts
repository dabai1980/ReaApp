import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

/*
  Generated class for the RequisitionPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/purchase/requisition/requisition.html',
})
export class RequisitionPage {

  pet: string = "1";
  stock:string = "stock1";
  isAndroid: boolean = false;
  sqr: string = "销售部 张三";

  //
  employeeList: any;

  initializeEmployeeList() {
    this.employeeList = [
      {"id": "010101", "name":"张三", "deptid": '0A0A', "deptname": "销售部", "sex" : "ios-woman"},
      {"id": "010102", "name":"李四", "deptid": '0A0A', "deptname": "销售部", "sex" : "ios-man"},
      {"id": "010103", "name":"王五", "deptid": '0A0A', "deptname": "财务部", "sex" : "ios-man"},
      {"id": "010111", "name":"赵六", "deptid": '0A0A', "deptname": "总经办", "sex" : "ios-woman"},
      {"id": "010121", "name":"刘七", "deptid": '0A0A', "deptname": "财务部", "sex" : "ios-man"},
      {"id": "010104", "name":"马八", "deptid": '0A0A', "deptname": "销售部", "sex" : "ios-man"}
    ];
  }

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) {
    this.initializeEmployeeList();
  }

  getItems(ev: any) {
    this.initializeEmployeeList();
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.employeeList = this.employeeList.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
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
