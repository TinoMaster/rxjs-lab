import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChevronDown,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { NAVIGATION_ITEMS } from '@data/global.data';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FontAwesomeModule,
  ],
})
export class MainLayoutComponent {
  public readonly NAVIGATION_ITEMS = NAVIGATION_ITEMS;

  public expandedItems = new Set<string>();

  public readonly chevronRight = faChevronRight;
  public readonly chevronDown = faChevronDown;

  toggleExpanded(route: string): void {
    if (this.expandedItems.has(route)) {
      this.expandedItems.delete(route);
    } else {
      this.expandedItems.add(route);
    }
  }

  isExpanded(route: string): boolean {
    return this.expandedItems.has(route);
  }
}
