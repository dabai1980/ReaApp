import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the InquiryPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/purchase/inquiry/inquiry.html',
})
export class InquiryPage {

  pet: string = "1";
  stock:string = "stock1";
  isAndroid: boolean = false;

  constructor(private navCtrl: NavController) {

  }

}
