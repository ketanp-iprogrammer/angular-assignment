import { TestBed, getTestBed } from '@angular/core/testing';
import { ViewAllTransactionService } from './view-all-transaction.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('ViewAllTransactionService', () => {
  let injector: TestBed;
  let service: ViewAllTransactionService;
  let httpMock: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [ViewAllTransactionService]

  }));

  beforeEach(() => {
    injector = getTestBed();
    service = injector.get(ViewAllTransactionService);
    httpMock = injector.get(HttpTestingController);
  })

  //running HttpTestingController#verify to make sure that there are no outstanding requests:
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: ViewAllTransactionService = TestBed.get(ViewAllTransactionService);
    expect(service).toBeTruthy();
  });

  describe('#getViewALlTransactions GET REST API', () => {

    beforeEach(() => {


      it('should return an Observable<any>', () => {
        const dummyTransactions = [
          {
            "customer_name": "Ketan",
            "transfer_amount": "5000",
            "transfer_currency": "INR",
            "reference": "CUS201904059"
          }
        ];

        service.getAllTransactionDetails().subscribe(transactionList => {
          expect(transactionList.length).toBe(5);
          expect(transactionList).toEqual(dummyTransactions);
        });

        const req = httpMock.expectOne('https://my-json-server.typicode.com/ketanp-iprogrammer/view-all-transactions/transactions');
        expect(req.request.method).toBe("GET");
        req.flush(dummyTransactions);
      });
    })

  });


});
