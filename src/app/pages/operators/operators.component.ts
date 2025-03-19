import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NAVIGATION_ITEMS } from '@app/core/data/global.data';
import { NavigationItem } from '@interfaces/global.interface';
import {
  DescriptionPlusUlLinksComponent,
  HeaderPagesComponent,
} from '@shared/components/ui';

@Component({
  selector: 'app-operators',
  imports: [HeaderPagesComponent, DescriptionPlusUlLinksComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
