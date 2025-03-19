import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-render-examples',
  standalone: true,
  imports: [CommonModule],
  template: `
    @for (example of examples; track example) {
    <div class="lg:bg-white lg:shadow-lg rounded-lg lg:p-6 p-0 mb-6">
      <h3 class="text-xl font-semibold mb-4 text-purple-700">
        Ejemplo {{ example }}: {{ title }}
      </h3>
      <div class="space-y-6">
        <!-- Demo del componente -->
        <div class="p-2 bg-white rounded-md shadow-sm text-xs md:text-sm lg:text-base">
          <ng-content select="[example-demo]"></ng-content>
        </div>

        <!-- Código fuente -->
        <div class="p-2 bg-white rounded-md shadow-sm">
          <ng-content select="[example-code]"></ng-content>
        </div>
      </div>
    </div>
    }
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class RenderExamplesComponent {
  @Input() exampleNumber: number = 1;
  @Input() title: string = '';
  @Input() description: string = '';

  get examples(): number[] {
    return Array.from({ length: this.exampleNumber }, (_, i) => i + 1);
  }
}
