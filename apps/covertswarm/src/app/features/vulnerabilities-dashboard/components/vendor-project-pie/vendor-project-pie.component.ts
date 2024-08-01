import { Component, inject, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { selectTopVendorProject } from '../../../../store/selectors/vulnerabilities.selectors';
import { Store } from '@ngrx/store';
import { AsyncPipe, NgIf } from '@angular/common';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'vendor-project-pie',
  standalone: true,
  imports: [NgIf, BaseChartDirective, AsyncPipe],
  templateUrl: './vendor-project-pie.component.html',
  styleUrl: './vendor-project-pie.component.scss',
})
export class VendorProjectPieComponent implements OnInit {
  // TODO - fix typing
  public data$: Observable<any>;
  public options$: Observable<any>;

  private store = inject(Store);
  private total = 10;

  ngOnInit() {
    this.data$ = this.store.select(selectTopVendorProject, 10);
    this.options$ = this.data$.pipe(
      map((data) => {
        return {
          responsive: true,
          plugins: {
            title: {
              text: `Top ${this.total} Vendor Vulnerabilities`,
              display: true,
              color: '#222',
              font: {
                size: 24,
              },
            },
            legend: {
              position: 'bottom',
            },
            tooltip: {
              callbacks: {
                label: (tooltipItem: any) => {
                  let label = data.labels[tooltipItem.dataIndex];
                  let value =
                    data.datasets[tooltipItem.datasetIndex].data[
                      tooltipItem.dataIndex
                    ];
                  return ` ${label}: ${value}`;
                },
              },
            },
          },
        };
      })
    );
  }
}
