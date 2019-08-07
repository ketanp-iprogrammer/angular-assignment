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
  showSpinner: boolean = true;
  constructor(private viewTransactionService: ViewAllTransactionService) { }

  /*
  Name Of Author : Ketan Pande
  Function Name : ngOnInit()
  Description : It is one of the lifecycle in Angular. I have made an API call here to fetch all the list of 
                completed transactions. I am using async pipe in html file here.
                So that I dont need to manually subscribe and unsubscribe it again and again. 
                I have also taken loader here untils it fetch the results, it will load the loader.
               
*/
  ngOnInit() {
    this.showSpinner = true;
      this.transactionInfo$ = this.viewTransactionService.getAllTransactionDetails();
      if (Object.keys(this.transactionInfo$).length > 0) {
        this.showSpinner = false
      }
   
  }

}
