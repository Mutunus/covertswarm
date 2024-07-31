import { createReducer, on } from '@ngrx/store';
import {CisaVulnerabilities} from "@covertswarm/types";
import {VulnerabilitiesActions} from "../actions/vulnerabilties.actions";

export interface VulnerabilitiesStateModel {
  loaded: boolean;
  cisaVulnerabilities: CisaVulnerabilities;
}

export const vulnerabilitiesReducer = createReducer(
  {},
  on(VulnerabilitiesActions.retrievedVulnerabilitiesList, (_state, cisaVulnerabilities) => {
    return {loaded: true, cisaVulnerabilities};
  })
);
