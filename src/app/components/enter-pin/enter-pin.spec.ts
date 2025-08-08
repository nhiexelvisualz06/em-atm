import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterPin } from './enter-pin';

describe('EnterPin', () => {
  let component: EnterPin;
  let fixture: ComponentFixture<EnterPin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterPin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterPin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
