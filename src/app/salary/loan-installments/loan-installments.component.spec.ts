import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanInstallmentsComponent } from './loan-installments.component';

describe('LoanInstallmentsComponent', () => {
  let component: LoanInstallmentsComponent;
  let fixture: ComponentFixture<LoanInstallmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanInstallmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanInstallmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
