import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'mf-sourcing',
    loadChildren: () =>
      import('mf-sourcing/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'mf-invoicing',
    loadChildren: () =>
      import('mf-invoicing/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'mf-auth',
    loadChildren: () =>
      import('mf-auth/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
