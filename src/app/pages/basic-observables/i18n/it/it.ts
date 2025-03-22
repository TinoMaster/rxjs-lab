import { DataPage } from '@app/core/interfaces/global.interface';

export const IT_BASIC_OBSERVABLES: DataPage = {
  title: 'Observables di base',
  description: 'Primi passi con Observables in RxJS',
  documentation: ``,
  examples: [
    {
      id: 'interval-counter',
      title: 'Contatore con intervallo',
      description: 'Un esempio di un contatore usando interval di RxJS',
      code: `// Crea un Observable che emette valori ogni secondo
const counter$ = interval(1000);

// Sottoscrivi l'Observable
counter$.subscribe(value => console.log('Contatore:', value));`,
    },
  ],
};
