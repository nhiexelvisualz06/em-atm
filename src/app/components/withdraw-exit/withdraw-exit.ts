import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdraw-exit',
  imports: [],
  templateUrl: './withdraw-exit.html',
  styleUrl: './withdraw-exit.css'
})
export class WithdrawExit {

  disableBtn: boolean = false;

  constructor(private router: Router) {}

  goToLandingPage() {
    this.disableBtn = true;
    setTimeout(() => {
      this.router.navigate(['']);
    }, 4000);
  }

  
  
}
