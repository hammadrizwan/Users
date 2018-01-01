import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendingPage } from './pending';
import { Ionic2RatingModule } from "ionic2-rating";

@NgModule({
  declarations: [
    PendingPage,
  ],
  imports: [
    IonicPageModule.forChild(PendingPage),
    Ionic2RatingModule
  ],
})
export class PendingPageModule {}
