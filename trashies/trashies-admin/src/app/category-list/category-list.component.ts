import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output()
  catagoryChange: EventEmitter<Category> = new EventEmitter<Category>();

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
    this.catagoryChange.emit(category);    
    this.activeCategory = category;
  }

  isActive(category: Category) {
    return category === this.activeCategory;
  }

  getActiveCategory() {
    return this.activeCategory;
  }
}
