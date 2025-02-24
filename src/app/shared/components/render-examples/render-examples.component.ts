import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-render-examples',
  standalone: true,
  imports: [CommonModule],
  template: `
    @for (example of examples; track example) {
    <div class="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h3 class="text-xl font-semibold mb-4 text-purple-700">
        Ejemplo {{ example }}: {{ title }}
      </h3>
      <div class="space-y-6">
        <!-- Demo del componente -->
        <div class="p-4 bg-gray-50 rounded-md">
          <ng-content select="[example-demo]"></ng-content>
        </div>

        <!-- Código fuente -->
        <div class="mt-6 space-y-4">
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
