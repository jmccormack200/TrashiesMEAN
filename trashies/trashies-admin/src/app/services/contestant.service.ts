import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import Category from '../models/category.model';
import Contestant from '../models/contestant.model';

import 'rxjs/add/operator/map';

@Injectable()
export class ContestantService {
  public api_url = 'http://localhost:3000/api/contests';
  categoryUrl = `${this.api_url}/5a614709dcf5c0784eade2e9`

  constructor(private http: HttpClient) { }

  getContestants(category: Category): Observable<Contestant[]> {
    return this.http.get(this.categoryUrl + '/' + category._id)
      .map(res => {
        return res["data"] as Contestant[];
      });
  }

  addContestant(category: Category, contestant: Contestant): Observable<any> {
    console.log(contestant); 
      return this.http.post(this.categoryUrl + '/' + category._id, contestant);
  }

  deleteContestant(category: Category, contestant: Contestant): Observable<any> {
    return this.http.delete(this.categoryUrl + '/' + category._id + '/' + contestant._id);
  }

  editContestant(category: Category, editedContestant: Contestant): Observable<any> {
    console.log(editedContestant);
    return this.http.put(this.categoryUrl + '/' + category._id, editedContestant);
  }
}
