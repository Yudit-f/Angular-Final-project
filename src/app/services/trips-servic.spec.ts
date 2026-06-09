import { TestBed } from '@angular/core/testing';

import { TripsServic } from './trips-servic';

describe('TripsServic', () => {
  let service: TripsServic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripsServic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
