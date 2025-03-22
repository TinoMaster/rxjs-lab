# Observables Básicos en RxJS

Los Observables son los bloques fundamentales de RxJS. Son colecciones de valores o eventos futuros que pueden ser observados.

## Características Principales

- **Evaluación Perezosa**: Los Observables son perezosos por naturaleza
- **Valores Múltiples**: Pueden emitir múltiples valores a lo largo del tiempo
- **Cancelables**: Las suscripciones pueden ser canceladas

## Creación de Observables

Hay varias formas de crear Observables:

```typescript
// Usando el constructor
const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.complete();
});

// Usando operadores de creación
const numbers$ = of(1, 2, 3, 4, 5);
const interval$ = interval(1000);
```

## Mejores Prácticas

1. Nombrar los Observables con el sufijo `$`
2. Usar operadores de creación cuando sea posible
3. Siempre manejar la limpieza de suscripciones
   `
