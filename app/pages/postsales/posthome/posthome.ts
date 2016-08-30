import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {ComplaintsPage} from '../complaints/complaints';
import {FuwuPage} from '../fuwu/fuwu';
import {HomeservicePage} from '../homeservice/homeservice';
import {InstallationPage} from '../installation/installation';

/*
  Generated class for the PosthomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/postsales/posthome/posthome.html',
})
export class PosthomePage {

  sales: string = "1";
  management:string = "management1";
  financing:string = "financing1";
  isAndroid: boolean = false;

  constructor(private navCtrl: NavController) {

  }

  ruteComplaints(){
    this.navCtrl.push(ComplaintsPage);
  }

  ruteFuwu(){
    this.navCtrl.push(FuwuPage);
  }

  ruteHomeservice(){
    this.navCtrl.push(HomeservicePage);
  }

  ruteInstallation(){
    this.navCtrl.push(InstallationPage);
  }

}
