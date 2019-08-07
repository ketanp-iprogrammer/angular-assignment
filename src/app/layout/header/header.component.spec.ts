import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {MatDialogModule} from '@angular/material/dialog';
import { By } from '@angular/platform-browser';

fdescribe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [MatDialogModule],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
 


});
