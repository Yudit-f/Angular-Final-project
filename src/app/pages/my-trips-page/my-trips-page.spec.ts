import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTripsPage } from './my-trips-page';

describe('MyTripsPage', () => {
  let component: MyTripsPage;
  let fixture: ComponentFixture<MyTripsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTripsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(MyTripsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
