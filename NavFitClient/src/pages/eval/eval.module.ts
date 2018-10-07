import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvalPage } from './eval';

@NgModule({
  declarations: [
    EvalPage,
  ],
  imports: [
    IonicPageModule.forChild(EvalPage),
  ],
})
export class EvalPageModule {}
