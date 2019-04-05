import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeExpencesComponent } from './office-expences.component';

describe('OfficeExpencesComponent', () => {
  let component: OfficeExpencesComponent;
  let fixture: ComponentFixture<OfficeExpencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeExpencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeExpencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
