import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllorderreportComponent } from './allorderreport.component';

describe('AllorderreportComponent', () => {
  let component: AllorderreportComponent;
  let fixture: ComponentFixture<AllorderreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllorderreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllorderreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
