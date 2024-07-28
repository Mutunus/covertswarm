import { createFeatureSelector } from '@ngrx/store';
import {CisaVulnerabilities} from "@covertswarm/types";

export const selectVulnerabilities = createFeatureSelector<CisaVulnerabilities>('vulnerabilities');
