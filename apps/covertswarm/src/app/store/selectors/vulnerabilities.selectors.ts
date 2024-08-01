import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Vulnerability } from '@covertswarm/types';
import { VulnerabilitiesStateModel } from '../reducers/vulnerabilities.reducers';
import { SwarmChartColors } from '@covertswarm/charts';
import { DateTime } from 'luxon';

export const selectCisaVulnerabilitiesState =
  createFeatureSelector<VulnerabilitiesStateModel>('vulnerabilities');

export const selectVulnerabilities = createSelector(
  selectCisaVulnerabilitiesState,
  ({ cisaVulnerabilities: { vulnerabilities } }: VulnerabilitiesStateModel) =>
    vulnerabilities
)

export const selectVulnerabilitiesPerMonth = createSelector(
  selectVulnerabilities,
  (vulnerabilities: Vulnerability[]) => {
    const data: any = {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: [],
          borderColor: [],
          borderWidth: 1,
          hoverOffset: 40,
        },
      ],
    };
    const oldestDateAdded = vulnerabilities[0].dateAdded;
    const newestDateAdded =
      vulnerabilities[vulnerabilities.length - 1].dateAdded;
    const startOfOldestMonth =
      DateTime.fromISO(oldestDateAdded).startOf('month');
    const startOfNewestMonth =
      DateTime.fromISO(newestDateAdded).startOf('month');
    const monthsBetween = startOfNewestMonth.diff(startOfOldestMonth, 'months');
    const monthsDict = {
      [startOfOldestMonth.toString()]: [],
      [startOfNewestMonth.toString()]: [],
    };

    // Create a dictionary with key as start of month for each month between start and end month
    for (let i = 1; i < monthsBetween.months; i++) {
      const nextDate = startOfOldestMonth.plus({ month: i });
      monthsDict[nextDate.toString()] = [];
    }

    // Add vulnerabilities to the dictionary if their dateAdded is within that month
    vulnerabilities.reduce(
      (acc: { [key: string]: Vulnerability[] }, v: Vulnerability) => {
        const vulnerabilityDateAdded = DateTime.fromISO(v.dateAdded)
          .startOf('month')
          .toString();
        acc[vulnerabilityDateAdded].push(v);
        return acc;
      },
      monthsDict
    );

    let i = 0;
    for (let month in monthsDict) {
      const label = DateTime.fromISO(month).toFormat('LLLL yyyy');
      data.labels.push(label);
      data.datasets[0].data.push(monthsDict[month].length);
      data.datasets[0].backgroundColor.push('#fe5b17');
      data.datasets[0].borderColor.push('#222');
      i++;
    }

    return data;
  }
);

export const selectTopVendorProject = createSelector(
  selectVulnerabilities,
  (vulnerabilities: Vulnerability[], total: number = 10) => {
    const vendorProjectDict = vulnerabilities.reduce(
      (acc: { [key: string]: number }, v: Vulnerability) => {
        if (!acc[v.vendorProject]) {
          acc[v.vendorProject] = 1;
        } else acc[v.vendorProject] += 1;
        return acc;
      },
      {}
    );

    const entries = Object.entries(vendorProjectDict);

    return entries
      .sort((a, b) => b[1] - a[1])
      .slice(0, total)
      .reduce(
        (acc: { labels: string[]; datasets: any[] }, [label, total], i) => {
          acc.labels.push(label);
          const dataset = acc.datasets[0];
          dataset.data.push(total);
          dataset.backgroundColor.push(SwarmChartColors[i]);
          dataset.hoverBackgroundColor.push(SwarmChartColors[i]);
          return acc;
        },
        {
          labels: [],
          datasets: [
            {
              data: [],
              backgroundColor: [],
              hoverBackgroundColor: [],
              hoverOffset: 40,
            },
          ],
        }
      );
  }
);
