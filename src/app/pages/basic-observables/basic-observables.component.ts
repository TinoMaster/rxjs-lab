import { Component, computed, inject } from '@angular/core';
import { TranslationService } from '@app/services/helpers/translation.service';
import { RxjsPlaygroundComponent } from '@shared/components/rxjs-playground/rxjs-playground.component';
import { BASIC_OBSERVABLES_I18N } from './basic-observables.data';

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
  private translationService = inject(TranslationService);

  pageData = computed(() => {
    const currentLang = this.translationService.getCurrentLanguage()();
    return BASIC_OBSERVABLES_I18N[currentLang] || BASIC_OBSERVABLES_I18N['en'];
  });
}
