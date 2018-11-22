import { Component } from '@angular/core';
import { ModalController,IonicPage, NavController, NavParams } from 'ionic-angular';
import {MyHttpService} from '../../app/utility/service/myhttp.Service';
import{PayPage} from '../pay/pay';

/**
 * Generated class for the OrderConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-confirm',
  templateUrl: 'order-confirm.html',
})
export class OrderConfirmPage {
  list = []
  constructor(
    private modalCtrl:ModalController,
    private myService:MyHttpService,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderConfirmPage');
    var url = "http://localhost:8090/framework/forStu/ajia_code/data/cart/list.php"
    this.myService.sendRequest(url,(result)=>{
      console.log(result);
      this.list = result.data
    })
  }
  //显示自定义模态窗
  showModal(){
    var myModal = this.modalCtrl.create(PayPage)
    myModal.present();
    myModal.onDidDismiss((result)=>{
      console.log(result);
      if(result){
        //跳转到首页
        this.navCtrl.parent.select(0);
      }
    })
  }
}
