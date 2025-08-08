import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAccount } from './select-account';

describe('SelectAccount', () => {
  let component: SelectAccount;
  let fixture: ComponentFixture<SelectAccount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectAccount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectAccount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
