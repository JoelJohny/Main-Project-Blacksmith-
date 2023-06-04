import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistricteditComponent } from './districtedit.component';

describe('DistricteditComponent', () => {
  let component: DistricteditComponent;
  let fixture: ComponentFixture<DistricteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistricteditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistricteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
