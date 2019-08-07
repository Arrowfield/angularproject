import { Component } from '@angular/core';

/**
 * Generated class for the MyMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'my-menu',
  templateUrl: 'my-menu.html'
})
export class MyMenuComponent {

  text: string;

  constructor() {
    console.log('Hello MyMenuComponent Component');
    this.text = 'Hello World';
  }

}
