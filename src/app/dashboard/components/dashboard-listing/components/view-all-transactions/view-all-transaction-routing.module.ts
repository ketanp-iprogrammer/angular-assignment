import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ViewAllTransactionsComponent } from './components/view-all-transactions.component';


const routes: Routes = [
  { path: '', component: ViewAllTransactionsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ViewAllTransactionRoutingModule { }
