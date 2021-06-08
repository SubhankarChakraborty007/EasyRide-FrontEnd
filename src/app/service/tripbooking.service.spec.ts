import { TestBed } from '@angular/core/testing';

import { TripbookingService } from './tripbooking.service';

describe('TripbookingService', () => {
  let service: TripbookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripbookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
