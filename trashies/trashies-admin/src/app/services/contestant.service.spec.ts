import { TestBed, inject } from '@angular/core/testing';

import { ContestantService } from './contestant.service';

describe('ContestantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContestantService]
    });
  });

  it('should be created', inject([ContestantService], (service: ContestantService) => {
    expect(service).toBeTruthy();
  }));
});
