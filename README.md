# angular-assignment

Note : This project is done in latest Angular Version i.e Angular 8

* Steps for running the project 

1.  Git clone using cmd (https://github.com/ketanp-iprogrammer/angular-assignment.git)
2. cd angular-assignment
3. npm install
4. ng serve

* Steps for running unit test cases : 

1. cd angular-assignment
2. npm install
3. ng test

* Steps for running e2e test cases : 

1. cd angular-assignment
2. npm install
3. ng e2e

* Points to be taken into consideration 

1. I have covered and solve all the points mention in the assignment.

2. I have used API for login, Credentials are :
                    {
                      "email": "eve.holt@reqres.in",
                       "password": "cityslicka"
                        } 

It will login only when you entered the above mention email on screen, so that it will return the token..

3. I have also used Auth Guard to protect the routes.

4. Implemented Lazy Loading in Project.

5. Created Directives like only-digits and only-alphabets for validation purpose.

6. Implemented Async Pipe in Project.

7. Created Generic Model file .

8. For Designing, I have used Bootstrap and Angular Material Both.

9. Also for View-All-Transaction API, I have created on my own using online REST API Provider, as the output which I want is not      there online.

10. As per the assignment, I have made only two fields required in new transaction form. 

11. I have applied maxlength of 2 to customer number filed in new transaction form.

13. Also For customer number field in New Transaction Form , you can enter customer number as : 
     i) 23421 ii) 23422 iii) 23423
     
     All this json objects are available in customer.json file.
     If you entered anyone of the above customer number then only, it will show you its respective fields

* Source For Online REST API's : 

1. Login POST API : 
      URL : https://reqres.in/api/login 
      Request Params : {
                      "email": "eve.holt@reqres.in",
                       "password": "cityslicka"
                        }  
      Response : {
                   "token": "QpwL5tke4Pnpja7X4"
                  }   

2. New Transaction POST API : 
      URL : https://reqres.in/api/users
      Request Params : {
                     "customername" : "Prashant",
                    "reference" : 12345,
                    "customernumber": 10156,
                     "transfer-amount" : 500,
                     "customer-address" : "abc building",
                     "customerphonenumber" : 7083244855,
                     "transfer-currrency" : "INR",
                       "beneficiary-bank" : "HDFC",
                       "beneficiary-acc-no": 401837832,
                       "payment-address" : "bhandarkar road,Pune"
                        }
        Response : {
                        "customername": "Prashant",
                        "reference": 12345,
                        "customernumber": 10156,
                        "transfer-amount": 500,
                        "customer-address": "abc building",
                        "customerphonenumber": 7083244855,
                        "transfer-currrency": "INR",
                        "beneficiary-bank": "HDFC",
                        "beneficiary-acc-no": 401837832,
                        "payment-address": "bhandarkar road,Pune",
                        "id": "498",
                        "createdAt": "2019-08-05T04:17:49.973Z"
                    }      
                    
3. View-All Transaction GET API :
         URL : https://my-json-server.typicode.com/ketan-pande/view-all-transactions/transactions
         Response : [
                        {
                          "customer_name": "Ketan",
                          "transfer_amount": "5000",
                          "transfer_currency": "INR",
                          "reference": "CUS201904059"
                        },
                        {
                          "customer_name": "Rahul",
                          "transfer_amount": "9000",
                          "transfer_currency": "INR",
                          "reference": "CUS201904057"
                        }
                    ]

                    
                    
                        



