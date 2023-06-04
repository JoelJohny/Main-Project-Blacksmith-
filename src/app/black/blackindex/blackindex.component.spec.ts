import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackindexComponent } from './blackindex.component';

describe('BlackindexComponent', () => {
  let component: BlackindexComponent;
  let fixture: ComponentFixture<BlackindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
