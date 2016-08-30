import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {PackinglistPage} from '../packinglist/packinglist';
import {ReceivingnotePage} from '../receivingnote/receivingnote';
import {ShippingnotePage} from '../shippingnote/shippingnote';
import {StrikePage} from '../strike/strike';
import {TrailPage} from '../trail/trail';
import {TransportlistPage} from '../transportlist/transportlist';

/*
  Generated class for the TransportationhomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/transportation/transportationhome/transportationhome.html',
})
export class TransportationhomePage {

  sales: string = "1";

  isAndroid: boolean = false;

  constructor(private navCtrl: NavController) {

  }

  rutePackinglist(){
    this.navCtrl.push(PackinglistPage);
  }

  ruteReceivingnete(){
    this.navCtrl.push(ReceivingnotePage);
  }

  ruteShippingnete(){
    this.navCtrl.push(ShippingnotePage);
  }

  ruteStrike(){
    this.navCtrl.push(StrikePage);
  }

  ruteTrail(){
    this.navCtrl.push(TrailPage);
  }

  ruteTransportlist(){
    this.navCtrl.push(TransportlistPage);
  }

}
