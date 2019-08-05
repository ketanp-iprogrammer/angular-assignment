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

  constructor( public dialogRef: MatDialogRef<LogoutComponent>, private toastr : ToastrService,
    private router : Router) { }

  ngOnInit() {
  }

  onYesClick(): void {
    localStorage.clear();
    this.toastr.success('Logout Successfully!');
    this.router.navigate(['/']);
    this.dialogRef.close(); 

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
