import { HttpClient, provideHttpClient } from '@angular/common/http';
import { importProvidersFrom, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { AppComponent } from './app/app.component';
import { appConfig, createTranslateLoader } from './app/app.config';

const savedLanguage = localStorage.getItem('language') ?? 'it';

console.log('savedLanguage', savedLanguage);

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers,
    provideHttpClient(),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient],
        },
      })
    ),
  ],
})
  .then(() => {
    const translate = inject(TranslateService);
    translate.setDefaultLang(savedLanguage);
    translate.use(savedLanguage);
  })
  .catch((err) => console.error(err));
