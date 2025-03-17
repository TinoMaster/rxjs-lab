import { Routes } from '@angular/router';

export enum PRINCIPAL_ROUTES {
  BASIC_OBSERVABLES = 'basic-observables',
  BASIC_OPERATORS = 'basic-operators',
  OPERATORS = 'operators',
}

export const routes: Routes = [
  {
    path: PRINCIPAL_ROUTES.BASIC_OBSERVABLES,
    loadComponent: () =>
      import('./pages/basic-observables/basic-observables.component').then(
        (m) => m.BasicObservablesComponent
      ),
  },
  {
    path: PRINCIPAL_ROUTES.BASIC_OPERATORS,
    loadComponent: () =>
      import('./pages/basic-operators/basic-operators.component').then(
        (m) => m.BasicOperatorsComponent
      ),
  },
  {
    path: PRINCIPAL_ROUTES.OPERATORS,
    loadChildren: () =>
      import('./pages/operators/operators.routes').then(
        (m) => m.operatorsRoutes
      ),
  },
  {
    path: '',
    redirectTo: PRINCIPAL_ROUTES.BASIC_OBSERVABLES,
    pathMatch: 'full',
  },
];
