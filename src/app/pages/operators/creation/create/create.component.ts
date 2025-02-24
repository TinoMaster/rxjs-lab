import { Component, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { ConsoleSimulatorComponent } from '@shared/components/ui';
import { ConsoleLogTemplate, PageData } from '@interfaces/global.interface';
import { CREATE_PAGE_DATA } from './create-component.data';
import { HeaderPagesComponent } from '../../../../shared/components/ui/header-pages/header-pages.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ConsoleSimulatorComponent, HeaderPagesComponent],
  templateUrl: './create.component.html',
  styles: [
    `
      :host {
        display: block;
        padding: 1rem;
      }
    `,
  ],
})
export class CreateComponent implements OnDestroy {
  consoleLogs: Array<ConsoleLogTemplate> = [];
  private logCounter = 0;
  subscribe: Subscription;

  pageData!: PageData;

  hello = new Observable((observer: Observer<string>) => {
    observer.next('Hello');
    observer.next('World');
    observer.complete();
  });

  constructor() {
    this.pageData = CREATE_PAGE_DATA;

    this.subscribe = this.hello.subscribe({
      next: (val) => {
        this.addLog(val);
        console.log(val);
      },
      complete: () => {
        this.addLog('Observable completed', 'info');
        console.log('Observable completed');
      },
      error: (err) => {
        this.addLog(err, 'error');
        console.error(err);
      },
    });
  }

  private addLog(
    content: string,
    type: 'log' | 'error' | 'warn' | 'info' = 'log'
  ) {
    this.consoleLogs.push({
      id: this.logCounter++,
      content,
      type,
    });
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
