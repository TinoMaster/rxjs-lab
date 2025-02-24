import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleLogTemplate } from '@app/core/interfaces/global.interface';

@Component({
  selector: 'app-console-simulator',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="console-container">
      <div class="console-header">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
        <span class="title">Console</span>
      </div>
      <div class="console-content">
        @for (log of logs; track log.id) {
        <div class="log-entry">
          <span class="arrow">></span>
          <span [class]="'content ' + log.type">{{ log.content }}</span>
        </div>
        }
      </div>
    </div>
  `,
  styles: [
    `
      .console-container {
        background-color: #1e1e1e;
        border-radius: 6px;
        overflow: hidden;
        font-family: 'Consolas', monospace;
        margin: 1rem 0;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      .console-header {
        background-color: #323232;
        padding: 8px 16px;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
      }

      .red {
        background-color: #ff5f56;
      }
      .yellow {
        background-color: #ffbd2e;
      }
      .green {
        background-color: #27c93f;
      }

      .title {
        color: #fff;
        margin-left: 8px;
        font-size: 14px;
      }

      .console-content {
        padding: 16px;
        color: #fff;
        min-height: 100px;
        max-height: 300px;
        overflow-y: auto;
      }

      .log-entry {
        display: flex;
        gap: 8px;
        margin-bottom: 8px;
        font-size: 14px;
      }

      .arrow {
        color: #27c93f;
      }

      .content {
        color: #fff;
      }

      .content.error {
        color: #ff5f56;
      }

      .content.warn {
        color: #ffbd2e;
      }

      .content.info {
        color: #27c93f;
      }
    `,
  ],
})
export class ConsoleSimulatorComponent {
  @Input() logs: Array<ConsoleLogTemplate> = [];
}
