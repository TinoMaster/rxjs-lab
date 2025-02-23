export interface PageData {
  title: string;
  description: string;
  code: {
    typescript?: string;
    html?: string;
    css?: string;
  };
  fileName: string;
}
