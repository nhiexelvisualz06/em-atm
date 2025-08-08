import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-processing',
  imports: [ CommonModule],
  templateUrl: './transaction-processing.html',
  styleUrl: './transaction-processing.css'
})
export class TransactionProcessing {

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/transaction-completed']);
    }, 5000);
  }

}
