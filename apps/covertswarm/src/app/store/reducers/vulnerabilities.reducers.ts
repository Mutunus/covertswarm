import { createReducer, on } from '@ngrx/store';
import {CisaVulnerabilities} from "@covertswarm/types";
import {VulnerabilitiesActions} from "../actions/vulnerabilties.actions";

export const initialState: { loaded: boolean, cisaVulnerabilities?: CisaVulnerabilities } = { loaded: false };

export const vulnerabilitiesReducer = createReducer(
  initialState,
  on(VulnerabilitiesActions.retrievedVulnerabilitiesList, (_state, cisaVulnerabilities) => {
    console.log(cisaVulnerabilities)
    return {loaded: true, cisaVulnerabilities};
  })
);
