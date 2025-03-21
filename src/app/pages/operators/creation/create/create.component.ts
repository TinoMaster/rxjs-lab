import { Component, computed, inject } from '@angular/core';
import {
  DataPage,
  SupportedLanguages,
} from '@app/core/interfaces/global.interface';
import { LanguageService } from '@app/services';
import { RxjsPlaygroundComponent } from '@app/shared/components/rxjs-playground/rxjs-playground.component';
import { EN_CREATE, ES_CREATE, IT_CREATE } from './i18n';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [RxjsPlaygroundComponent],
  template: `
    <app-rxjs-playground
      [title]="pageData().title"
      [description]="pageData().description"
      [documentation]="pageData().documentation"
      [examples]="pageData().examples"
      [marbleDiagram]="pageData().marbleDiagram"
    />
  `,
})
export class CreateComponent {
  private languageService = inject(LanguageService);

  CREATE_I18N: Record<SupportedLanguages, DataPage> = {
    en: EN_CREATE,
    es: ES_CREATE,
    it: IT_CREATE,
  };

  pageData = computed(() => {
    const currentLang = this.languageService.getCurrentLanguage()();
    return this.CREATE_I18N[currentLang] || this.CREATE_I18N['es'];
  });
}
