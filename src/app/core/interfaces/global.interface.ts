import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

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
