import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { selectTopVendorProject } from '../../../../store/selectors/vulnerabilities.selectors';
import { Store } from '@ngrx/store';
import { AsyncPipe, NgIf } from '@angular/common';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'vendor-project-pie',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    this.data$ = this.store.select(selectTopVendorProject, this.total);
    this.options$ = this.data$.pipe(
      map((data) => {
        return {
          responsive: true,
          plugins: {
            title: {
              text: `Vendor Vulnerabilities`,
              display: true,
              color: '#fff',
              font: {
                size: 16,
              },
            },
            legend: {
              position: 'right',
              display: true,
              padding: 10,
              labels: {
                padding: 10,
                color: '#cdcdcd',
                boxWidth: 12,
              }
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
