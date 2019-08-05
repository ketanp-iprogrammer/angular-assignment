import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardListingRoutingModule } from './dashboard-listing-routing.module';
import { DashboardListingComponent } from './components/dashboard-listing.component';



@NgModule({
  declarations: [DashboardListingComponent],
  imports: [
    CommonModule,
    DashboardListingRoutingModule
  ]
})
export class DashboardListingModule { }
