import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsourceTransactionGroupComponent } from './outsource-transaction-group.component';

describe('OutsourceTransactionGroupComponent', () => {
  let component: OutsourceTransactionGroupComponent;
  let fixture: ComponentFixture<OutsourceTransactionGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutsourceTransactionGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutsourceTransactionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
