import { DataPage } from '@app/core/interfaces/global.interface';

export const EN_BASIC_OBSERVABLES: DataPage = {
  title: 'Basic Observables',
  description: 'Fundamentals and basic concepts of Observables in RxJS',
  documentation: ``,
  examples: [
    {
      id: 'interval-counter',
      title: 'Contador con interval',
      description:
        'Un contador simple que emite valores cada segundo y se detiene después de 5 emisiones',
      code: `// Crear un Observable que emite cada segundo
const counter$ = interval(1000).pipe(
take(5) // Se completa después de 5 emisiones
);

console.log('⏰ Iniciando contador...');

// Suscribirse al Observable
counter$.subscribe({
next: (value) => console.log('📢 Contador:', value),
error: (error) => console.error('❌ Error:', error),
complete: () => console.log('✅ ¡Contador completado!')
});`,
    },
    {
      id: 'custom-observable',
      title: 'Observable Personalizado',
      description:
        'Creación de un Observable personalizado que simula una tarea asíncrona',
      code: `// Crear un Observable personalizado
const custom$ = new Observable(subscriber => {
console.log('🚀 ¡Observable iniciado!');

subscriber.next('🎯 Primer valor');
subscriber.next('🎯 Segundo valor');

// Simular una operación asíncrona
const timeoutId = setTimeout(() => {
subscriber.next('⏱️ Valor después de 2 segundos');
subscriber.complete();
}, 2000);

// Función de limpieza (teardown)
return () => {
console.log('🧹 Limpiando recursos...');
clearTimeout(timeoutId);
};
});

console.log('📝 Iniciando suscripción...');

custom$.subscribe({
next: (value) => console.log(value),
error: (error) => console.error('❌ Error:', error),
complete: () => console.log('✅ ¡Observable completado!')
});`,
    },
    {
      id: 'event-observable',
      title: 'Observable de Eventos',
      description: 'Simulación de eventos de input con transformación de datos',
      code: `// Simulamos eventos de input usando interval
console.log('🎮 Simulando eventos de input...');

// Creamos un Observable que emite eventos cada 500ms
const input$ = interval(500).pipe(
take(4),
map(i => ({ target: { value: 'Usuario escribiendo' + '.'.repeat(i + 1) } }))
);

// Aplicamos operadores para transformar y controlar el flujo
const search$ = input$.pipe(
debounceTime(1000), // Esperar 1s de inactividad
map(event => event.target.value)
);

console.log('🔍 Iniciando búsqueda...');

// Nos suscribimos para procesar los eventos
search$.subscribe({
next: (value) => console.log('📝 Texto:', value),
complete: () => console.log('✅ ¡Búsqueda completada!')
});`,
    },
  ],
};
