/**
 * Fonctions utilitaires mathématiques simples.
 * Démonstration : test unitaire d'une fonction TS pure.
 */

export function add(a: number, b: number): number {
  return a + b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  if (b === 0) throw new Error('Division par zéro impossible');
  return a / b;
}

export function factorial(n: number): number {
  if (n < 0) throw new Error('Factorielle définie uniquement pour les entiers positifs');
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
