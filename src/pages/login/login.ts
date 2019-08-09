import{MyHttpService} from '../../service/myhttp.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  myName = ""
  myPwd = ""
  constructor(
    private myService: MyHttpService,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    //console.log(this.myHttp);
  }
  
  handleClick(){
    var args = "uname="+this.myName+"&upwd="+this.myPwd
    var url = "http://localhost:8090/framework/forStu/ajia_code/data/user/login.php?"+args;
    this.myService.sendRequest(url,(result)=>{
      console.log(result);
      if(result.code == 200){
        this.navCtrl.pop()
      }else{
        //this.myService.showToast('登录失败')
      }
    })
  }
}
