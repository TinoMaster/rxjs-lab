import { Routes } from '@angular/router';
import { CreationComponent } from './creation.component';

export const creationRoutes: Routes = [
  {
    path: '',
    component: CreationComponent,
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./create/create.component').then((m) => m.CreateComponent),
  },
  {
    path: 'of',
    loadComponent: () => import('./of/of.component').then((m) => m.OfComponent),
  },
];
