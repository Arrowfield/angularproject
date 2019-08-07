import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BokeIndexPage } from './boke-index';

//import { FooterComponent } from '../../components/footer/footer'

@NgModule({
  declarations: [
    BokeIndexPage,
    //FooterComponent
  ],
  entryComponents:[
    //FooterComponent
  ],
  imports: [
    IonicPageModule.forChild(BokeIndexPage),
  ],
})
export class BokeIndexPageModule {}
