import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {SapplicationPage} from '../sapplication/sapplication';
import {SordermanagerPage} from '../sordermanager/sordermanager';
import {SdeliverymanagerPage} from '../sdeliverymanager/sdeliverymanager';
import {SreturngoodsmanagerPage} from '../sreturngoodsmanager/sreturngoodsmanager';
import {SpricemanagerPage} from '../spricemanager/spricemanager';
import {ScustomermanagerPage} from '../scustomermanager/scustomermanager';
import {SinvoicemanagerPage} from '../sinvoicemanager/sinvoicemanager';

/*
  Generated class for the SsalehomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/sales/ssalehome/ssalehome.html',
})
export class SsalehomePage {
  userID : string = "TANG";
  postName : string ="销售经理";


  constructor(private navCtrl: NavController) {

  }

  pushPage(url) {
    switch (url)
    {
      case "A":
        this.navCtrl.push(SapplicationPage, { });
        break;
      case "B":
        this.navCtrl.push(SordermanagerPage, { });
        break;
      case "C":
        this.navCtrl.push(SdeliverymanagerPage, { });
        break;
      case "D":
        this.navCtrl.push(SreturngoodsmanagerPage, { });
        break;
      case "E":
        this.navCtrl.push(SinvoicemanagerPage, { });
        break;
      case "F":
        this.navCtrl.push(SpricemanagerPage, { });
        break;
      case "G":
        this.navCtrl.push(ScustomermanagerPage, { });
        break;
      default:
        break;
    }

  }

}
