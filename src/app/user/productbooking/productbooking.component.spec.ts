import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbookingComponent } from './productbooking.component';

describe('ProductbookingComponent', () => {
  let component: ProductbookingComponent;
  let fixture: ComponentFixture<ProductbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductbookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
