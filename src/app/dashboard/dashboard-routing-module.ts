import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';
import { AuthGuard } from '../authentication/guards/auth.guard';

const routes: Routes = [
    {
        path: '', component: DashboardComponent,
        children: [
            { path: '', redirectTo: 'dashboard-listing' },
            {
                path: 'dashboard-listing',
                loadChildren: '../dashboard/components/dashboard-listing/dashboard-listing.module#DashboardListingModule',
                // canActivate: [AuthGuard]
            },
            {
                path: 'new-transaction',
                loadChildren: '../dashboard/components/dashboard-listing/components/new-transaction/new-transaction.module#NewTransactionModule',
                // canActivate: [AuthGuard]
            },
            {
                path: 'view-all-transaction',
                loadChildren: '../dashboard/components/dashboard-listing/components/view-all-transactions/view-all-transactions.module#ViewAllTransactionsModule',
                // canActivate: [AuthGuard]
            },
        ]

    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashBoardRoutingModule { }
