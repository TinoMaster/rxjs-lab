import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SupportedLanguages } from '@app/core/interfaces/global.interface';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private translate = inject(TranslateService);

  private translateSignal = toSignal(
    this.translate.onLangChange.pipe(
      map(() => this.translate.currentLang as SupportedLanguages)
    ),
    { initialValue: (this.translate.currentLang as SupportedLanguages) || 'en' }
  );

  getCurrentLanguage() {
    return this.translateSignal;
  }
}
