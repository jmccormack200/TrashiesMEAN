import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ContestantService } from '../services/contestant.service';
import Contestant from '../models/contestant.model'
import Category from '../models/category.model';

@Component({
  selector: 'contestants',
  templateUrl: './contestants.component.html',
  styleUrls: ['./contestants.component.scss']
})
export class ContestantsComponent {
  
  @Input()
  set category(category: Category) {
    this._category = category;
    this.contestants = this._category.contestants;
  }

  get category() {
    return this._category;
  }

  _category: Category;
  contestants: Contestant[];

  public newContestant: Contestant = new Contestant()

  constructor(private contestantService: ContestantService) { 
  }

  create() {
    this.contestantService.addContestant(this._category, this.newContestant)
      .subscribe((res) => {
        console.log("Success");
        this.refreshContestants();
        this.newContestant = new Contestant();
      })
  }

  refreshContestants() {
    this.contestantService.getContestants(this._category).subscribe( contestants => {
      this.contestants = contestants;
    })
  }
}
