import { Route } from '@angular/router';
import { VulnerabilitiesDashboardComponent } from './features/vulnerabilities-dashboard/components/dashboard-container/vulnerabilities-dashboard.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    // TODO - lazy loading
    component: VulnerabilitiesDashboardComponent,
    path: 'dashboard',
  },
];
