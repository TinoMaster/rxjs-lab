import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type SupportedLanguages = 'en' | 'es' | 'it';
export interface DataPage {
  title: string;
  description: string;
  documentation: string;
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
