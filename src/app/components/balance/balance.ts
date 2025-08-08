import { Component } from '@angular/core';
import { BalanceService } from '../../balance.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-balance',
  imports: [RouterLink, CommonModule],
  templateUrl: './balance.html',
  styleUrl: './balance.css'
})
export class Balance {

  //currentBalance: number = 0;

  constructor(private balanceService: BalanceService) {}

  get currentBalance(): number {
    return this.balanceService.balance;
  }

}
