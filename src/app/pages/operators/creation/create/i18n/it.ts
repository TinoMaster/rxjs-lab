import { DataPage } from '@app/core/interfaces/global.interface';

export const IT_CREATE: DataPage = {
  title: 'Create',
  description: 'Crea un nuovo operatore',
  documentation: `
  # Create

  Il creatore \`create\` è la forma più semplice di creare un Observable personalizzato. Ti permette di definire manualmente la logica di emissione, errore e terminazione.

  ## Caratteristiche Principali

  - **Controllo Totale**: Hai il controllo completo su quando e cosa emettere
  - **Accesso Diretto**: Accedi direttamente all'osservatore per gestire le emissioni
  - **Pulizia**: Puoi definire la logica di pulizia quando si cancella la sottoscrizione

  ## Esempio Base

  \`\`\`typescript
  const customObservable$ = Observable.create(observer => {
    // Emettere valori
    observer.next('Ciao');
    observer.next('Mondo');

    // Simulare un'operazione asincrona
    setTimeout(() => {
      observer.next('¡Adiós!');
      observer.complete();
    }, 2000);

    // Logica di pulizia
    return () => {
      console.log('Pulizia: Sottoscrizione annullata');
    };
  });
  \`\`\`

  ## Casi d'Uso

  - Involgere API non RxJS (callbacks, eventi)
  - Creare osservabili personalizzati complessi
  - Implementare logica di pulizia personalizzata

  ## ⚠️ Importante

  - Assicurati di gestire gli errori con \`observer.error()\`
  - Chiama \`observer.complete()\` quando hai finito
  - Implementa sempre una logica di pulizia se necessario
  `,
  commonUses: [],
  examples: [],
};
