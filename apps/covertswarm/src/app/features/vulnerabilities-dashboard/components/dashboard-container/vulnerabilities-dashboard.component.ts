import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CisaVulnerabilities } from '@covertswarm/types';
import { VulnerabilitiesService } from '../../../../services/vulnerabilities.service';
import { Store } from '@ngrx/store';
import { VulnerabilitiesActions } from '../../../../store/actions/vulnerabilties.actions';
import { VendorProjectPieComponent } from '../vendor-project-pie/vendor-project-pie.component';
import { MonthlyVulnerabilitiesComponent } from '../monthly-vulnerabilities/monthly-vulnerabilities.component';

@Component({
  selector: 'app-vulnerabilities-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    VendorProjectPieComponent,
    MonthlyVulnerabilitiesComponent,
  ],
  templateUrl: './vulnerabilities-dashboard.component.html',
  styleUrl: './vulnerabilities-dashboard.component.scss',
})
export class VulnerabilitiesDashboardComponent implements OnInit {
  private vulnerabilitesService = inject(VulnerabilitiesService);
  private store = inject(Store);

  ngOnInit() {
    this.vulnerabilitesService
      .getCisaVulnerabilities()
      .subscribe((vulnerabilities: CisaVulnerabilities) =>
        // TODO - use effect to get vulnerabilities and update store
        this.store.dispatch(
          VulnerabilitiesActions.retrievedVulnerabilitiesList(vulnerabilities)
        )
      );
  }
}
