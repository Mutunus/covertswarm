import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CisaVulnerabilities} from "@covertswarm/types";
import {VulnerabilitiesService} from "../../services/vulnerabilities.service";
import {Store} from "@ngrx/store";
import {VulnerabilitiesActions} from "../../store/actions/vulnerabilties.actions";
import {Observable} from "rxjs";
import {selectVulnerabilities} from "../../store/selectors/vulnerabilities.selectors";

@Component({
  selector: 'app-vulnerabilities-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vulnerabilities-dashboard.component.html',
  styleUrl: './vulnerabilities-dashboard.component.scss',
})
export class VulnerabilitiesDashboardComponent implements OnInit {
  public vulnerabilities$: Observable<CisaVulnerabilities>;

  private vulnerabilitesService = inject(VulnerabilitiesService);
  private store = inject(Store);

  ngOnInit() {
    this.vulnerabilities$ = this.store.select(selectVulnerabilities);
    this.vulnerabilitesService.getCisaVulnerabilities().subscribe((vulnerabilities: CisaVulnerabilities) =>
      this.store.dispatch(VulnerabilitiesActions.retrievedVulnerabilitiesList(vulnerabilities))
    );

  }

}
