import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NewTransactionComponent } from './components/new-transaction.component';


const routes: Routes = [
  { path: '', component: NewTransactionComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NewTransactionRoutingModule { }
