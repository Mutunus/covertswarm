import { createActionGroup, props } from '@ngrx/store';
import { CisaVulnerabilities } from '@covertswarm/types';

export const VulnerabilitiesActions = createActionGroup({
  source: 'CISA Vulnerabilities API',
  events: {
    'Retrieved Vulnerabilities List': props<CisaVulnerabilities>(),
  },
});
