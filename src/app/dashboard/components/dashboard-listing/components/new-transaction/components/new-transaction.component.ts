import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewTransactionService } from '../services/new-transaction.service';
import { Subscription } from 'rxjs';
import { ValidationMessages } from '../validations/validators'
import { NewTransaction } from '../model/transaction.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent implements OnInit, OnDestroy {
  transactionForm: FormGroup;
  submitted: boolean = false;
  releaseCustomerData: Subscription;
  releaseSubmitSubscription: Subscription;
  validationsMessages = ValidationMessages;
  currencyList = ['AED', 'EUR', 'CHF', 'MUR', 'USD'];
  newtransaction: NewTransaction = new NewTransaction;

  constructor(private formBuilder: FormBuilder, private newTransactionService: NewTransactionService,
    private toastr: ToastrService, private router: Router) { }

  get objTransaction(): FormGroup { return this.transactionForm.get('newTransaction') as FormGroup; }

  ngOnDestroy() {
    if (this.releaseCustomerData) { this.releaseCustomerData.unsubscribe() };
    if (this.releaseSubmitSubscription) { this.releaseSubmitSubscription.unsubscribe() };
  }

  ngOnInit() {
    this.createForm();
  }

  // function to give date in yyyymmdd format
  yyyymmdd() {
    var now = new Date();
    var y = now.getFullYear();
    var m = now.getMonth() + 1;
    var d = now.getDate();
    return '' + y + (m < 10 ? '0' : '') + m + (d < 10 ? '0' : '') + d;
  }

// initializing form here
  createForm() {
    this.transactionForm = this.formBuilder.group({
      newTransaction: this.formBuilder.group(
        this.setTransactionInformation()
      )
    });

    let formatedDate: any = this.yyyymmdd();
    let randomNumber = Math.floor((Math.random() * 10) + 1); // generating sequence number here between 1 - 10.
    this.objTransaction.patchValue({ ['reference']: (formatedDate + randomNumber) }); // autogenerated reference number
  }

  setTransactionInformation() {
    return {
      reference: [''],
      customer_number: [''],
      customer_name: [''],
      address: [''],
      phone: ['', Validators.required],
      transfer_amount: ['', Validators.required],
      transfer_currency: [''],
      beneficiary_bank: [''],
      beneficiary_accno: [''],
      payment_details: ['']
    }
  }

  // back button 
  back() {
    this.router.navigate(['/dashboard'])
  }

  // getting the customer-name, address and phone number after entering customer-number by user.
  getCustomerInfo() {
    this.releaseCustomerData = this.newTransactionService.getCustomerJsonData().subscribe(customerData => {
      if (customerData && 'responseXML' in customerData && 'getCustomerInfoResponse' in customerData.responseXML &&
        'getCustomerInfoResult' in customerData.responseXML.getCustomerInfoResponse &&
        Object.keys(customerData.responseXML.getCustomerInfoResponse.getCustomerInfoResult).length > 0) {
        let customerDetails = (Object.keys(customerData.responseXML.getCustomerInfoResponse.getCustomerInfoResult.CUST_INFO).length > 0 ?
          customerData.responseXML.getCustomerInfoResponse.getCustomerInfoResult.CUST_INFO : '');
        this.objTransaction.patchValue({ ['customer_name']: ('SHORT_NAME' in customerDetails && customerDetails.SHORT_NAME != '' ? customerDetails.SHORT_NAME : '') });
        this.objTransaction.patchValue({ ['address']: ('STREET_ADDR' in customerDetails && customerDetails.STREET_ADDR != '' ? customerDetails.STREET_ADDR : '') });
        this.objTransaction.patchValue({
          ['phone']: ('CONTACT_INFO_V7' in customerDetails && 'CONTACT_INFO_V7' in customerDetails.CONTACT_INFO_V7 && 'PHONE_LIST_V7' in customerDetails.CONTACT_INFO_V7.CONTACT_INFO_V7
            && 'PHONE_LIST_ITEM_V7' in customerDetails.CONTACT_INFO_V7.CONTACT_INFO_V7.PHONE_LIST_V7 && customerDetails.CONTACT_INFO_V7.CONTACT_INFO_V7.
              PHONE_LIST_V7.PHONE_LIST_ITEM_V7.PHONE != '' ? customerDetails.CONTACT_INFO_V7.CONTACT_INFO_V7.
                PHONE_LIST_V7.PHONE_LIST_ITEM_V7.PHONE : '')
        });
      }
    })
  }

  // called when you press enter after entering value of customer number
  fetchCustomerData() {
    this.getCustomerInfo();
  }

  // final submit form of transaction details
  submitTransactionDetails() {
    this.submitted = true;
    if (this.transactionForm.invalid) {
      return;
    }
    this.submitAllTransactionDetails();
  }

  submitAllTransactionDetails() {
    let objParams = this.objTransaction.value;
    this.releaseSubmitSubscription = this.newTransactionService.submitNewTransactionDetails(objParams).subscribe(data => {
      if (data && 'id' in data) {
        this.toastr.success("Transaction Added Successfully!")
      }
      else {
        this.toastr.error("Something Went Wrong!")
      }
    }, error => {
      this.toastr.error(error);
    }, () => {
      // complete state of a subscribe cycle.
    });
  }

  // clearing all the form-fields
  reset() {
    this.transactionForm.reset();
  }

}
