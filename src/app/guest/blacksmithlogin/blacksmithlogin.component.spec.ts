import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacksmithloginComponent } from './blacksmithlogin.component';

describe('BlacksmithloginComponent', () => {
  let component: BlacksmithloginComponent;
  let fixture: ComponentFixture<BlacksmithloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlacksmithloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlacksmithloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
