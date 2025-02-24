import {
  Component,
  Input,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileExtensionPipe } from '../../pipes/file-extension.pipe';
declare let Prism: any;

@Component({
  selector: 'app-code-block',
  standalone: true,
  imports: [CommonModule, FileExtensionPipe],
  template: `
    <h4 class="text-lg font-semibold text-gray-700 capitalize">
      Código {{ language }}
    </h4>

    <div class="bg-gray-900 rounded-lg overflow-hidden">
      <!-- Header con el nombre del archivo -->
      <div class="flex items-center justify-between px-4 py-2 bg-gray-800">
        <span class="text-sm text-gray-200">{{
          fileName | fileExtension : language
        }}</span>
        <span class="text-xs text-gray-400">{{ language }}</span>
      </div>
      <!-- Contenido del código -->
      <pre
        class="line-numbers"
      ><code #codeElement [class]="'language-' + language">{{ code }}</code></pre>
    </div>
  `,
  styleUrls: ['./code-block.component.css'],
})
export class CodeBlockComponent implements AfterViewInit {
  @Input() code: string = '';
  @Input() language: string = '';
  @Input() fileName: string = '';
  @ViewChild('codeElement') codeElement!: ElementRef;

  ngAfterViewInit() {
    this.highlightCode();
  }

  private highlightCode() {
    if (this?.codeElement?.nativeElement) {
      Prism.highlightElement(this.codeElement.nativeElement);
    }
  }
}
