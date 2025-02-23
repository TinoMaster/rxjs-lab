import { PageData } from '@interfaces/global.interface';

export const BASIC_OBSERVABLES_PAGE_DATA: PageData = {
  title: 'Contador Simple',
  description: 'Un ejemplo básico de un contador usando interval de RxJS',
  fileName: 'basic-observables.component',
  code: {
    typescript: `import { Component, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-basic-observables',
  templateUrl: './basic-observables.component.html',
})
export class BasicObservablesComponent implements OnDestroy {
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
}`,
    html: `<div class="p-4 bg-gray-50 rounded-md">
  <p class="text-lg mb-2">
    Valor actual: <span class="font-semibold">{{ counterValue }}</span>
  </p>
  <button
    (click)="startCounter()"
    class="bg-purple-600 text-white px-6 py-2 rounded-md"
    [disabled]="isCounterRunning"
    [class.opacity-50]="isCounterRunning"
  >
    {{ isCounterRunning ? "Contando..." : "Iniciar Contador" }}
  </button>
</div>`,
  },
};
