import { DataPage } from '@app/core/interfaces/global.interface';

export const ES_CREATE: DataPage = {
  title: 'Create',
  description: 'Crear un nuevo operador',
  documentation: `
# Create

El operador \`create\` es la forma más básica de crear un Observable personalizado. Te permite definir manualmente la lógica de emisión, error y finalización.

## Características Principales

- **Control Total**: Tienes control completo sobre cuándo y qué valores emitir
- **Acceso Directo**: Accedes directamente al observer para manejar emisiones
- **Limpieza**: Puedes definir lógica de limpieza cuando se cancela la suscripción

## Ejemplo Básico

\`\`\`typescript
const customObservable$ = Observable.create(observer => {
  // Emitir valores
  observer.next('Hola');
  observer.next('Mundo');

  // Simular una operación asíncrona
  setTimeout(() => {
    observer.next('¡Adiós!');
    observer.complete();
  }, 2000);

  // Función de limpieza
  return () => {
    console.log('Limpieza: Suscripción cancelada');
  };
});
\`\`\`

## Casos de Uso

- Envolver APIs no RxJS (callbacks, eventos)
- Crear observables personalizados complejos
- Implementar lógica de limpieza personalizada

## ⚠️ Importante

- Asegúrate de manejar errores con \`observer.error()\`
- Llama a \`observer.complete()\` cuando termines
- Implementa siempre una función de limpieza si es necesario
  `,
  examples: [],
};
