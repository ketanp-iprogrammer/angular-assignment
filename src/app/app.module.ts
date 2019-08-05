import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
 
import { ToastrModule } from 'ngx-toastr';
import {MatDialogModule} from '@angular/material/dialog';
import { LogoutComponent } from './authentication/components/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() ,
    HttpClientModule,
    MatDialogModule

  ],
  entryComponents : [LogoutComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
