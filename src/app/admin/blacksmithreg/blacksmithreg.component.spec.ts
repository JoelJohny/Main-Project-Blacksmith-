import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacksmithregComponent } from './blacksmithreg.component';

describe('BlacksmithregComponent', () => {
  let component: BlacksmithregComponent;
  let fixture: ComponentFixture<BlacksmithregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlacksmithregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlacksmithregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
