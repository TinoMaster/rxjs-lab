import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { CodeBlockComponent } from '@shared/components/code-block/code-block.component';
import { BASIC_OBSERVABLES_PAGE_DATA } from './basic-observables.data';
import { HeaderPagesComponent } from '@shared/components/ui';
import { PageData } from '@app/core/interfaces/global.interface';
import { RenderExamplesComponent } from "@shared/components/render-examples/render-examples.component";

@Component({
  selector: 'app-basic-observables',
  standalone: true,
  imports: [CommonModule, CodeBlockComponent, HeaderPagesComponent, RenderExamplesComponent],
  templateUrl: './basic-observables.component.html',
})
export class BasicObservablesComponent implements OnDestroy {
  pageData: PageData = BASIC_OBSERVABLES_PAGE_DATA;
  counterValue: number = 0;
  isRunning: boolean = false;
  private counterSubscription?: Subscription;

  toggleCounter(): void {
    if (this.isRunning) {
      this.counterSubscription?.unsubscribe();
      this.isRunning = false;
    } else {
      this.counterSubscription = interval(1000).subscribe(() => {
        this.counterValue++;
      });
      this.isRunning = true;
    }
  }

  ngOnDestroy(): void {
    this.counterSubscription?.unsubscribe();
  }
}
