/**
 * Fonctions utilitaires texte.
 *
 * formatTodoTitle() accepte ses dépendances en paramètres optionnels.
 * Ce pattern (dependency injection par paramètres) permet de remplacer
 * les dépendances par des fonctions mock en test sans aucune magie.
 */

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export function capitalize(text: string): string {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

/**
 * Formate un titre de todo : capitalize + truncate à 30 caractères.
 *
 * Les deux dépendances sont injectables via des paramètres optionnels.
 * En production on utilise les vraies fonctions ; en test on peut passer
 * des jest.fn() pour isoler complètement cette fonction.
 */
export function formatTodoTitle(
  title: string,
  capitalizeFn: (s: string) => string = capitalize,
  truncateFn: (s: string, max: number) => string = truncate,
): string {
  return truncateFn(capitalizeFn(title), 30);
}
