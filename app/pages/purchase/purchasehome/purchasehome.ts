import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {RequisitionPage} from "../requisition/requisition";
import {RequisitionApprovePage} from "../requisitionApprove/requisitionApprove";
import {InquiryPage} from "../inquiry/inquiry";
import {OrdersPage} from "../orders/orders";
import {InvoicesPage} from "../invoices/invoices";
import {InspectionPage} from "../inspection/inspection";
import {WarehousingPage} from "../warehousing/warehousing";
import {ReturnPage} from "../return/return";

/*
  Generated class for the PurchasehomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/purchase/purchasehome/purchasehome.html',
})
export class PurchasehomePage {
  pet: string = "1";
  stock:string = "stock1";
  isAndroid: boolean = false;

  constructor(private navCtrl: NavController) {

  }

  AddRequistion() {
    this.navCtrl.push(RequisitionPage,{});
  }

  AddRequisitionApprove()
  {
    this.navCtrl.push(RequisitionApprovePage, {})
  }

  AddInquiry(){
    this.navCtrl.push(InquiryPage, {});
  }

  AddOrders(){
    this.navCtrl.push(OrdersPage, {});
  }

  AddInvoices(){
    this.navCtrl.push(InvoicesPage, {});
  }

  AddInspection(){
    this.navCtrl.push(InspectionPage, {});
  }

  AddWarehousing(){
    this.navCtrl.push(WarehousingPage, {});
  }

  AddReturn(){
    this.navCtrl.push(ReturnPage, {});
  }

}
