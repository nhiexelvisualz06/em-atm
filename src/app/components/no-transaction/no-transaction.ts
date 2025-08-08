import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-transaction',
  imports: [],
  templateUrl: './no-transaction.html',
  styleUrl: './no-transaction.css'
})
export class NoTransaction {
  
  disableBtn: boolean = false;

  constructor(private router: Router) {}

  goToLandingPage() {
    this.disableBtn = true;
    setTimeout(() => {
      this.router.navigate(['']);
    }, 4000);
  }
}
