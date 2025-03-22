import { Component, computed, inject, OnInit } from '@angular/core';
import {
  DataPage,
  SupportedLanguages,
} from '@app/core/interfaces/global.interface';
import { LanguageService } from '@app/services/language.service';
import { RxjsPlaygroundComponent } from '@shared/components/rxjs-playground/rxjs-playground.component';
import {
  EN_BASIC_OBSERVABLES,
  ES_BASIC_OBSERVABLES,
  IT_BASIC_OBSERVABLES,
} from './i18n';
import { MarkdownReaderService } from '@app/services';

@Component({
  selector: 'app-basic-observables',
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
export class BasicObservablesComponent implements OnInit {
  private languageService = inject(LanguageService);
  private markdownReaderService = inject(MarkdownReaderService);

  BASIC_OBSERVABLES_I18N: Record<SupportedLanguages, DataPage> = {
    en: EN_BASIC_OBSERVABLES,
    es: ES_BASIC_OBSERVABLES,
    it: IT_BASIC_OBSERVABLES,
  };

  ngOnInit(): void {
    const languages: SupportedLanguages[] = ['it', 'es', 'en'];
    /* Get the documentation for each language */
    languages.forEach((lang) => {
      this.markdownReaderService
        .getMarkdown(`/assets/markdown/pages/basic-observables/${lang}-doc.md`)
        .subscribe((res) => {
          console.log('res', res);
          this.BASIC_OBSERVABLES_I18N[lang].documentation = res.toString();
        });
    });
  }

  pageData = computed(() => {
    const currentLang = this.languageService.getCurrentLanguage()();
    console.log('currentLang', currentLang);
    return (
      this.BASIC_OBSERVABLES_I18N[currentLang] ||
      this.BASIC_OBSERVABLES_I18N['es']
    );
  });
}
