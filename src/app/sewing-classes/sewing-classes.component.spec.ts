import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SewingClassesComponent } from './sewing-classes.component';

describe('SewingClassesComponent', () => {
  let component: SewingClassesComponent;
  let fixture: ComponentFixture<SewingClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SewingClassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SewingClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
