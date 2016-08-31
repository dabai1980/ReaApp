import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ReturnPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/purchase/return/return.html',
})
export class ReturnPage {

  pet: string = "1";
  stock:string = "stock1";
  isAndroid: boolean = false;

  constructor(private navCtrl: NavController) {

  }

}
