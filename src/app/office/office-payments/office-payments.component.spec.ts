import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficePaymentsComponent } from './office-payments.component';

describe('OfficePaymentsComponent', () => {
  let component: OfficePaymentsComponent;
  let fixture: ComponentFixture<OfficePaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficePaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficePaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
