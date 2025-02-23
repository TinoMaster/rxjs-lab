import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileExtension',
  standalone: true,
})
export class FileExtensionPipe implements PipeTransform {
  private readonly extensionMap: { [key: string]: string } = {
    typescript: '.ts',
    javascript: '.js',
    html: '.html',
    css: '.css',
    scss: '.scss',
    less: '.less',
    json: '.json',
    xml: '.xml',
    markdown: '.md',
    python: '.py',
    java: '.java',
    ruby: '.rb',
    php: '.php',
  };

  transform(fileName: string, language: string): string {
    if (!fileName || !language) return fileName;

    const extension = this.extensionMap[language.toLowerCase()];
    if (!extension) return fileName;

    // Evitar duplicar la extensión si ya está presente
    const baseFileName = fileName.endsWith(extension)
      ? fileName.slice(0, -extension.length)
      : fileName;

    return `${baseFileName}${extension}`;
  }
}
