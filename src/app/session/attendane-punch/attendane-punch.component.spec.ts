import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanePunchComponent } from './attendane-punch.component';

describe('AttendanePunchComponent', () => {
  let component: AttendanePunchComponent;
  let fixture: ComponentFixture<AttendanePunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanePunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanePunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
