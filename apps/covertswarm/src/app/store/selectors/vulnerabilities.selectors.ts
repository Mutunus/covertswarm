import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Vulnerability} from "@covertswarm/types";
import {VulnerabilitiesStateModel} from "../reducers/vulnerabilities.reducers";
import {SwarmChartColors} from "@covertswarm/charts";

export const selectVulnerabilities = createFeatureSelector<VulnerabilitiesStateModel>('vulnerabilities');

export const selectTopVendorProject = createSelector(
  selectVulnerabilities,
  ({cisaVulnerabilities}: VulnerabilitiesStateModel, total: number = 10) => {
    const vendorProjectDict = cisaVulnerabilities.vulnerabilities.reduce((acc: {[key: string]: number}, v: Vulnerability) => {
      if(!acc[v.vendorProject]) {
        acc[v.vendorProject] = 1;
      } else acc[v.vendorProject] += 1;
      return acc;
    }, {});

    const entries = Object.entries(vendorProjectDict);

    return entries
      .sort((a, b) => b[1] - a[1])
      .slice(0, total)
      .reduce((acc: {labels: string[], datasets: any[]}, [label, total], i) => {
        acc.labels.push(label);
        const dataset = acc.datasets[0];
        dataset.data.push(total);
        dataset.backgroundColor.push(SwarmChartColors[i]);
        dataset.hoverBackgroundColor.push(SwarmChartColors[i]);
        return acc;
      }, {labels: [], datasets: [{data: [], backgroundColor: [], hoverBackgroundColor: []}]})
  }
);
