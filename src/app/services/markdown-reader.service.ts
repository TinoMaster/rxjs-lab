import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MarkdownReaderService {
  private http = inject(HttpClient);

  getMarkdown(path: string) {
    return this.http.get(path, { responseType: 'text' });
  }
}
