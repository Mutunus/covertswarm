import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyVulnerabilitiesComponent } from './monthly-vulnerabilities.component';

describe('MonthlyVulnerabilitiesComponent', () => {
  let component: MonthlyVulnerabilitiesComponent;
  let fixture: ComponentFixture<MonthlyVulnerabilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyVulnerabilitiesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MonthlyVulnerabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
