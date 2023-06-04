import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacksmiviewComponent } from './blacksmiview.component';

describe('BlacksmiviewComponent', () => {
  let component: BlacksmiviewComponent;
  let fixture: ComponentFixture<BlacksmiviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlacksmiviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlacksmiviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
