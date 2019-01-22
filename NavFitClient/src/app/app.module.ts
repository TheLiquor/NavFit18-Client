import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { RegistrationPage } from '../pages/registration/registration';
import { AboutPage } from '../pages/about/about';
import { PersonnelPage } from '../pages/personnel/personnel';
import { EvalPage } from '../pages/eval/eval';

import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    AboutPage,
    PersonnelPage,
    EvalPage,
    RegistrationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PdfViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    AboutPage,
    PersonnelPage,
    EvalPage,
    RegistrationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
