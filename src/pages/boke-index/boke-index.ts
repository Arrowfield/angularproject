import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { MyHttpService } from '../../service/myhttp.service'
/**
 * Generated class for the BokeIndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-boke-index',
  templateUrl: 'boke-index.html',
})
export class BokeIndexPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private http:MyHttpService) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad BokeIndexPage');
    this.http.sendRequest('/index',(res) =>{
      //console.log(res.indexOf('filed'))
      var res =  JSON.parse(res.slice(0,res.indexOf('filed')))
      //console.log(res)
    })
  }



}
