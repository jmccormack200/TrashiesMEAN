import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presentation-view',
  templateUrl: './presentation-view.component.html',
  styleUrls: ['./presentation-view.component.scss']
})
export class PresentationViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl("");
  }
}
