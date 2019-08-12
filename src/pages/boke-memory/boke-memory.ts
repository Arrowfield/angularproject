import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyHttpService } from '../../service/myhttp.service'
/**
 * Generated class for the BokeMemoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-boke-memory',
  templateUrl: 'boke-memory.html',
})
export class BokeMemoryPage {
  public article:any
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: MyHttpService) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad BokeMemoryPage');
    this.http.sendRequest('/index',(res) =>{
      this.article = res.res
    })
  }

}
