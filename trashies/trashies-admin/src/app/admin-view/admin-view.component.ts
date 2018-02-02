import { Component, OnInit } from '@angular/core';
import Category from '../models/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent {

  constructor(private router: Router) { }

  title = 'app';
  messageFromCategory:Category = new Category;

  categoryMessage(category: Category) {
    this.messageFromCategory = category;
    console.log(category.title);
  }

  startContest() {
    this.router.navigateByUrl('/presentation');
  }

}
