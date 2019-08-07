import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MyHttpService} from '../../service/myhttp.service';
import{DetailPage} from '../detail/detail'

/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  carouselItems = []
  newArrivalItems = []
  recommendedItems = []
  detail = DetailPage;
  constructor(
    private myHttp:MyHttpService,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad IndexPage');
    //发起网络请求
    //var url = "http://localhost:8090/framework/forStu/ajia_code/data/product/index.php"
    // this.myHttp.sendRequest(url,(result)=>{
    //   this.carouselItems = result.carouselItems;
    //   this.newArrivalItems = result.newArrivalItems;
    //   this.recommendedItems = result.recommendedItems;
    //   console.log(result);
    // })
  }

}
