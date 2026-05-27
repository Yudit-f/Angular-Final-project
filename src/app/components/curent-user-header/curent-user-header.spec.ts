import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurentUserHeader } from './curent-user-header';

describe('CurentUserHeader', () => {
  let component: CurentUserHeader;
  let fixture: ComponentFixture<CurentUserHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurentUserHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(CurentUserHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
