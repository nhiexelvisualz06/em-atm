import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionCompleted } from './transaction-completed';

describe('TransactionCompleted', () => {
  let component: TransactionCompleted;
  let fixture: ComponentFixture<TransactionCompleted>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionCompleted]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionCompleted);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
