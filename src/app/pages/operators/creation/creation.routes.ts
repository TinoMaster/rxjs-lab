import { Routes } from '@angular/router';
import { CreationComponent } from './creation.component';

export enum CREATION_ROUTES {
  CREATE = 'create',
  OF = 'of',
}

export const creationRoutes: Routes = [
  {
    path: '',
    component: CreationComponent,
  },
  {
    path: CREATION_ROUTES.CREATE,
    loadComponent: () =>
      import('./create/create.component').then((m) => m.CreateComponent),
  },
  {
    path: CREATION_ROUTES.OF,
    loadComponent: () => import('./of/of.component').then((m) => m.OfComponent),
  },
];
