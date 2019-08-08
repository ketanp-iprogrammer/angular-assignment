import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllTransactionsComponent } from './view-all-transactions.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ViewAllTransactionsComponent', () => {
  let component: ViewAllTransactionsComponent;
  let fixture: ComponentFixture<ViewAllTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        RouterTestingModule,
        ToastrModule.forRoot({}),
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatCardModule,
        HttpClientTestingModule
      ],
      declarations: [ ViewAllTransactionsComponent ],
     
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
