import { Component } from '@angular/core';
import { BalanceService } from '../../balance.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-withdraw',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './withdraw.html',
  styleUrl: './withdraw.css'
})
export class Withdraw {

  insufficientBalance: boolean = false;
  invalidDenomination: boolean = false;
  rawAmount: string = '';

  constructor(private balanceService: BalanceService, private router: Router) {}

  get currentBalance(): number {
    return this.balanceService.balance;
  }

  get amount(): string {
    if (!this.rawAmount) return '';
    const num = parseFloat(this.rawAmount) / 100;
    return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  set amount(val: string) {
    // Not used, but required for ngModel compatibility
  }

  appendAmount(num: string) {
    if (this.rawAmount.length < 9) {
      // Prevent leading zeros
      if (this.rawAmount === '' && num === '0') return;
      this.rawAmount += num;
    }
  }

  clearAmount() {
    this.rawAmount = '';
    this.insufficientBalance = false;
    this.invalidDenomination = false;
  }

  cancelAmount() {
    this.rawAmount = '';
    this.insufficientBalance = false;
    this.invalidDenomination = false;
    this.router.navigate(['/no-transaction']);
  }

  enterAmount() {
    this.insufficientBalance = false;
    this.invalidDenomination = false;

    if (!this.rawAmount) {
      this.invalidDenomination = true;
      return;
    }
    const withdrawAmount = parseFloat(this.rawAmount) / 100;

    if (withdrawAmount < 100 || withdrawAmount % 100 !== 0) {
      this.invalidDenomination = true;
    }

    if (isNaN(withdrawAmount) || withdrawAmount <= 0 || this.balanceService.balance < withdrawAmount) {
      this.insufficientBalance = true;
    }

    if (!this.invalidDenomination && !this.insufficientBalance) {
      this.balanceService.balance -= withdrawAmount;
      this.balanceService.lastWithdrawAmount = withdrawAmount;
      this.router.navigate(['/transaction-processing']);
    }
  }

}