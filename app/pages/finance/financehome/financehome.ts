import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {AftersalePage} from '../aftersale/aftersale'; //销售业务
import {FinancingPage} from '../financing/financing'; //筹资业务
import {HumanresourcesPage} from '../humanresources/humanresources'; //人力资源
import {InvestmentPage} from '../investment/investment'; //投资业务
import {ManagementPage} from '../management/management'; //管理业务
import {MaterialPage} from '../material/material'; //实物管理
import {NonoperatingPage} from '../nonoperating/nonoperating'; //营业外业务
import {ProductionPage} from '../production/production'; //生产转换
import {PurcchasePage} from '../purcchase/purcchase'; //采购付款
import {ReceiptpaymentPage} from '../receiptpayment/receiptpayment'; //其它收付
import {ReportPage} from '../report/report'; //财务报表


/*
  Generated class for the FinancehomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/finance/financehome/financehome.html',
})
export class FinancehomePage {

  sales: string = "1";
  management:string = "management1";
  financing:string = "financing1";
  isAndroid: boolean = false;



  constructor(private navCtrl: NavController) {

  }

  ruteAftersalePage()
  {
    this.navCtrl.push(AftersalePage,{});
  }

  ruteFinancingPage(){
    this.navCtrl.push(FinancingPage, {});
  }

  ruteHumanresourcesPage(){
    this.navCtrl.push(HumanresourcesPage, {});
  }

  ruteInvestmentPage(){
    this.navCtrl.push(InvestmentPage, {});
  }

  ruteManagementPage(){
    this.navCtrl.push(ManagementPage, {});
  }

  ruteMaterialPage(){
    this.navCtrl.push(MaterialPage, {});
  }

  ruteNonoperatingPage(){
    this.navCtrl.push(NonoperatingPage, {});
  }

  ruteProductionPage(){
    this.navCtrl.push(ProductionPage, {});
  }

  rutePurcchasePage(){
    this.navCtrl.push(PurcchasePage, {});
  }

  ruteReceiptpaymentPage(){
    this.navCtrl.push(ReceiptpaymentPage, {});
  }

  ruteReportPage(){
    this.navCtrl.push(ReportPage, {});
  }

}
