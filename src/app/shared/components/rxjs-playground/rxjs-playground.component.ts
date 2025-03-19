import {
  Component,
  Input,
  NgZone,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { HighlightModule } from 'ngx-highlightjs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  Observable,
  Subscription,
  interval,
  fromEvent,
  Subject,
  BehaviorSubject,
  ReplaySubject,
} from 'rxjs';
import {
  take,
  map,
  debounceTime,
  tap,
  filter,
  mergeMap,
  switchMap,
  catchError,
} from 'rxjs/operators';
import { input, signal } from '@angular/core';

export interface RxJSExample {
  id: string;
  title: string;
  description: string;
  code: string;
  marbleDiagram?: string;
}

@Component({
  selector: 'app-rxjs-playground',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    HighlightModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
  ],
  template: `
    <mat-card class="playground-container">
      <mat-card-header class="!bg-purple-50 !p-10 rounded-t-lg">
        <mat-card-title class="!text-2xl !font-bold !text-purple-800">{{
          title()
        }}</mat-card-title>
        <mat-card-subtitle class="!text-purple-600 !mt-2">{{
          description()
        }}</mat-card-subtitle>
      </mat-card-header>

      <mat-card-content class="!p-0">
        <mat-tab-group
          (selectedIndexChange)="onTabChange($event)"
          class="rxjs-tabs"
          animationDuration="200ms"
        >
          <!-- Documentazione-->
          <mat-tab>
            <ng-template mat-tab-label>
              <mat-icon class="mr-2">description</mat-icon>
              <span>Documentazione</span>
            </ng-template>
            <div class="doc-section">
              <div class="mb-8">
                <h3 class="!text-xl !font-semibold !text-purple-700 !mb-3">
                  Descrizione
                </h3>
                <p class="!text-gray-700 !leading-relaxed">
                  {{ fullDescription() }}
                </p>
              </div>

              <div class="mb-8">
                <h3 class="!text-xl !font-semibold !text-purple-700 !mb-3">
                  Casi di uso comuni
                </h3>
                <ul class="!list-disc !pl-6 !space-y-2">
                  <li *ngFor="let use of commonUses()" class="!text-gray-700">
                    {{ use }}
                  </li>
                </ul>
              </div>

              <div class="mb-8" *ngIf="marbleDiagram()">
                <h3 class="!text-xl !font-semibold !text-purple-700 !mb-3">
                  Diagramma di mármol
                  <mat-icon
                    class="align-middle ml-2 text-purple-500 cursor-help"
                    matTooltip="I diagrammi di mármol sono una rappresentazione visiva del flusso di dati in RxJS"
                    >help_outline</mat-icon
                  >
                </h3>
                <div class="marble-diagram bg-white p-4 rounded-lg shadow-sm">
                  <img
                    [src]="marbleDiagram()"
                    [alt]="title() + ' marble diagram'"
                    class="max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </mat-tab>

          <!-- Ejemplos -->
          <mat-tab>
            <ng-template mat-tab-label>
              <mat-icon class="mr-2">code</mat-icon>
              <span>Esempi</span>
            </ng-template>
            <div class="doc-section">
              <mat-tab-group
                class="!p-0"
                (selectedIndexChange)="onTabChange($event)"
              >
                <mat-tab
                  *ngFor="let example of examples()"
                  [label]="example.title"
                >
                  <div class="flex flex-col lg:flex-row gap-8 p-4">
                    <div class="code-section">
                      <div
                        class="bg-gray-800 text-white p-2 rounded-t-lg flex items-center"
                      >
                        <mat-icon class="mr-2">terminal</mat-icon>
                        <span>{{ example.title }}</span>
                      </div>
                      <pre
                        class="m-0"
                      ><code [highlight]="example.code" [language]="'typescript'"></code></pre>
                    </div>
                    <div class="interaction-section">
                      <p class="text-gray-600 mb-4">
                        {{ example.description }}
                      </p>
                      <button
                        mat-raised-button
                        color="primary"
                        (click)="runExample(example)"
                        class="mb-4 w-full"
                      >
                        <mat-icon class="mr-2">play_arrow</mat-icon>
                        Esegui esempio
                      </button>
                      <div class="console-output">
                        <div
                          class="bg-gray-800 text-white p-2 rounded-t-lg flex items-center"
                        >
                          <mat-icon class="mr-2">output</mat-icon>
                          <span>Console</span>
                        </div>
                        <pre
                          class="m-0 p-4 bg-gray-900 rounded-b-lg text-white min-h-[100px] overflow-auto whitespace-pre-wrap"
                          >{{ getConsoleContent(example.id) }}</pre
                        >
                      </div>
                    </div>
                  </div>
                </mat-tab>
              </mat-tab-group>
            </div>
          </mat-tab>

          <!-- Ejercicios -->
          <mat-tab>
            <ng-template mat-tab-label>
              <mat-icon class="mr-2">fitness_center</mat-icon>
              <span>Esercizi</span>
            </ng-template>
            <div class="exercises-section p-4">
              <div class="bg-purple-50 rounded-lg p-6">
                <h3 class="text-xl font-semibold text-purple-700 mb-4">
                  <mat-icon class="align-middle mr-2">school</mat-icon>
                  Esercizi pratici
                </h3>
                <p class="!text-gray-600 !mb-4">
                  Pratica ciò che hai imparato con questi esercizi interattivi.
                </p>
                <!-- Esercizi -->
                <div class="text-center py-8">
                  <mat-icon class="text-6xl text-purple-300"
                    >construction</mat-icon
                  >
                  <p class="!text-purple-600 !mt-4">Prossimamente...</p>
                </div>
              </div>
            </div>
          </mat-tab>
        </mat-tab-group>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      .playground-container {
        border: none;
        height: 100%;
        position: relative;
        overflow: auto;
      }

      .rxjs-tabs {
        min-height: 400px;
      }

      .doc-section {
        padding: 2rem 1rem;
        max-width: 900px;
        margin: 0 auto;
      }

      .code-section {
        border-radius: 0.5rem;
        overflow: hidden;
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1),
          0 1px 2px -1px rgb(0 0 0 / 0.1);
      }

      .console-output {
        border-radius: 0.5rem;
        overflow: hidden;
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1),
          0 1px 2px -1px rgb(0 0 0 / 0.1);
      }

      :host ::ng-deep {
        .mat-mdc-tab-body-wrapper {
          height: 100%;
        }

        .mat-mdc-tab-group {
          height: 100%;
        }

        .hljs {
          background: #1e1e1e !important;
          padding: 1rem;
          border-radius: 0;
        }
      }
    `,
  ],
})
export class RxjsPlaygroundComponent implements OnDestroy {
  title = input.required<string>();
  description = input.required<string>();
  fullDescription = input.required<string>();
  commonUses = input<string[]>([]);
  examples = input<RxJSExample[]>([]);
  marbleDiagram = input<string | undefined>();

  private consoleState = signal<Map<string, string[]>>(new Map());
  private activeSubscriptions = signal<Map<string, Subscription[]>>(new Map());

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {}

  getConsoleContent(exampleId: string): string {
    const outputs = this.consoleState().get(exampleId) || [];
    return outputs.join('\n');
  }

  runExample(example: RxJSExample) {
    this.cleanupSubscriptions(example.id);

    // Guardar las referencias originales de console
    const originalConsoleLog = console.log;
    const originalConsoleError = console.error;

    this.consoleState.update((current) => {
      const newState = new Map(current);
      newState.set(example.id, []);
      return newState;
    });

    try {
      // Sobreescribir console.log para capturar todos los mensajes
      console.log = (...args) => {
        this.addToConsole(example.id, args.join(' '));
        originalConsoleLog.apply(console, args);
      };

      console.error = (...args) => {
        this.addToConsole(example.id, '❌ ' + args.join(' '));
        originalConsoleError.apply(console, args);
      };

      const codeToExecute = this.prepareCodeForExecution(example.code);

      const executeCode = new Function(
        'Observable',
        'interval',
        'fromEvent',
        'Subject',
        'BehaviorSubject',
        'ReplaySubject',
        'take',
        'map',
        'debounceTime',
        'tap',
        'filter',
        'mergeMap',
        'switchMap',
        'catchError',
        'addToConsole',
        'trackSubscription',
        'restoreConsole',
        codeToExecute
      );

      this.ngZone.run(() => {
        executeCode.call(
          this,
          Observable,
          interval,
          fromEvent,
          Subject,
          BehaviorSubject,
          ReplaySubject,
          take,
          map,
          debounceTime,
          tap,
          filter,
          mergeMap,
          switchMap,
          catchError,
          (msg: string) => this.addToConsole(example.id, msg),
          (sub: Subscription) => {
            this.trackSubscription(example.id, sub);
            // Restaurar console.log cuando se complete la suscripción
            sub.add(() => {
              console.log = originalConsoleLog;
              console.error = originalConsoleError;
            });
          },
          () => {
            console.log = originalConsoleLog;
            console.error = originalConsoleError;
          }
        );
      });
    } catch (error) {
      console.log = originalConsoleLog;
      console.error = originalConsoleError;
      this.addToConsole(example.id, '❌ Error: ' + (error as Error).message);
    }
  }

  private prepareCodeForExecution(code: string): string {
    const codeWithoutImports = code.replace(/import.*?;(\r\n|\n)/g, '');

    return `
      try {
        ${codeWithoutImports.replace(
          /\.subscribe\((.*?)\)/g,
          (match, group) => {
            if (group.includes('{')) {
              return `.pipe(
                tap({
                  next: value => console.log('Next:', JSON.stringify(value)),
                  error: err => console.error(err),
                  complete: () => {
                    console.log('✅ Completed');
                    restoreConsole();
                  }
                })
              ).subscribe(sub => {
                trackSubscription(sub);
                ${group}
              })`;
            } else {
              return `.pipe(
                tap({
                  next: value => console.log('Next:', JSON.stringify(value)),
                  error: err => console.error(err),
                  complete: () => {
                    console.log('✅ Completed');
                    restoreConsole();
                  }
                })
              ).subscribe(sub => {
                trackSubscription(sub);
                (${group})(sub);
              })`;
            }
          }
        )}
      } catch (error) {
        console.error('Error en la ejecución:', error.message);
        restoreConsole();
      }
    `;
  }

  private trackSubscription(exampleId: string, subscription: Subscription) {
    this.activeSubscriptions.update((currentSubs) => {
      const newSubs = new Map(currentSubs);
      const subs = newSubs.get(exampleId) || [];
      subs.push(subscription);
      newSubs.set(exampleId, subs);
      return newSubs;
    });
  }

  private addToConsole(exampleId: string, message: string) {
    this.ngZone.run(() => {
      this.consoleState.update((currentState) => {
        const newState = new Map(currentState);
        const messages = [...(newState.get(exampleId) || []), message];
        newState.set(exampleId, messages);
        return newState;
      });
      this.cdr.detectChanges();
    });
  }

  private cleanupSubscriptions(exampleId: string) {
    this.activeSubscriptions.update((currentSubs) => {
      const subscriptions = currentSubs.get(exampleId) || [];
      subscriptions.forEach((sub) => sub.unsubscribe());
      const newSubs = new Map(currentSubs);
      newSubs.delete(exampleId);
      return newSubs;
    });
  }

  onTabChange(event: any) {
    for (const [exampleId] of this.activeSubscriptions()) {
      this.cleanupSubscriptions(exampleId);
    }
    console.log('Tab changed:', event);
    this.consoleState.set(new Map());
  }

  ngOnDestroy() {
    for (const [exampleId] of this.activeSubscriptions()) {
      this.cleanupSubscriptions(exampleId);
    }
  }
}
