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
  loader : boolean
  constructor(private formBuilder: FormBuilder, private router: Router, private authservice: AuthService,
    private toastr : ToastrService) { }


  ngOnDestroy() {
    if (this.releaseAuthData) { this.releaseAuthData.unsubscribe() };
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get loginFormData() { return this.loginForm.controls; }

  login() {
    this.loader = true;
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    let objParams = {
      "email":  "eve.holt@reqres.in", // intentionally setting the value of email, inorder to get token from REST API
      "password": this.loginForm.get('password').value
    } 
    this.releaseAuthData = this.authservice.login(objParams).subscribe(data => {
      if(data && data.token){
        this.loader = false;
        localStorage.setItem('token',data.token);
        this.toastr.success("Login Successfully!")
        this.router.navigate(['dashboard'])
      }
    }, error => {
      this.toastr.error(error);
    }, () => {
      // complete state of a subscribe cycle.
    });
    
  }


}
