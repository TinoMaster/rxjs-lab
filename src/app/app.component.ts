import { Component } from '@angular/core';
import { MainLayoutComponent } from '@shared/layouts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainLayoutComponent],
  template: `<app-main-layout></app-main-layout>`,
})
export class AppComponent {
  title = 'rxjs_examples_angular';
}
