import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BalanceService {
  private _balance: number;
  lastWithdrawAmount: number = 0;
  pinAttempts: number = 0;
  private readonly correctPin = '2808';

  constructor() {
    this._balance = Math.floor(Math.random() * (99999 - 100 + 1)) + 100;
  }

  get balance(): number {
    return this._balance;
  }

  set balance(val: number) {
    this._balance = val;
  }

  resetBalance() {
    this._balance = Math.floor(Math.random() * (99999 - 100 + 1)) + 100;
  }

  get pin(): string {
    return this.correctPin;
  }
}