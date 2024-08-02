import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CisaVulnerabilities } from '@covertswarm/types';
import { VulnerabilitiesService } from '../../../../services/vulnerabilities.service';
import { Store } from '@ngrx/store';
import { VulnerabilitiesActions } from '../../../../store/actions/vulnerabilties.actions';
import { VendorProjectPieComponent } from '../vendor-project-pie/vendor-project-pie.component';
import { MonthlyVulnerabilitiesComponent } from '../monthly-vulnerabilities/monthly-vulnerabilities.component';
import { VulnerabilitiesTableComponent } from '../vulnerabilities-table/vulnerabilities-table.component';
import { selectCisaVulnerabilitiesLoading } from '../../../../store/selectors/vulnerabilities.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vulnerabilities-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    VendorProjectPieComponent,
    MonthlyVulnerabilitiesComponent,
    VulnerabilitiesTableComponent,
  ],
  templateUrl: './vulnerabilities-dashboard.component.html',
  styleUrl: './vulnerabilities-dashboard.component.scss',
})
export class VulnerabilitiesDashboardComponent implements OnInit {
  public loaded$: Observable<boolean>;
  private vulnerabilitesService = inject(VulnerabilitiesService);
  private store = inject(Store);

  ngOnInit() {
    this.loaded$ = this.store.select(selectCisaVulnerabilitiesLoading);
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
