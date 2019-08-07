import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {MyHttpService} from '../../service/myhttp.service';
import {CartPage} from '../cart/cart';
import {NotFoundPage} from '../not-found/not-found';
import { LoginPage } from '../login/login';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  picList = []
  details = {}
  notFound = NotFoundPage;
  cart = CartPage;
  constructor(
    private toastCtrl:ToastController,
    private myHttp:MyHttpService,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
    console.log(this.navParams.get('id'));
    //
    var url = 'http://localhost:8090/framework/forStu/ajia_code/data/product/details.php?lid='+this.navParams.get('id');
    this.myHttp.sendRequest(url,(result)=>{
      //console.log(result);
      this.picList = result.details.picList;
      this.details = result.details;
      console.log(this.picList)
    })

  }
  addToCart(){
    //登录：http://localhost:8090/framework/forStu/ajia_code/data/user/login.php?uname=dingding&upwd=123456
    //发请求
    //显示toast
    var url = "http://localhost:8090/framework/forStu/ajia_code/data/cart/add.php?buyCount=1&lid="+this.navParams.get('id')
    this.myHttp.sendRequest(url,(result)=>{
      console.log(result);
      var msg = '';
      if(result.code == 200){
        msg = "添加成功"
      }else{
        if(result.code == 300){
          this.navCtrl.push(LoginPage)  
        }
        msg = '添加失败'
      }
      this.toastCtrl.create({
        message:msg,
        duration:1500,
      }).present()
    })
  }
}
