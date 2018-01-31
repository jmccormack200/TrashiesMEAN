import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CategoryService } from './services/category.service';

import { AppComponent } from './app.component';
import { CategoryListComponent } from './category-list/category-list.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ContestantsComponent } from './contestants/contestants.component';
import { NewCategoryComponent } from './new-category/new-category.component';
import { ContestantService } from './services/contestant.service';


@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    ContestantsComponent,
    NewCategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    ContestantService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
