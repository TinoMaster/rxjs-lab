import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SupportedLanguages } from '@app/core/interfaces/global.interface';
import { LanguageService } from '@app/services/language.service';
import { TranslateService } from '@ngx-translate/core';

interface Language {
  code: SupportedLanguages;
  name: string;
  flag: string;
}

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatMenuModule, MatIconModule],
  template: `
    <button mat-button [matMenuTriggerFor]="menu" class="language-btn">
      <span class="flag">{{ getCurrentLanguageFlag() }}</span>
      <span class="lang-code">{{ currentLang() }}</span>
      <mat-icon>arrow_drop_down</mat-icon>
    </button>

    <mat-menu #menu="matMenu">
      @for (lang of languages; track lang.code) {
      <button
        mat-menu-item
        (click)="changeLanguage(lang.code)"
        [class.active]="currentLang() === lang.code"
      >
        <span class="flag">{{ lang.flag }}</span>
        <span class="lang-name">{{ lang.name }}</span>
      </button>
      }
    </mat-menu>
  `,
  styles: [
    `
      .language-btn {
        min-width: 0;
        padding: 0 8px;
        height: 36px;
      }
      .flag {
        font-size: 1.2em;
        margin-right: 8px;
      }
      .lang-code {
        text-transform: uppercase;
        margin-right: 4px;
      }
      .lang-name {
        margin-left: 8px;
      }
      .active {
        background: rgba(0, 0, 0, 0.04);
      }
    `,
  ],
})
export class LanguageSelectorComponent {
  private translate = inject(TranslateService);
  private languageService = inject(LanguageService);

  currentLang = this.languageService.getCurrentLanguage();

  languages: Language[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  ];

  getCurrentLanguageFlag(): string {
    return (
      this.languages.find((lang) => lang.code === this.currentLang())?.flag ||
      '🌐'
    );
  }

  changeLanguage(langCode: SupportedLanguages) {
    this.translate.use(langCode);
    this.languageService.setLanguage(langCode);
  }
}
