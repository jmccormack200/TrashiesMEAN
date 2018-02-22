import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterNameComponent } from './voter-name.component';

describe('VoterNameComponent', () => {
  let component: VoterNameComponent;
  let fixture: ComponentFixture<VoterNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
