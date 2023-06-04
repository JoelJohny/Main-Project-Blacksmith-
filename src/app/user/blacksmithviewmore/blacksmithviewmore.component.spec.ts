import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacksmithviewmoreComponent } from './blacksmithviewmore.component';

describe('BlacksmithviewmoreComponent', () => {
  let component: BlacksmithviewmoreComponent;
  let fixture: ComponentFixture<BlacksmithviewmoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlacksmithviewmoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlacksmithviewmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
