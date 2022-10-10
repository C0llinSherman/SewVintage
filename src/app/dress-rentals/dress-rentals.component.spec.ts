import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressRentalsComponent } from './dress-rentals.component';

describe('DressRentalsComponent', () => {
  let component: DressRentalsComponent;
  let fixture: ComponentFixture<DressRentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DressRentalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DressRentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
