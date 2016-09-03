import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CHART_DIRECTIVES } from 'angular2-highcharts';

/*
  Generated class for the ReportPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  directives: [CHART_DIRECTIVES],
  styles: ['chart { display: block;}'],
  //template: '<chart [options]="options"></chart>',
  templateUrl: 'build/pages/finance/report/report.html',
  //directives: [CHART_DIRECTIVES]
})
export class ReportPage {
  options: Object;

  constructor(private navCtrl: NavController) {
    this.options = {
      title : { text : 'simple chart' },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2],
      }]
    };


  }

}
