import { HttpClient, provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { AppComponent } from './app/app.component';
import { appConfig, createTranslateLoader } from './app/app.config';

const savedLanguage = localStorage.getItem('preferredLanguage') ?? 'es';

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers,
    provideHttpClient(),
    importProvidersFrom(
      BrowserModule,
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
  .then((appRef) => {
    const translate = appRef.injector.get(TranslateService);
    translate.setDefaultLang(savedLanguage);
    translate.use(savedLanguage);
  })
  .catch((err) => console.error(err));
