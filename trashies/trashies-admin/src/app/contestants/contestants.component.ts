import { Component, OnInit, Input } from '@angular/core';
import Contestant from '../models/contestant.model'
import Category from '../models/category.model';

@Component({
  selector: 'contestants',
  templateUrl: './contestants.component.html',
  styleUrls: ['./contestants.component.scss']
})
export class ContestantsComponent {
  
  @Input()
  categoryInput: Category;

  constructor() { }
}
