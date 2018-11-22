import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MyHttpService} from '../../app/utility/service/myhttp.Service';
import {LoginPage} from '../login/login';
import { OrderConfirmPage } from '../order-confirm/order-confirm'

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  list = []
  i = 0;
  isAllSelected = false;
  constructor(
    private myService:MyHttpService,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter CartPage');
    var url = "http://localhost:8090/framework/forStu/ajia_code/data/cart/list.php"
    this.myService.sendRequest(url,(result)=>{
     console.log(result);
    if(result.code == 200){
        this.list = result.data
        this.list.forEach((val,i,arr)=>{
          arr[i].isSelected = false;
        })
        console.log(this.list)
    }else{
        this.navCtrl.push(LoginPage)
    }
    })
  }
  modifyCount(index,isAdd){
    if(isAdd){
      this.list[index].count++
    }else{
      if(this.list[index].count == 1){
        return;
      }
      this.list[index].count--
    }
  }
  //生命周期：执行一次的生命周期；只要一进入该界面就执行该方法
  jump(){
    this.navCtrl.push(OrderConfirmPage)
  }
  selectAll(){
    //将list中的每个对象
    this.list.forEach((val,i,arr)=>{//箭头函数保留this
      val.isSelected = this.isAllSelected;
    })
    this.calcAll()
  }
  handleSelect(){
    var result = true;
    this.list.forEach((val,i,arr)=>{
      result = val.isSelected && result;
    })
    this.isAllSelected = result;
    this.calcAll();
  }
  //计算商品价格的总和
  calcAll(){
    var totalPrice = 0;
    for(var i=0;i<this.list.length;i++){
      var product = this.list[i]
      if(product.isSelected){
        totalPrice += (product.price * product.count);
      }
    }
    //console.log(this.i++);
    return totalPrice
  }
}
