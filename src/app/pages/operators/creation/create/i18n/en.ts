import { DataPage } from '@app/core/interfaces/global.interface';

export const EN_CREATE: DataPage = {
  title: 'Create',
  description: 'Create a new operator',
  documentation: `
  # Create

  The \`create\` operator is the simplest way to create a custom Observable. It allows you to define the emission logic manually, handle errors, and complete the Observable.

  ## Key Features

  - **Total Control**: You have complete control over when and what to emit
  - **Direct Access**: Access the observer directly to handle emissions
  - **Cleanup**: You can define cleanup logic when the subscription is canceled

  ## Basic Example

  \`\`\`typescript
  const customObservable$ = Observable.create(observer => {
    // Emit values
    observer.next('Hello');
    observer.next('World');

    // Simulate an asynchronous operation
    setTimeout(() => {
      observer.next('¡Bye!');
      observer.complete();
    }, 2000);

    // Cleanup logic
    return () => {
      console.log('Cleanup: Subscription canceled');
    };
  });
  \`\`\`

  ## Use Cases

  - Wrap APIs that are not RxJS (callbacks, events)
  - Create complex custom observables
  - Implement custom cleanup logic

  ## ⚠️ Important

  - Ensure you handle errors with \`observer.error()\`
  - Call \`observer.complete()\` when you're done
  - Implement always cleanup logic if needed
  `,
  examples: [],
};
