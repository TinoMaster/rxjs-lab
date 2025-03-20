import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '@app/services/language.service';
import { RxjsPlaygroundComponent } from '@shared/components/rxjs-playground/rxjs-playground.component';
import {
  DataPage,
  SupportedLanguages,
} from '@app/core/interfaces/global.interface';
import { EN_BASIC_OBSERVABLES } from './i18n/en';
import { ES_BASIC_OBSERVABLES } from './i18n/es';
import { IT_BASIC_OBSERVABLES } from './i18n/it';

@Component({
  selector: 'app-basic-observables',
  standalone: true,
  imports: [RxjsPlaygroundComponent],
  template: `
    <app-rxjs-playground
      [title]="pageData().title"
      [description]="pageData().description"
      [fullDescription]="pageData().fullDescription"
      [commonUses]="pageData().commonUses"
      [examples]="pageData().examples"
      [marbleDiagram]="pageData().marbleDiagram"
    />
  `,
})
export class BasicObservablesComponent {
  private languageService = inject(LanguageService);

  BASIC_OBSERVABLES_I18N: Record<SupportedLanguages, DataPage> = {
    en: EN_BASIC_OBSERVABLES,
    es: ES_BASIC_OBSERVABLES,
    it: IT_BASIC_OBSERVABLES,
  };

  pageData = computed(() => {
    const currentLang = this.languageService.getCurrentLanguage()();
    console.log('currentLang', currentLang);
    return (
      this.BASIC_OBSERVABLES_I18N[currentLang] ||
      this.BASIC_OBSERVABLES_I18N['es']
    );
  });
}
