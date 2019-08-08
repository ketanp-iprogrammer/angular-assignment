import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { NewTransactionService } from './new-transaction.service';
// import { HttpClient, HttpHandler } from '@angular/common/http';

describe('NewTransactionService', () => {
  let injector: TestBed;
  let service: NewTransactionService;
  let httpMock: HttpTestingController;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [NewTransactionService]

  }));

  beforeEach(() => {
    injector = getTestBed();
    service = injector.get(NewTransactionService);
    httpMock = injector.get(HttpTestingController);
  })

  //running HttpTestingController#verify to make sure that there are no outstanding requests:
  afterEach(() => {
    httpMock.verify();
  });


  it('should be created', () => {
    const service: NewTransactionService = TestBed.get(NewTransactionService);
    expect(service).toBeTruthy();
  });

  describe('#newTransactions post REST API CALL', () => {

    beforeEach(() => {
      it('should return an Observable<any>', () => {
        const dummyTransactions = [
          { "customername" : "Prashant", "reference" : 12345, "customernumber": 10156, "transfer-amount" : 500, "customer-address" : "abc building", "customerphonenumber" : 7083244855, "transfer-currrency" : "INR", "beneficiary-bank" : "HDFC", "beneficiary-acc-no": 401837832, "payment-address" : "bhandarkar road,Pune" } 
        ];

        service.submitNewTransactionDetails(dummyTransactions).subscribe(transactionList => {
          expect(transactionList).toEqual(dummyTransactions);
        });

        const req = httpMock.expectOne('https://reqres.in/api/users');
        expect(req.request.method).toBe("POST");
        req.flush(dummyTransactions);
      });
    })

  });

  describe('#customer-json-info fetching customer info', () => {

    beforeEach(() => {
      it('should return an Observable<any>', () => {
        const dummyTransactions = [
          {
            "CUST_INFO_1": {
              "CUST_NO": "23421",
              "SHORT_NAME": "SHORT.NAME456",
              "IS_INDIVIDUAL": "Y",
              "NATIONALITY": "MU",
              "NATIONALITY_NUM": "480",
              "NATIONALITY_DESC": "MAURITIUS",
              "STREET_ADDR": "STREET-ADDR1",
              "ADDRESS_LINE2": [],
              "ADDRESS_LINE3": [],
              "TOWN_COUNTRY": "CUREPIPE",
              "POST_CODE": [],
              "COUNTRY": "COUNTRY",
              "COUNTRY_CODE": "MU",
              "COUNTRY_CODE_NUM": "480",
              "DESPATCH_CODE": "MA",
              "CONTACT_INFO_V7": {
                 "CONTACT_INFO_V7": {
                    "COMM_CHANNEL": "BY EMAIL",
                    "PHONE_LIST_V7": {
                       "PHONE_LIST_ITEM_V7": {
                          "PHONE": "1111111"
                       }
                    },
                    "OFFICE_PHONE_LIST_V7": {
                       "OFFICE_PHONE_LIST_ITEM_V7": {
                          "OFFICE_PHONE": []
                       }
                    },
                    "FAX_LIST_V7": {
                       "FAX_LIST_ITEM_V7": {
                          "FAX": []
                       }
                    },
                    "SMS_LIST_V7": {
                       "SMS_LIST_V7": {
                          "MOB_OPER_ISO": "48",
                          "MOB_OPER_CODE": "ORANGEMU",
                          "SMS_FORMATTED": "+230123456789",
                          "SMS_LIST_ITEM_V7": {
                             "SMS_LIST_ITEM_V7": {
                                "SMS": "+230123456789"
                             }
                          }
                       }
                    },
                    "EMAIL_LIST_V7": {
                       "EMAIL_LIST_ITEM_V7": {
                          "EMAIL": "THIS_IS_A_TEST@GMAIL.COM"
                       }
                    }
                 }
              }
           },
          }
        ];

        service.submitNewTransactionDetails(dummyTransactions).subscribe(transactionList => {
          expect(transactionList).toEqual(dummyTransactions);
        });

        const req = httpMock.expectOne('./assets/customer.json');
        expect(req.request.method).toBe("GET");
        req.flush(dummyTransactions);
      });
    })

  });

});
