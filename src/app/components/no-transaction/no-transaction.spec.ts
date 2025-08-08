import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoTransaction } from './no-transaction';

describe('NoTransaction', () => {
  let component: NoTransaction;
  let fixture: ComponentFixture<NoTransaction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoTransaction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoTransaction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
