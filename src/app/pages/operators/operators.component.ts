import { Component } from '@angular/core';
import {
  DescriptionPlusUlLinksComponent,
  HeaderPagesComponent,
} from '@shared/components/ui';
import { NavigationItem } from '@interfaces/global.interface';
import { NAVIGATION_ITEMS } from '@app/core/data/global.data';

@Component({
  selector: 'app-operators',
  imports: [HeaderPagesComponent, DescriptionPlusUlLinksComponent],
  template: `
    <app-header-pages
      [title]="title"
      [description]="description"
    ></app-header-pages>
    <app-description-plus-ul-links
      [description]="description"
      [navigationItems]="navigationItems"
    ></app-description-plus-ul-links>
  `,
})
export class OperatorsComponent {
  title: string = 'Operadores';
  description: string =
    'Un ejemplo básico de un contador usando interval de RxJS';

  navigationItems: NavigationItem[] = [];

  constructor() {
    this.navigationItems =
      NAVIGATION_ITEMS.find((item) => item.route === 'operators')?.subItems ??
      [];
  }
}
