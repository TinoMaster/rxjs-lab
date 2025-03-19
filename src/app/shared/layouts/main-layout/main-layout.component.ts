import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChevronDown,
  faChevronRight,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { NAVIGATION_ITEMS } from '@data/global.data';
import { TranslateModule } from '@ngx-translate/core';

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
    TranslateModule,
  ],
})
export class MainLayoutComponent {
  public readonly NAVIGATION_ITEMS = NAVIGATION_ITEMS;

  public expandedItems = new Set<string>();
  public isMobileMenuOpen = false;

  public readonly chevronRight = faChevronRight;
  public readonly chevronDown = faChevronDown;
  public readonly menuIcon = faBars;
  public readonly closeIcon = faXmark;

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

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
