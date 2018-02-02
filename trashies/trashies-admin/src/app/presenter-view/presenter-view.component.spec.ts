import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenterViewComponent } from './presenter-view.component';

describe('PresenterViewComponent', () => {
  let component: PresenterViewComponent;
  let fixture: ComponentFixture<PresenterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresenterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresenterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
