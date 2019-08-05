import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTransactionComponent } from './new-transaction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';

fdescribe('NewTransactionComponent', () => {
  let component: NewTransactionComponent;
  let fixture: ComponentFixture<NewTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        RouterTestingModule,
        ToastrModule.forRoot({}),
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule
      ],
      declarations: [NewTransactionComponent],
      providers: [
        HttpClient,
        HttpHandler,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('newTransactionform invalid when empty', () => {
    expect(component.transactionForm.valid).toBeFalsy();
  });

  it('reference field validity', () => {
    let errors = {};
    let reference = component.objTransaction.controls['reference'];
    reference.setValue("CUS201904057");
    errors = reference.errors || {};
    expect(reference.valid).toBeTruthy();
    expect(errors['maxlength']).toBeFalsy();
  });

  it('customer_number field validity', () => {
    let errors = {};
    let customer_number = component.objTransaction.controls['customer_number'];
    customer_number.setValue("456");
    errors = customer_number.errors || {};
    expect(customer_number.valid).toBeTruthy();
  });

  it('customer_name field validity', () => {
    let errors = {};
    let customer_name = component.objTransaction.controls['customer_name'];
    customer_name.setValue("Ketan");
    errors = customer_name.errors || {};
    expect(customer_name.valid).toBeTruthy();
  });

  it('address field validity', () => {
    let errors = {};
    let address = component.objTransaction.controls['address'];
    address.setValue("Test Adderess");
    errors = address.errors || {};
    expect(address.valid).toBeTruthy();
  });

  // required validation testing on phone number
  it('phone field validity', () => {
    let errors = {};
    let phone = component.objTransaction.controls['phone'];
    phone.setValue("123456789");
    errors = phone.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['numberOnly']).toBeFalsy();
    expect(phone.valid).toBeTruthy();
  });

  // required validation testing on transfer_amount
  it('transfer_amount field validity', () => {
    let errors = {};
    let transfer_amount = component.objTransaction.controls['transfer_amount'];
    transfer_amount.setValue("4000");
    errors = transfer_amount.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['numberOnly']).toBeFalsy();
    expect(transfer_amount.valid).toBeTruthy();
  });

  it('transfer_currency field validity', () => {
    let errors = {};
    let transfer_currency = component.objTransaction.controls['transfer_currency'];
    transfer_currency.setValue("INR");
    errors = transfer_currency.errors || {};
    expect(transfer_currency.valid).toBeTruthy();
  });

  it('beneficiary_bank field validity', () => {
    let errors = {};
    let beneficiary_bank = component.objTransaction.controls['beneficiary_bank'];
    beneficiary_bank.setValue("HDFC");
    errors = beneficiary_bank.errors || {};
    expect(beneficiary_bank.valid).toBeTruthy();
  });

  it('beneficiary_accno field validity', () => {
    let errors = {};
    let beneficiary_accno = component.objTransaction.controls['beneficiary_accno'];
    beneficiary_accno.setValue("343434234");
    errors = beneficiary_accno.errors || {};
    expect(beneficiary_accno.valid).toBeTruthy();
  });

  it('payment_details field validity', () => {
    let errors = {};
    let payment_details = component.objTransaction.controls['payment_details'];
    payment_details.setValue("Done");
    errors = payment_details.errors || {};
    expect(payment_details.valid).toBeTruthy();
  });



});
