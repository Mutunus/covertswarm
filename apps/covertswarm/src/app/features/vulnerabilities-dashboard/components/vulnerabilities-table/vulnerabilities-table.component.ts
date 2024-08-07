import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectVulnerabilities } from '../../../../store/selectors/vulnerabilities.selectors';
import { AsyncPipe, formatDate } from '@angular/common';

@Component({
  selector: 'vulnerabilities-table',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AgGridAngular, AsyncPipe],
  templateUrl: './vulnerabilities-table.component.html',
  styleUrl: './vulnerabilities-table.component.scss',
})
export class VulnerabilitiesTableComponent implements OnInit {
  private store = inject(Store);
  public data$: Observable<any>;
  public paginationPageSizeSelector = [50, 100, 200];
  public colDefs: ColDef[] = [
    { field: 'cveID', flex: 1 },
    { field: 'vendorProject', flex: 1 },
    { field: 'product', flex: 1 },
    {
      field: 'dateAdded',
      flex: 1,
      valueFormatter: (p) => formatDate(p.value, 'dd/MM/yyyy', 'en-US'),
    },
    { field: 'shortDescription', flex: 5, wrapText: true, autoHeight: true },
  ];

  ngOnInit() {
    this.data$ = this.store.select(selectVulnerabilities);
  }
}
