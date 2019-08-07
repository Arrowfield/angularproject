import { Component } from '@angular/core';

/**
 * Generated class for the MyFooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'my-footer',
  templateUrl: 'my-footer.html'
})
export class MyFooterComponent {

  text: string;

  constructor() {
    console.log('Hello MyFooterComponent Component');
    this.text = 'Hello World';
  }

}
