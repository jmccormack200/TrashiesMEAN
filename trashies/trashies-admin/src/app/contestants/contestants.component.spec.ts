import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestantsComponent } from './contestants.component';

describe('ContestantsComponent', () => {
  let component: ContestantsComponent;
  let fixture: ComponentFixture<ContestantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
