import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutComponent } from './logout.component';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [MatDialogModule,ToastrModule.forRoot(),RouterModule,RouterTestingModule
      ],
      declarations: [ LogoutComponent ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
     ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call function on Yes button click', async(() => {
    spyOn(component, 'onYesClick');
  
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.onYesClick).toHaveBeenCalled();
    });
  }));

 

});
