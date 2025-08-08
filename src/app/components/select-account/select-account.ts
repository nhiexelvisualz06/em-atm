import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BalanceService } from '../../balance.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-account',
  imports: [ CommonModule ],
  templateUrl: './select-account.html',
  styleUrl: './select-account.css'
})
export class SelectAccount {
  constructor(private router: Router, private balanceService: BalanceService) {}

  get currentBalance(): number {
    return this.balanceService.balance;
  }

  selectAccount(account: string) {
    sessionStorage.setItem('selectedAccount', account);
    const transactionType = sessionStorage.getItem('transactionType');
    if (transactionType === 'withdraw') {
      this.router.navigate(['/withdraw']);
    } else if (transactionType === 'balance') {
      this.router.navigate(['/balance']);
    }
  }
}
