import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';

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
  public index:number = 1
  public article:Array<Object> = []

  @ViewChild(Slides) slides:Slides
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private http:MyHttpService,
    ) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad BokeIndexPage');
    this.http.sendRequest('/index',(res) =>{
      //console.log(res.indexOf('filed'))
      var res =  JSON.parse(   (res.slice( 0,res.indexOf('filed')) ) )
      console.log(res)

    })
  }

  slideChanged(){
    let currentIndex = this.slides.getActiveIndex()
    
    this.index = currentIndex
  }
}
