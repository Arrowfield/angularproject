import { NgModule } from '@angular/core';
import { MaskComponent } from './mask/mask';

import { MyFooterComponent } from './my-footer/my-footer';
@NgModule({
	declarations: [MaskComponent,
   
    MyFooterComponent],
	imports: [],
	exports: [MaskComponent,
   
    MyFooterComponent]
})
export class ComponentsModule {}
