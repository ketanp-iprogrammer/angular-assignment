import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAllTransactionRoutingModule } from './view-all-transaction-routing.module';
import { ViewAllTransactionsComponent } from './components/view-all-transactions.component';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ViewAllTransactionsComponent],
  imports: [
    CommonModule,
    ViewAllTransactionRoutingModule,
    MatCardModule,
    RouterModule
  ]
})
export class ViewAllTransactionsModule { }
