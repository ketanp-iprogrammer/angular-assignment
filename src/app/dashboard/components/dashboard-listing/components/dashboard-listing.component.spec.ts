import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardListingComponent } from './dashboard-listing.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
describe('DashboardListingComponent', () => {
  let component: DashboardListingComponent;
  let fixture: ComponentFixture<DashboardListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [RouterModule,RouterTestingModule],
      declarations: [ DashboardListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
