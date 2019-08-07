import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  submitted = false;
  releaseAuthData: Subscription;
  loader: boolean
  constructor(private formBuilder: FormBuilder, private router: Router, private authservice: AuthService,
    private toastr: ToastrService) { }

  /*
     Name Of Author : Ketan Pande
     Function Name : ngOnDestroy()
     Description : It is one of the lifecycle in angular. Unsubscribing all the subscribe values of 
                   observable here.  
   */
  ngOnDestroy() {
    if (this.releaseAuthData) { this.releaseAuthData.unsubscribe() };
  }

  /*
   Name Of Author : Ketan Pande
   Function Name : ngOnInit()
   Description : It is one of the lifecycle in angular. Initializing all the input form-fields
                 here.
 */
  ngOnInit() {
    this.createForm();
  }

  /*
 Name Of Author : Ketan Pande
 Function Name : createForm()
 Description : Initilization of all form-fields done here, with the required validation.  
                
*/
  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get loginFormData() { return this.loginForm.controls; }

  /*
Name Of Author : Ketan Pande
Function Name : login()
Description : This function will check the value of email address entered by user, if it 'eve.holt@reqres.in'
              then only it will allow to login otherwise , it will throw an error msg of Invalid Email. 
              This Login API will return the token only when we give the above mention email address.
              I have also stored the token in Local Storage, so that I can use it for implementing the 
              auth-guards in routing.
               
*/
  login() {
    if (this.loginForm.get('email').value === 'eve.holt@reqres.in') {
      this.loader = true;
      this.submitted = true;
      if (this.loginForm.invalid) {
        this.loader = false;
        return;
      }
      let objParams = {
        "email": this.loginForm.get('email').value,
        "password": this.loginForm.get('password').value
      }
      this.releaseAuthData = this.authservice.login(objParams).subscribe(data => {
        if (data && data.token) {
          this.loader = false;
          localStorage.setItem('token', data.token);
          this.toastr.success("Login Successfully!")
          this.router.navigate(['dashboard'])
        }
      }, error => {
        this.toastr.error(error);
      }, () => {
        // complete state of a subscribe cycle.
      });
    }
    else {
      this.submitted = true;
      if (this.loginForm.invalid) {
        this.loader = false;
        return;
      }
      if (this.loginForm.get('email').value) {
        this.toastr.error("Invalid Email Address!")
      }

    }
  }


}
