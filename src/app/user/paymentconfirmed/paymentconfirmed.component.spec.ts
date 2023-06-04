import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentconfirmedComponent } from './paymentconfirmed.component';

describe('PaymentconfirmedComponent', () => {
  let component: PaymentconfirmedComponent;
  let fixture: ComponentFixture<PaymentconfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentconfirmedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentconfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
