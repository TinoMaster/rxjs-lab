import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic-observables',
    loadComponent: () =>
      import('./pages/basic-observables/basic-observables.component').then(
        (m) => m.BasicObservablesComponent
      ),
  },
  {
    path: 'basic-operators',
    loadComponent: () =>
      import('./pages/basic-operators/basic-operators.component').then(
        (m) => m.BasicOperatorsComponent
      ),
  },
  {
    path: 'operators',
    loadChildren: () =>
      import('./pages/operators/operators.routes').then(
        (m) => m.operatorsRoutes
      ),
  },
  {
    path: '',
    redirectTo: 'basic-observables',
    pathMatch: 'full',
  },
];
