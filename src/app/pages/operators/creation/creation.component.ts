import { Component } from '@angular/core';
import { DescriptionPlusUlLinksComponent } from '../../../shared/components/ui/description-plus-ul-links/description-plus-ul-links.component';
import { NavigationItem } from '@app/core/interfaces/global.interface';
import { NAVIGATION_ITEMS } from '@app/core/data/global.data';
import { HeaderPagesComponent } from '../../../shared/components/ui/header-pages/header-pages.component';

@Component({
  selector: 'app-creation',
  imports: [DescriptionPlusUlLinksComponent, HeaderPagesComponent],
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
  styles: [],
})
export class CreationComponent {
  title = 'Creation';
  description = 'Create an operator';
  navigationItems: NavigationItem[] = [];

  constructor() {
    const creationItem = NAVIGATION_ITEMS.find(
      (item) => item.route === 'operators'
    )?.subItems?.find((subItem) => subItem.route === 'creation');

    this.navigationItems = creationItem?.subItems ?? [];
  }
}
