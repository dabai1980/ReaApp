import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
//销售
import {SaddcustomerPage} from'./pages/sales/saddcustomer/saddcustomer';
import {SaddgoodsPage} from './pages/sales/saddgoods/saddgoods';
import {SapplicationPage} from './pages/sales/sapplication/sapplication';
import {ScustomeraddPage} from './pages/sales/scustomeradd/scustomeradd';
import {ScustomereditPage} from './pages/sales/scustomeredit/scustomeredit';

import {ScustomermanagerPage} from './pages/sales/scustomermanager/scustomermanager';
import {SdeliveryinfoPage} from './pages/sales/sdeliveryinfo/sdeliveryinfo';
import {SdeliverymanagerPage} from './pages/sales/sdeliverymanager/sdeliverymanager';
import {SdeliverystreamPage} from './pages/sales/sdeliverystream/sdeliverystream';
import {SinvoicemanagerPage} from './pages/sales/sinvoicemanager/sinvoicemanager';

import {SorderdetailPage} from './pages/sales/sorderdetail/sorderdetail';
import {SordermanagerPage} from './pages/sales/sordermanager/sordermanager';
import {SpriceeditPage} from './pages/sales/spriceedit/spriceedit';
import {SpricemanagerPage} from './pages/sales/spricemanager/spricemanager';
import {SreturngoodaddPage} from './pages/sales/sreturngoodadd/sreturngoodadd';

import {SreturngoodsmanagerPage} from './pages/sales/sreturngoodsmanager/sreturngoodsmanager';
import {SsalehomePage} from './pages/sales/ssalehome/ssalehome';



@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = HomePage;

  //salehomePage=SsalehomePage;
  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
