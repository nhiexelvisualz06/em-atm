import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BalanceService } from '../../balance.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-completed',
  imports: [ CommonModule ],
  templateUrl: './transaction-completed.html',
  styleUrl: './transaction-completed.css'
})
export class TransactionCompleted {
  counting: boolean = false;
  dots: string = '';
  intervalId: any;
  withdrawAmount: number = 0;

  constructor(private router: Router, private balanceService: BalanceService) {}

  ngOnInit() {
    // You should store the withdrawn amount somewhere after withdrawal, e.g. in BalanceService or sessionStorage
    // For this example, let's assume you store it in BalanceService as lastWithdrawAmount
    this.withdrawAmount = (this.balanceService as any).lastWithdrawAmount || 0;
  }

  getAnimationDuration(): number {
    const amount = this.withdrawAmount;
    if (amount <= 10000) return 2000;
    if (amount <= 15000) return 2500;
    if (amount <= 20000) return 3000;
    // For amounts above 20,000, increment 0.5s every 4,900 pesos
    if (amount > 20000) {
      const extra = Math.ceil((amount - 20000) / 4900) * 500;
      return 3000 + extra;
    }
    return 2000;
  }

  startCountingBills() {
    this.counting = true;
    this.dots = '';
    this.intervalId = setInterval(() => {
      this.dots = this.dots.length < 3 ? this.dots + '.' : '';
    }, 500);

    setTimeout(() => {
      clearInterval(this.intervalId);
      this.router.navigate(['/withdraw-exit']);
    }, this.getAnimationDuration());
  }


}
