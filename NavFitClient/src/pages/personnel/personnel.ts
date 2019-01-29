import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvalPage } from '../eval/eval';

// import { useAnimation } from '@angular/core/src/animation/dsl';

/**
 * Generated class for the PersonnelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personnel',
  templateUrl: 'personnel.html',
})
export class PersonnelPage {
    // Block 1,2,3,4,6,7,9
  // User Object (First Name, Last Name, Middle Initial, Suffix, Rate, Designator, SSN, UIC, Ship/Station, Date Reported(YYMMMDD - 10NOV21))
  // userObj: any = {
  //   firstName: '',
  //   lastName: '',
  //   middleInitial: '',
  //   suffix: '',
  //   rate: '',
  //   desig: '',
  //   ssn: '',
  //   uic: '',
  //   station: '',
  //   reportDate: new Date(),
  //   // Block 5 - Enlistment Type
  //   enlistType: {
  //     active: false,
  //     fts: false,
  //     inActive: false,
  //     atAdsw: false
  //   },
  //   // Block 8 - Promotion Status object to display choices to user
  //   promotionStatus: {
  //     regular: false,
  //     frocked: false,
  //     selected: false,
  //     spot: false
  //   },
  //   // Block 10,11,12,13
  //   reportOccassion: {
  //     periodic: false,
  //     detachment: false,
  //     promotion: false,
  //     special: false
  //   },
  //   // Block 14 & 15
  //   reportPeriod: {
  //     from: new Date(),
  //     to: new Date()
  //   },
  //   // Block 16 - Used if it is a not observed report
  //   notObserved: false,
  //   // Block 17,18,19
  //   reportType: {
  //     regular: false,
  //     concurrent: false
  //   },
  //   // Block 20
  //   physical: {
  //     p: false, // pass
  //     f: false, // fail
  //     m: false, // medical waiver from entire PFA
  //     w: false, // medical waiver from one or more events
  //     b: false // authorized non-participation
  //   },
  //   // Block 21 - Billet Subcategory
  //   billetSub: {
  //     na: false,
  //     basic: false,
  //     approved: false
  //   },
  //   // Block 22,23,24,25,26,27
  //   reportingSenior: {
  //     firstName: '',
  //     lastName: '',
  //     middleInitial: '',
  //     grade: '',
  //     desig: '',
  //     title: '',
  //     uic: '',
  //     ssn: ''
  //   },
  //   // Block 28
  //   commandAchievements: '',
  //   // Block 29
  //   primaryDuty: {
  //     briefDuty: '',
  //     mainDuty: ''
  //   },
  //   // Block 30
  //   dateCounseled: new Date(),
  //   // Block 31
  //   counselor: {
  //     firstname: null,
  //     lastname: null,
  //     midlleInitial: null
  //   },
  //   // Block 32
  //   counselorSignature: '',
  //   // Block 33-39
  //   performanceScore: {
  //     profKnowledge: null,
  //     qualityWork: null,
  //     commandEO: null,
  //     militaryBearing: null,
  //     personalInitiative: null,
  //     teamwork: null,
  //     leadership: null
  //   },
  //   // Block 40
  //   traitAverage: '',
  //   // Block 41
  //   firstRec: '',
  //   secondRec: '',
  //   //Block 42
  //   raterSignature: '',
  //   raterDate: ''
  // };
  userArr: any = []
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userArr[0] = {
      firstName: 'Joe',
      lastName: 'Navy',
      middleInitial: 'S',
      suffix: '',
      rate: 'CTR',
      rank: 'E6',
      desig: 'SW',
      ssn: '123-45-6789',
      uic: '55555',
      station: 'USS Constitution',
      reportDate: new Date(),
      enlistType: {
        active: true,
        fts: false,
        inActive: false,
        atAdsw: false
      },
      // Block 20
      physical: {
        p: true, // pass
        f: false, // fail
        m: false, // medical waiver from entire PFA
        w: false, // medical waiver from one or more events
        b: false // authorized non-participation
      },
    }
    this.userArr[1] = {
      firstName: 'Jane',
      lastName: 'Sailor',
      middleInitial: 'S',
      suffix: '',
      rate: 'BM',
      rank: 'E4',
      desig: '',
      ssn: '123-45-6789',
      uic: '55555',
      station: 'USS Constitution',
      reportDate: new Date(),
      enlistType: {
        active: true,
        fts: false,
        inActive: false,
        atAdsw: false
      },
      // Block 20
      physical: {
        p: true, // pass
        f: false, // fail
        m: false, // medical waiver from entire PFA
        w: false, // medical waiver from one or more events
        b: false // authorized non-participation
      },
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonnelPage');
  }

  populateEval(user){
   this.navCtrl.push(EvalPage, {user: user});
  }

}
