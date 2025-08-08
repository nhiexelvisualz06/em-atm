import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  imports: [RouterLink],
  templateUrl: './main-menu.html',
  styleUrl: './main-menu.css'
})
export class MainMenu {
  constructor(private router: Router) {}

  setTransaction(transaction: string) {
    const setTransaction = sessionStorage.setItem('transactionType', transaction);
  }

}
