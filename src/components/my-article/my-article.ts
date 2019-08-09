import { Component,Input } from '@angular/core';

/**
 * Generated class for the MyArticleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'my-article',
  templateUrl: 'my-article.html'
})
export class MyArticleComponent {

  public text: string

  @Input() article:any

  constructor() {
    console.log('Hello MyArticleComponent Component');
    this.text = 'Hello World';
    console.log(this.article)
  }
  
  ionViewDidLoad(){
    console.log(123)
  }


}
