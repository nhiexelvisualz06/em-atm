import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { EnterPin } from './components/enter-pin/enter-pin';
import { MainMenu } from './components/main-menu/main-menu';
import { Balance } from './components/balance/balance';
import { SelectAccount } from './components/select-account/select-account';
import { Withdraw } from './components/withdraw/withdraw';
import { TransactionCompleted } from './components/transaction-completed/transaction-completed';
import { TransactionProcessing } from './components/transaction-processing/transaction-processing';
import { NoTransaction } from './components/no-transaction/no-transaction';
import { WithdrawExit } from './components/withdraw-exit/withdraw-exit';


export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'enter-pin',
        component: EnterPin
    },
    {
        path: 'main-menu',
        component: MainMenu
    },
    {
        path: 'select-account',
        component: SelectAccount
    },
    {
        path: 'balance',
        component: Balance
    },
    {
        path: 'withdraw',
        component: Withdraw
    },
    {
        path:'transaction-completed',
        component: TransactionCompleted
    },
    {
        path: 'transaction-processing',
        component: TransactionProcessing
    },
    {
        path: 'no-transaction',
        component: NoTransaction
    },
    {
        path: 'withdraw-exit',
        component: WithdrawExit
    }

];
