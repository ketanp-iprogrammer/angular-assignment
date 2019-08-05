import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardListingComponent } from './components/dashboard-listing.component';

const routes: Routes = [
  { path: '', component: DashboardListingComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardListingRoutingModule { }
