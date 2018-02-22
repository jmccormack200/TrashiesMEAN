import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import Category from '../models/category.model';

@Component({
  selector: 'app-presentation-view',
  templateUrl: './presentation-view.component.html',
  styleUrls: ['./presentation-view.component.scss']
})
export class PresentationViewComponent implements OnInit {

  messageFromCategory: Category = new Category;
  closedForVoting: Boolean = true;
  votingMessage: String = "Open Voting";

  @Output()
  showNextItem: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl("");
  }

  categoryMessage(category: Category) {
    this.messageFromCategory = category;
    console.log(category.title);
  }

  progressReveal() {

  }

  toggleVoting(event) {
    this.closedForVoting = !this.closedForVoting;
    if (this.closedForVoting) {
      this.votingMessage = "Open Voting"
    } else {
      this.votingMessage = "Close Voting"
    }
  }

}
