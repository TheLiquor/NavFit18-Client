import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EvalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eval',
  templateUrl: 'eval.html',
})
export class EvalPage {
  // Block 1,2,3,4,6,7,9
  // User Object (First Name, Last Name, Middle Initial, Suffix, Rate, Designator, SSN, UIC, Ship/Station, Date Reported(YYMMMDD - 10NOV21))
  userObj: any = {
    firstName: '',
    lastName: '',
    middleInitial: '',
    suffix: '',
    rate: '',
    desig: '',
    ssn: '',
    uic: '',
    station: '',
    reportDate: new Date()
  };

  // Block 5 - Enlistment Type
  enlistType: any = {
    active: false,
    fts: false,
    inActive: false,
    atAdsw: false
  }

  // Block 8 - Promotion Status object to display choices to user
  promotionStatus: any = {
    regular: false,
    frocked: false,
    selected: false,
    spot: false
  }

  // Block 10,11,12,13
  reportOccassion: any = {
    periodic: false,
    detachment: false,
    promotion: false,
    special: false
  }

  // Block 14 & 15
  reportPeriod: any = {
    from: new Date(),
    to: new Date()
  }

  // Block 16 - Used if it is a not observed report
  notObserved: any = false;

  // Block 17,18,19
  reportType: any = {
    regular: false,
    concurrent: false
  }

  // Block 20
  physical: any = {
    p: false, // pass
    f: false, // fail
    m: false, // medical waiver from entire PFA
    w: false, // medical waiver from one or more events
    b: false // authorized non-participation
  }

  // Block 21 - Billet Subcategory
  billetSub: any = {
    na: false,
    basic: false,
    approved: false
  }

  // Block 22,23,24,25,26,27
  reportingSenior: any = {
    firstName: '',
    lastName: '',
    middleInitial: '',
    grade: '',
    desig: '',
    title: '',
    uic: '',
    ssn: ''
  }

  // Block 28
  commandAchievements: any;

  // Block 29
  primaryDutie: any = {
    briefDuty: '',
    mainDuty: ''
  }

  // Block 30
  // dateCounseled




  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EvalPage');
  }

}
