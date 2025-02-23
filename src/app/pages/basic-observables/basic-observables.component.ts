import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { CodeBlockComponent } from '@shared/components';
import { BASIC_OBSERVABLES_PAGE_DATA } from './basic-observables.data';
import { HeaderPagesComponent } from '../../shared/components/ui/header-pages/header-pages.component';
import { PageData } from '@app/core/interfaces/global.interface';

@Component({
  selector: 'app-basic-observables',
  standalone: true,
  imports: [CommonModule, CodeBlockComponent, HeaderPagesComponent],
  templateUrl: './basic-observables.component.html',
})
export class BasicObservablesComponent implements OnDestroy {
  pageData!: PageData;

  constructor() {
    this.pageData = BASIC_OBSERVABLES_PAGE_DATA;
  }

  counterValue: number = 0;
  isCounterRunning: boolean = false;
  private counterSubscription?: Subscription;

  startCounter() {
    if (this.isCounterRunning) return;

    this.isCounterRunning = true;
    this.counterValue = 0;

    const counter$ = interval(1000).pipe(take(5));

    this.counterSubscription = counter$.subscribe({
      next: (value) => {
        this.counterValue = value + 1;
      },
      complete: () => {
        this.isCounterRunning = false;
      },
    });
  }

  ngOnDestroy() {
    this.counterSubscription?.unsubscribe();
  }
}
