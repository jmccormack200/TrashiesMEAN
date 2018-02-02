import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import Category from '../models/category.model';

import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {
  public api_url = 'http://localhost:3000/api/contests';
  categoryUrl = `${this.api_url}/5a614709dcf5c0784eade2e9`

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get(this.categoryUrl)
      .map(res => {
        return res["data"] as Category[];
      })
  }

  editCategory(category: Category): Observable<any> {
    console.log("!!!!!!");
    console.log(category);
    console.log("!!!!!!");
    return this.http.put(this.categoryUrl, category);
  }
}
