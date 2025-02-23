import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header-pages',
  imports: [],
  template: `
    <header>
      <h2 class="text-3xl font-bold text-gray-800">{{ title() }}</h2>
      <p class="mt-2 text-gray-600">{{ description() }}</p>
    </header>
  `,
  styles: ``,
})
export class HeaderPagesComponent {
  title = input.required();
  description = input.required();
}
