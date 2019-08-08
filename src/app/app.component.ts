//根组件
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';

//import{CartPage} from '../pages/cart/cart'
//import{DetailPage} from '../pages/detail/detail'
//import{IndexPage} from '../pages/index/index'
//import{LoginPage} from '../pages/login/login'
//import{NotFoundPage} from '../pages/not-found/not-found'
//import{OrderConfirmPage} from '../pages/order-confirm/order-confirm'
//import{PayPage} from '../pages/pay/pay'
//import{UserCenterPage} from '../pages/user-center/user-center'

import { BokeIndexPage } from '../pages/boke-index/boke-index'
import { BokeMoodPage } from '../pages/boke-mood/boke-mood'
import { BokeMemoryPage } from '../pages/boke-memory/boke-memory'
import { MenuController } from 'ionic-angular'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = BokeIndexPage;

  pages: Array<{title: string, component: any,name:string}>;

  title:string = "且听风吟Bolg"

  constructor(public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public menuCtrl:MenuController) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { 
        title: 'BokeIndexPage', 
        component: BokeIndexPage,
        name:"且听风吟Bolg" 
      },
      { 
        title: 'BokeMoodPage', 
        component: BokeMoodPage ,
        name:"心情随笔" 
      },
      { 
        title: 'BokeMemoryPage', 
        component: BokeMemoryPage ,
        name:"韶华追忆" 
      },
    ]

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  handleClick(page){
    
    //this.nav.setRoot(page)

    this.menuCtrl.close()
    this.title = page.name

    switch(page.title){
      case "BokeMoodPage" : this.nav.setRoot(page.component) ; break;
      case "BokeIndexPage" : this.nav.setRoot(page.component) ; break;
      default : return false;
    }
  }
}
