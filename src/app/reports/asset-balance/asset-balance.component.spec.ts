import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetBalanceComponent } from './asset-balance.component';

describe('AssetBalanceComponent', () => {
  let component: AssetBalanceComponent;
  let fixture: ComponentFixture<AssetBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
