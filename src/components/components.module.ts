import { NgModule } from '@angular/core';
import { MaskComponent } from './mask/mask';

import { MyFooterComponent } from './my-footer/my-footer';

import { MyMenuComponent } from './my-menu/my-menu';
@NgModule({
	declarations: [MaskComponent,
   
    MyFooterComponent,
 
    MyMenuComponent],
	imports: [],
	exports: [MaskComponent,
   
    MyFooterComponent,

    MyMenuComponent]
})
export class ComponentsModule {}
