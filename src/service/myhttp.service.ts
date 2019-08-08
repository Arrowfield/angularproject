import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {LoadingController,ToastController} from 'ionic-angular'
//装饰器
@Injectable()//不需要参数
export class MyHttpService{

  private baseUrl:string = "http://127.0.0.1:7001/api"
  constructor(
    private toastCtrl:ToastController,//既声明又赋值
    private myHttp:HttpClient,
    private loadingCtrl:LoadingController){}

  showToast(msg){
    this.toastCtrl.create({
      message:msg,
      duration:1500
    }).present()
  }

  sendRequest(url,func){

    //实现一个loading
    // var myLoading = this.loadingCtrl.create({
    //   content:"正在加载..."
    // })

    //myLoading.present()
    //发请求
    this.myHttp.get(this.baseUrl + url,{responseType:"text",withCredentials:false}).subscribe((result)=>{
      //请求完之后关闭loading
      //myLoading.dismiss()
      //执行第二个参数指定的方法
      func(result)
    })
  }

}

