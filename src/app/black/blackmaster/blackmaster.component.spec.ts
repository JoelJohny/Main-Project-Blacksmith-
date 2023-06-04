import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackmasterComponent } from './blackmaster.component';

describe('BlackmasterComponent', () => {
  let component: BlackmasterComponent;
  let fixture: ComponentFixture<BlackmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackmasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
