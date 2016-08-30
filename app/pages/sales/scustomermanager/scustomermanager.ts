import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {ScustomereditPage} from '../scustomeredit/scustomeredit';

/*
 Generated class for the ScustomermanagerPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/sales/scustomermanager/scustomermanager.html',
})
export class ScustomermanagerPage {

  private items;

  constructor(private navCtrl: NavController,
              private alertController: AlertController) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      {id: '010101', name: '客户1', phone: 123456789012, person: '张三', address: '这是客户1的地址占位', remark: "这是客户1的备注占位"},
      {id: '010102', name: '客户2', phone: 234567890121, person: '李四', address: '这是客户2的地址占位', remark: "这是客户2的备注占位"},
      {id: '010103', name: '客户3', phone: 345678901212, person: '王五', address: '这是客户3的地址占位', remark: "这是客户3的备注占位"},
      {id: '010104', name: '客户4', phone: 456789012123, person: '赵六', address: '这是客户4的地址占位', remark: "这是客户4的备注占位"},
      {id: '050607', name: '客户5', phone: 567890121234, person: '刘七', address: '这是客户5的地址占位', remark: "这是客户5的备注占位"}
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

  routeOrderDetail() {
    this.navCtrl.push(ScustomereditPage, {})
  }

  showPrompt(item) {
    let prompt = this.alertController.create({
      title: "修改客户信息",
      message: item.name,
      inputs: [
        {
          id: "id",
          placeholder: "id",
          value: item.id
        },
        {
          id: "name",
          placeholder: "名称",
          value: item.name
        },
        {
          id: "person",
          placeholder: "联系人",
          value: item.person
        },
        {
          id: "phone",
          placeholder: "联系方式",
          value: item.phone
        },
        {
          id: "address",
          placeholder: "地址",
          value: item.address
        },
        {
          id: "remark",
          placeholder: "备注",
          value: item.remark
        }
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

  showConfirm(item) {
    let confirm = this.alertController.create({
      title: '删除' + item.name,
      message: '确定要删除' + item.name + '吗?点击“确定”继续，点击“取消”放弃删除。',
      buttons: [
        {
          text: '取消',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}
