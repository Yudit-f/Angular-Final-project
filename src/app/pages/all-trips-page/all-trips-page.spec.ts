import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTripsPage } from './all-trips-page';

describe('AllTripsPage', () => {
  let component: AllTripsPage;
  let fixture: ComponentFixture<AllTripsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllTripsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AllTripsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
