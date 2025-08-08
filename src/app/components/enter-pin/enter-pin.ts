import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BalanceService } from '../../balance.service';

@Component({
  selector: 'app-enter-pin',
  imports: [FormsModule, CommonModule],
  templateUrl: './enter-pin.html',
  styleUrl: './enter-pin.css'
})
export class EnterPin {
  pin: string = '';
  showIncorrectPin: boolean = false;
  removeIncorrectPin: boolean = false;
  showLocked: boolean = false;
  action: string = '';

  constructor(private router: Router, private route: ActivatedRoute, public balanceService: BalanceService) {}
  
  ngOnInit(): void {

    if (this.balanceService.pinAttempts >= 3) {
      this.showLocked = true;
    }
  }

  get pinArray() {
    return Array(4).fill(0).map((_, i) => this.pin[i]);
  }

  onPinInput() {
    if (this.pin.length === 4) {
      if (this.pin === this.balanceService.pin) {
        this.balanceService.pinAttempts = 0;
        if (this.action === 'enter') {  
          this.router.navigate(['/main-menu']);
          this.action = '';
        } else {
          setTimeout(() => {
            this.router.navigate(['/main-menu']);
          }, 1800);
        }
      } else {
        this.balanceService.pinAttempts++;
        if (this.balanceService.pinAttempts >= 3) {
          this.showIncorrectPin = false;
          this.removeIncorrectPin = true;
          this.showLocked = true;
          setTimeout(() => {
            this.balanceService.pinAttempts = 0;
            this.showLocked = false;
            this.router.navigate(['/no-transaction']);
          }, 3500);
        } else {
          this.showIncorrectPin = true;
          setTimeout(() => {
            this.pin = '';
          }, 300);
        }
      }
    }
  }

  appendPin(num: string) {
    if (this.pin.length < 4) this.pin += num;
    this.onPinInput();
  }
  clearPin() {
    this.pin = '';
  }
  cancelPin() {
    this.pin = '';
    this.router.navigate(['/no-transaction']);
  }
  enterPin(action: string) {
    this.action = action;
    this.onPinInput();
  }

}
