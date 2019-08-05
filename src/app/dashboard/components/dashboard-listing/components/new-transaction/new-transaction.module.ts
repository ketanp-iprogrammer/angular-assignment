import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTransactionRoutingModule } from './new-transaction-routing.module';
import { NewTransactionComponent } from './components/new-transaction.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';
import { OnlyDigits, OnlyAlphabets } from './directives/transaction.directive';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [NewTransactionComponent,OnlyDigits,OnlyAlphabets],
  imports: [
    CommonModule,
    NewTransactionRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class NewTransactionModule { }
