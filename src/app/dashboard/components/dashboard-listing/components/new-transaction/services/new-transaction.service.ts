import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewTransactionService {

  constructor(private http: HttpClient) { }

  public getCustomerJsonData(): Observable<any> {
    return this.http.get("./assets/customer.json");
  }

  public submitNewTransactionDetails(objParams): Observable<any> {
    return this.http.post("https://reqres.in/api/users", objParams);
  }

}
