import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackhomeComponent } from './blackhome.component';

describe('BlackhomeComponent', () => {
  let component: BlackhomeComponent;
  let fixture: ComponentFixture<BlackhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
