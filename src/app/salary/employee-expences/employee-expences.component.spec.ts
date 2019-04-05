import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeExpencesComponent } from './employee-expences.component';

describe('EmployeeExpencesComponent', () => {
  let component: EmployeeExpencesComponent;
  let fixture: ComponentFixture<EmployeeExpencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeExpencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeExpencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
