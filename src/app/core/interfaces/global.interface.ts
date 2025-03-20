import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type SupportedLanguages = 'en' | 'es' | 'it';
export interface DataPage {
  title: string;
  description: string;
  fullDescription: string;
  commonUses: string[];
  examples: Example[];
  marbleDiagram?: string;
}

export interface Example {
  id: string;
  title: string;
  description: string;
  code: string;
}

/* pendiente a borra luego de la migración a la nueva interfaz */
export interface PageData {
  numberOfExamples?: number;
  title: string;
  description: string;
  code: {
    typescript?: string;
    html?: string;
    css?: string;
  };
  fileName: string;
}

export interface NavigationItem {
  label: string;
  route: string;
  icon?: IconDefinition;
  subItems?: NavigationItem[];
}

export interface ConsoleLogTemplate {
  id: number;
  content: string;
  type?: 'log' | 'error' | 'warn' | 'info';
}
