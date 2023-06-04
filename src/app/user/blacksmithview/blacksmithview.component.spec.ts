import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacksmithviewComponent } from './blacksmithview.component';

describe('BlacksmithviewComponent', () => {
  let component: BlacksmithviewComponent;
  let fixture: ComponentFixture<BlacksmithviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlacksmithviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlacksmithviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
