import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import Category from '../models/category.model';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categoryList: Category[];
  activeCategory: Category;

  constructor(private categoryService: CategoryService) {

  }

  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe(categories => {
        this.categoryList = categories;
        console.log(categories);
      })
  }

  selectCategory(category: Category) {
    console.log(category.title);
    this.activeCategory = category;
  }

  isActive(category: Category) {
    return category === this.activeCategory;
  }
}
