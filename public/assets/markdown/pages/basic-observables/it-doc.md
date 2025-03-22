# Observable di Base in RxJS

Gli Observable sono i blocchi fondamentali di RxJS. Sono collezioni di valori o eventi futuri che possono essere osservati.

## Caratteristiche Principali

- **Valutazione Pigra**: Gli Observable sono pigri per natura
- **Valori Multipli**: Possono emettere più valori nel tempo
- **Cancellabili**: Le sottoscrizioni possono essere annullate

## Creazione degli Observable

Ci sono diversi modi per creare gli Observable:

```typescript
// Usando il costruttore
const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.complete();
});

// Usando gli operatori di creazione
const numbers$ = of(1, 2, 3, 4, 5);
const interval$ = interval(1000);
```

## Migliori Pratiche

1. Nominare gli Observable con il suffisso `$`
2. Utilizzare gli operatori di creazione quando possibile
3. Gestire sempre la pulizia delle sottoscrizioni
