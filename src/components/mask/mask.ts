import { Component } from '@angular/core';

/**
 * Generated class for the MaskComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mask',
  templateUrl: 'mask.html'
})
export class MaskComponent {

  text: string;

  constructor() {
    console.log('Hello MaskComponent Component');
    this.text = 'Hello World';
  }

}
