import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let component1: HeaderComponent;

  let component2: FooterComponent;

  let headerComponent: HeaderComponent;
  let footerComponent: FooterComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let fixture1: ComponentFixture<HeaderComponent>;

  let fixture2: ComponentFixture<FooterComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [RouterModule,RouterTestingModule,MatDialogModule],
      declarations: [ DashboardComponent,HeaderComponent,FooterComponent ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
     ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    fixture1 = TestBed.createComponent(HeaderComponent);
    component1 = fixture1.componentInstance;
    fixture1.detectChanges();

    fixture2 = TestBed.createComponent(FooterComponent);
    component2 = fixture2.componentInstance;
    fixture2.detectChanges();


  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call header component', () => {
    expect(headerComponent).toBeFalsy();
  });

  it('should call footer component', () => {
    expect(footerComponent).toBeFalsy();
  });

});
