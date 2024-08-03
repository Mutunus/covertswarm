import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/vulnerabilities-dashboard/components/dashboard-container/vulnerabilities-dashboard.component').then(mod => mod.VulnerabilitiesDashboardComponent)
  },
];
