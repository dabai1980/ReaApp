import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {ScustomermanagerPage} from '../scustomermanager/scustomermanager';

/*
  Generated class for the ScustomereditPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/sales/scustomeredit/scustomeredit.html',
})
export class ScustomereditPage {

  constructor(private navCtrl: NavController) {

  }

  routeCustomerManager()
  {
    this.navCtrl.push(ScustomermanagerPage, {})
  }
}
