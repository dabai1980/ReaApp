import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {ConsumePage} from '../consume/consume';
import {LaborPage} from '../labor/labor';
import {LogsPage} from '../logs/logs';
import {PlanPage} from '../plan/plan';
import {ProcessPage} from '../process/process';
import {ProductsPage} from '../products/products';
import {ProgressPage} from '../progress/progress';

/*
  Generated class for the ProductionhomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/production/productionhome/productionhome.html',
})
export class ProductionhomePage {

  sales: string = "1";
  management:string = "management1";
  financing:string = "financing1";
  isAndroid: boolean = false;


  constructor(private navCtrl: NavController) {

  }

  ruteConsume(){
    this.navCtrl.push(ConsumePage);
  }

  ruteLabor(){
    this.navCtrl.push(LaborPage);
  }

  ruteLogs(){
    this.navCtrl.push(LogsPage);
  }

  rutePlan(){
    this.navCtrl.push(PlanPage);
  }

  ruteProcess(){
    this.navCtrl.push(ProcessPage);
  }

  ruteProducts(){
    this.navCtrl.push(ProductsPage);
  }

  ruteProgress(){
    this.navCtrl.push(ProgressPage);
  }
}
