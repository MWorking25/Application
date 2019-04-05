import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsPaymentComponent } from './vendors-payment.component';

describe('VendorsPaymentComponent', () => {
  let component: VendorsPaymentComponent;
  let fixture: ComponentFixture<VendorsPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorsPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorsPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
