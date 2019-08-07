import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ViewAllTransactionService {

  constructor(private http: HttpClient) { }

  public getAllTransactionDetails(): Observable<any> {
    return this.http.get("https://my-json-server.typicode.com/ketanp-iprogrammer/view-all-transactions/transactions");
  }

}
	