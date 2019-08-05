import { Component, OnInit, OnDestroy } from '@angular/core';
import { ViewAllTransactionService } from '../services/view-all-transaction.service';
import { Subscription, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-all-transactions',
  templateUrl: './view-all-transactions.component.html',
  styleUrls: ['./view-all-transactions.component.css']
})
export class ViewAllTransactionsComponent implements OnInit {
  public transactionInfo$: Observable<ViewAllTransactionService[]>;

  constructor(private viewTransactionService: ViewAllTransactionService) { }

  ngOnInit() {
    this.transactionInfo$ = this.viewTransactionService.getAllTransactionDetails();
  }

}
