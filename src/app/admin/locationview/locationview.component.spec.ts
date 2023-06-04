import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationviewComponent } from './locationview.component';

describe('LocationviewComponent', () => {
  let component: LocationviewComponent;
  let fixture: ComponentFixture<LocationviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
