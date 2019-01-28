import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import { AboutPage } from '../about/about';
import { PersonnelPage } from '../personnel/personnel';
import { EvalPage } from '../eval/eval';
// import { HomePage } from '../home/home';
// import { RegistrationPage } from '../registration/registration';
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  // tab1Root = HomePage;
  tab1Root = PersonnelPage;
  tab2Root = EvalPage;
  // tab4Root = AboutPage;
  // tab5Root = RegistrationPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
