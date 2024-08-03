import { Component, inject, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { selectVulnerabilitiesPerMonth } from '../../../../store/selectors/vulnerabilities.selectors';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'monthly-vulnerabilities',
  standalone: true,
  imports: [BaseChartDirective, AsyncPipe],
  templateUrl: './monthly-vulnerabilities.component.html',
  styleUrl: './monthly-vulnerabilities.component.scss',
})
export class MonthlyVulnerabilitiesComponent implements OnInit {
  private store = inject(Store);

  // TODO - fix typing
  data$: Observable<any>;
  options$: Observable<any>;

  ngOnInit() {
    this.data$ = this.store.select(selectVulnerabilitiesPerMonth);
    this.options$ = of({
      responsive: true,
      scales: {
        x: {
          ticks: {
            font: {
              size: 10
            }
          }
        },
        y: {
          ticks: {
            font: {
              size: 10
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          text: 'Total Monthly New Threats',
          display: true,
          color: '#fff',
          padding: 10,
          font: {
            size: 16,
          },
        },
      },
    });
  }
}
