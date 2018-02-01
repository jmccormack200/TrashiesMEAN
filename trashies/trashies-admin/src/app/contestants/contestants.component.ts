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
  editContestants: Contestant[] = [];

  public newContestant: Contestant = new Contestant()

  constructor(private contestantService: ContestantService) { 
  }

  create() {
    this.contestantService.addContestant(this._category, this.newContestant)
      .subscribe((res) => {
        console.log("Success");
        this.refreshContestants();
        this.newContestant = new Contestant();
      });
  }

  refreshContestants() {
    this.contestantService.getContestants(this._category).subscribe( contestants => {
      console.log("Refreshed");
      this.contestants = contestants;
    });
  }

  deleteContestant(contestant: Contestant) {
    this.contestantService.deleteContestant(this._category, contestant).subscribe( res => {
      this.refreshContestants();
    });
  }

  editContestant(contestant: Contestant) {
    if(this.contestants.includes(contestant)) {
      if (!this.editContestants.includes(contestant)) {
        this.editContestants.push(contestant);
      } else {
        this.editContestants.splice(this.editContestants.indexOf(contestant), 1);
        this.contestantService.editContestant(this._category, contestant).subscribe( res => {
          this.refreshContestants();
        })
      }
    }
  }
}
