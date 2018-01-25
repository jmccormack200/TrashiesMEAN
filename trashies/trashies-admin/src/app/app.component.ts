import { Component } from '@angular/core';
import Category from './models/category.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  messageFromCategory:Category = new Category;

  categoryMessage(category: Category) {
    this.messageFromCategory = category;
    console.log(category.title);
  }
}
