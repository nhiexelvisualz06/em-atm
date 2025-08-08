import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawExit } from './withdraw-exit';

describe('WithdrawExit', () => {
  let component: WithdrawExit;
  let fixture: ComponentFixture<WithdrawExit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithdrawExit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithdrawExit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
