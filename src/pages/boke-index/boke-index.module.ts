import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BokeIndexPage } from './boke-index';

@NgModule({
  declarations: [
    BokeIndexPage,
  ],
  imports: [
    IonicPageModule.forChild(BokeIndexPage),
  ],
})
export class BokeIndexPageModule {}
