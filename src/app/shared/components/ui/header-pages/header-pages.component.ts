import { Component, input, InputSignal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header-pages',
  imports: [TranslateModule],
  template: `
    <header>
      <h2 class="text-3xl font-bold text-gray-800">
        {{ title() | translate }}
      </h2>
      <p class="mt-2 text-gray-600">
        {{ description() | translate }}
      </p>
    </header>
  `,
  styles: ``,
})
export class HeaderPagesComponent {
  title: InputSignal<string> = input.required();
  description: InputSignal<string> = input.required();
}
