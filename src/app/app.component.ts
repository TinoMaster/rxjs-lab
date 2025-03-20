import { Component, inject } from '@angular/core';
import { MainLayoutComponent } from '@shared/layouts';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainLayoutComponent],
  template: `<app-main-layout></app-main-layout>`,
})
export class AppComponent {
  private languageService = inject(LanguageService);

  constructor() {
    this.languageService.initialize();
  }
}
