import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionProcessing } from './transaction-processing';

describe('TransactionProcessing', () => {
  let component: TransactionProcessing;
  let fixture: ComponentFixture<TransactionProcessing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionProcessing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionProcessing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
