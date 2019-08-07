import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {LoadingController,ToastController} from 'ionic-angular'
//装饰器
@Injectable()//不需要参数
export class MyHttpService{
  constructor(
    private toastCtrl:ToastController,
    private myHttp:HttpClient,
    private loadingCtrl:LoadingController){}
  showToast(msg){
    this.toastCtrl.create({
      message:msg,
      duration:1500
    }).present()
  }
  sendRequest(url,func){
    var baseUrl = "http://admin.plus.com"
    //实现一个loading
    var myLoading = this.loadingCtrl.create({
      content:"正在加载..."
    })
    myLoading.present()
    //发请求
    this.myHttp.get(baseUrl+url,{withCredentials:true}).subscribe((result)=>{
      //请求完之后关闭loading
      myLoading.dismiss()
      //执行第二个参数指定的方法
      func(result)
    })
  }
}
