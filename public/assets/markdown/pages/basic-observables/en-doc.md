# Basic Observables in RxJS

Observables are the fundamental building blocks of RxJS. They are collections of future values or events that can be observed.

## Main Characteristics

- **Lazy Evaluation**: Observables are lazy by nature
- **Multiple Values**: They can emit multiple values over time
- **Cancellable**: Subscriptions can be cancelled

## Creating Observables

There are several ways to create Observables:

```typescript
// Using the constructor
const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.complete();
});

// Using creation operators
const numbers$ = of(1, 2, 3, 4, 5);
const interval$ = interval(1000);
```

## Best Practices

1. Name Observables with the `$` suffix
2. Use creation operators when possible
3. Always handle subscription cleanup
