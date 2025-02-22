import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';
import { COUNTER_EXAMPLE } from './basic-observables.data';

@Component({
  selector: 'app-basic-observables',
  standalone: true,
  imports: [CommonModule, CodeBlockComponent],
  templateUrl: './basic-observables.component.html',
})
export class BasicObservablesComponent implements OnDestroy {
  counterValue: number = 0;
  isCounterRunning: boolean = false;
  private counterSubscription?: Subscription;

  // Ejemplos de código
  example = COUNTER_EXAMPLE;

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
