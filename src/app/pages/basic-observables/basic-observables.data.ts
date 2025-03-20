import { DataPage, SupportedLanguages } from '@interfaces/global.interface';
import { EN_BASIC_OBSERVABLES } from './i18n/en';
import { ES_BASIC_OBSERVABLES } from './i18n/es';
import { IT_BASIC_OBSERVABLES } from './i18n/it';

export const BASIC_OBSERVABLES_I18N: Record<SupportedLanguages, DataPage> = {
  en: EN_BASIC_OBSERVABLES,
  es: ES_BASIC_OBSERVABLES,
  it: IT_BASIC_OBSERVABLES,
};
