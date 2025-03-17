import { Routes } from '@angular/router';
import { OperatorsComponent } from './operators.component';

export enum OPERATORS_ROUTES {
  CREATION = 'creation',
}

export const operatorsRoutes: Routes = [
  {
    path: '',
    component: OperatorsComponent,
  },
  {
    path: OPERATORS_ROUTES.CREATION,
    loadChildren: () =>
      import('./creation/creation.routes').then((m) => m.creationRoutes),
  },
];
