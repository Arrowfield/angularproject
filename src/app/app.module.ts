//根模块
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http';//发送网络请求模块依赖

//组件模块
import { ComponentsModule } from '../components/components.module'

import { MyApp } from './app.component';


//import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
//import { CartPage } from '../pages/cart/cart';
//import { DetailPage } from '../pages/detail/detail';
//import { IndexPage } from '../pages/index/index';
//import { LoginPage } from '../pages/login/login';
//import { NotFoundPage } from '../pages/not-found/not-found';
//import { OrderConfirmPage } from '../pages/order-confirm/order-confirm';
//import { PayPage } from '../pages/pay/pay';
//import { UserCenterPage} from '../pages/user-center/user-center';

import { BokeIndexPage } from '../pages/boke-index/boke-index'
import { BokeMoodPage } from '../pages/boke-mood/boke-mood'
import { BokeMemoryPage } from '../pages/boke-memory/boke-memory'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyHttpService } from '../service/myhttp.service';
//装饰器
@NgModule({
  declarations: [//导入page
    MyApp,
    //HomePage,
    //ListPage,
    // CartPage,
    // DetailPage,
    //IndexPage,
    // LoginPage,
    // NotFoundPage,
    // OrderConfirmPage,
    // PayPage,
    // UserCenterPage
    BokeIndexPage,
    BokeMoodPage,
    BokeMemoryPage
  ],
  imports: [//导入模块
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  
  entryComponents: [//声明page
    MyApp,
    //HomePage,
    //ListPage,
    // CartPage,
    // DetailPage,
    //IndexPage,
    // LoginPage,
    // NotFoundPage,
    // OrderConfirmPage,
    // PayPage,
    // UserCenterPage
    BokeIndexPage,
    BokeMoodPage,
    BokeMemoryPage
  ],
  providers: [//提供商
    MyHttpService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
