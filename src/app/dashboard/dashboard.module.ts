import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardRoutingModule } from './dashboard-routing-module';

import { DashboardComponent } from './components/dashboard.component';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';



@NgModule({
  declarations: [DashboardComponent,HeaderComponent,FooterComponent],
  imports: [
    CommonModule,
    DashBoardRoutingModule
  ]
})
export class DashboardModule { }
