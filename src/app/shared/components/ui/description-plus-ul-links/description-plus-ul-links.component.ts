import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationItem } from '@app/core/interfaces/global.interface';

@Component({
  selector: 'app-description-plus-ul-links',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="description-links-container">
      <p class="description">
        {{ description }}
      </p>

      <nav class="navigation-list" *ngIf="navigationItems?.length">
        <ul class="primary-list">
          @for (item of navigationItems; track item.label) {
          <li>
            <a
              [routerLink]="item.route"
              class="nav-link"
              [class.parent]="item.subItems?.length"
              *ngIf="item.route; else noLink"
            >
              {{ item.label }}
            </a>
            <ng-template #noLink>
              <span class="nav-group">{{ item.label }}</span>
            </ng-template>

            <!-- Nested items -->
            @if(item?.subItems?.length){
            <ul class="secondary-list">
              @for (child of item.subItems; track child.route){
              <li>
                <a
                  [routerLink]="[item.route + '/' + child.route]"
                  class="nav-link"
                >
                  {{ child.label }}
                </a>
              </li>
              }
            </ul>
            }
          </li>
          }
        </ul>
      </nav>
    </div>
  `,
  styles: [
    `
      .description-links-container {
        padding: 1rem;
      }

      .description {
        margin-bottom: 1.5rem;
        line-height: 1.6;
        color: #333;
      }

      .navigation-list {
        margin-top: 1rem;
      }

      .primary-list,
      .secondary-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .primary-list > li {
        margin-bottom: 1rem;
      }

      .secondary-list {
        margin-left: 1.5rem;
        margin-top: 0.5rem;
      }

      .secondary-list > li {
        margin-top: 0.5rem;
      }

      .nav-link {
        text-decoration: none;
        color: #2563eb;
        transition: color 0.2s ease;
        display: inline-block;
      }

      .nav-link:hover {
        color: #1e40af;
        text-decoration: underline;
      }

      .nav-link.parent {
        font-weight: 500;
      }

      .nav-group {
        font-weight: 500;
        color: #4b5563;
      }
    `,
  ],
})
export class DescriptionPlusUlLinksComponent {
  @Input() description: string = '';
  @Input() navigationItems: NavigationItem[] = [];
}
