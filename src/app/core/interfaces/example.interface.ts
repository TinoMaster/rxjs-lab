export interface CodeExample {
  title: string;
  description: string;
  code: {
    typescript?: string;
    html?: string;
    css?: string;
  };
  fileName: string;
}
