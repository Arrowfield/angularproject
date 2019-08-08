import { NgModule } from '@angular/core';
import { MaskComponent } from './mask/mask';

import { MyFooterComponent } from './my-footer/my-footer';

import { MyMenuComponent } from './my-menu/my-menu';
import { MyArticleComponent } from './my-article/my-article';

import { IonicModule } from 'ionic-angular';

@NgModule({
declarations: [MaskComponent,

MyFooterComponent,

MyMenuComponent,
MyArticleComponent],
imports: [
  IonicModule.forRoot(MyArticleComponent),
],
exports: [MaskComponent,

MyFooterComponent,

MyMenuComponent,
MyArticleComponent]
})
export class ComponentsModule {}
