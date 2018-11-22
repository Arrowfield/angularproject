import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotFoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-not-found',
  templateUrl: 'not-found.html',
})
export class NotFoundPage {
  time = 5;
  timer = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter NotFoundPage');
    this.timer = setInterval(()=>{
      this.time--;
      if(this.time < 1){
        if(this.navCtrl.canGoBack()){
          this.navCtrl.pop();
        }else{
          clearInterval(this.timer);
        }
      }
    },1000)
  }
  ionViewWillLeave(){
    clearInterval(this.timer);
  }
}
