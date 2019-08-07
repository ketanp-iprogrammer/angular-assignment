import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material';
import { LogoutComponent } from 'src/app/authentication/components/logout/logout.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  /*
 Name Of Author : Ketan Pande
 Function Name : logout()
 Description : This function will call, When we click on logout icon shown in the header section of the 
               page. It will trigger the Angular material dialog box and opens the logout component in it.
              
*/
  logout() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "400px";
    dialogConfig.height = "220px";
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(LogoutComponent, dialogConfig);
  }

}
