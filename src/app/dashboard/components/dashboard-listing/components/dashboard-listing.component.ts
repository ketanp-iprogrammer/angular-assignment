import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-listing',
  templateUrl: './dashboard-listing.component.html',
  styleUrls: ['./dashboard-listing.component.css']
})
export class DashboardListingComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  newTransaction(){
    this.router.navigate(['dashboard/new-transaction'])
  }

  viewAllTransaction(){
    this.router.navigate(['dashboard/view-all-transaction'])
  }

}
