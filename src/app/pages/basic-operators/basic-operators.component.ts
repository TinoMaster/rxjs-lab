import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable, from } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-basic-operators',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="space-y-6">
      <header>
        <h2 class="text-3xl font-bold text-gray-800">Operadores Básicos</h2>
        <p class="mt-2 text-gray-600">Aprende a transformar y filtrar datos con operadores RxJS</p>
      </header>
      
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-semibold mb-4 text-purple-700">Ejemplo: Transformación de Números</h3>
        
        <div class="space-y-6">
          <div class="bg-gray-50 p-4 rounded-md">
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Ingresa números (separados por comas):
            </label>
            <input 
              type="text" 
              [(ngModel)]="numberInput"
              class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="1,2,3,4,5"
            >
          </div>

          <button 
            (click)="processNumbers()"
            class="w-full bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors">
            Procesar Números
          </button>

          <div class="space-y-4 mt-6">
            <div class="bg-gray-50 p-4 rounded-md">
              <h4 class="font-semibold text-gray-700 mb-2">Números originales:</h4>
              <p class="text-lg">{{ originalNumbers.join(', ') || 'Ninguno aún' }}</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-md">
              <h4 class="font-semibold text-gray-700 mb-2">Números pares multiplicados por 2:</h4>
              <p class="text-lg">{{ transformedNumbers.join(', ') || 'Ninguno aún' }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white shadow-lg rounded-lg p-6">
        <h3 class="text-xl font-semibold mb-4 text-purple-700">¿Qué estamos aprendiendo?</h3>
        <ul class="space-y-3">
          <li class="flex items-start">
            <span class="flex-shrink-0 w-2 h-2 mt-2 bg-purple-500 rounded-full"></span>
            <span class="ml-4">Uso del operador map para transformar valores</span>
          </li>
          <li class="flex items-start">
            <span class="flex-shrink-0 w-2 h-2 mt-2 bg-purple-500 rounded-full"></span>
            <span class="ml-4">Uso del operador filter para filtrar valores</span>
          </li>
          <li class="flex items-start">
            <span class="flex-shrink-0 w-2 h-2 mt-2 bg-purple-500 rounded-full"></span>
            <span class="ml-4">Encadenamiento de operadores</span>
          </li>
          <li class="flex items-start">
            <span class="flex-shrink-0 w-2 h-2 mt-2 bg-purple-500 rounded-full"></span>
            <span class="ml-4">Creación de Observables desde arrays con from</span>
          </li>
        </ul>
      </div>
    </div>
  `
})
export class BasicOperatorsComponent {
  numberInput: string = '';
  originalNumbers: number[] = [];
  transformedNumbers: number[] = [];

  processNumbers() {
    // Limpiar resultados anteriores
    this.transformedNumbers = [];
    
    // Convertir el input en un array de números
    this.originalNumbers = this.numberInput
      .split(',')
      .map(n => parseInt(n.trim()))
      .filter(n => !isNaN(n));

    // Crear un Observable desde el array
    const numbers$ = from(this.originalNumbers);

    // Aplicar operadores
    numbers$.pipe(
      filter(n => n % 2 === 0), // Filtrar números pares
      map(n => n * 2) // Multiplicar por 2
    ).subscribe({
      next: (value) => {
        this.transformedNumbers.push(value);
      },
      complete: () => {
        console.log('Procesamiento completado');
      }
    });
  }
}
