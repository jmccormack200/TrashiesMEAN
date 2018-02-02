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
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { PresenterViewComponent } from './presenter-view/presenter-view.component';
import { PresentationViewComponent } from './presentation-view/presentation-view.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: AdminViewComponent },
  { path: 'presenter', component: PresenterViewComponent },
  { path: 'presentation', component: PresentationViewComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    ContestantsComponent,
    NewCategoryComponent,
    EllipsisPipe,
    AdminViewComponent,
    PresenterViewComponent,
    PresentationViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}
    )
  ],
  providers: [
    ContestantService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
