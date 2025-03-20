import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SupportedLanguages } from '@app/core/interfaces/global.interface';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private translate = inject(TranslateService);

  /**
   * Inicializa el servicio de idiomas
   */
  initialize(): void {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
      this.setLanguage(savedLanguage as SupportedLanguages);
    } else {
      this.setLanguage('es');
    }
  }

  private translateSignal = toSignal(
    this.translate.onLangChange.pipe(
      map(() => this.translate.currentLang as SupportedLanguages)
    ),
    { initialValue: (this.translate.currentLang as SupportedLanguages) || 'es' }
  );

  /**
   * Establece el idioma de la aplicación
   * @param lang - Código del idioma a establecer
   */
  setLanguage(lang: SupportedLanguages): void {
    localStorage.setItem('preferredLanguage', lang);
    this.translate.use(lang);
  }

  /**
   * Obtiene el idioma actual de la aplicación
   * @returns El código del idioma actual
   */
  getCurrentLanguage() {
    return this.translateSignal;
  }
}
