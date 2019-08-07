import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LogoutComponent>, private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
  }

  /*
  Name Of Author : Ketan Pande
  Function Name : onYesClick()
  Description : This function will call, when we click on Yes button on logout dialog box.
                It will also clear the local storage and navigates back to login page.  
*/
  onYesClick(): void {
    localStorage.clear();
    this.toastr.success('Logout Successfully!');
    this.router.navigate(['/']);
    this.dialogRef.close();

  }

  /*
 Name Of Author : Ketan Pande
 Function Name : onNoClick()
 Description : This function will call, when we click on No button on logout dialog box.
               It will close the dialog box.
*/
  onNoClick(): void {
    this.dialogRef.close();
  }
}
