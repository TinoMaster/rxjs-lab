import { Routes } from '@angular/router';
import { OperatorsComponent } from './operators.component';

export const operatorsRoutes: Routes = [
  {
    path: '',
    component: OperatorsComponent,
  },
  {
    path: 'creation',
    loadChildren: () =>
      import('./creation/creation.routes').then((m) => m.creationRoutes),
  },
];
