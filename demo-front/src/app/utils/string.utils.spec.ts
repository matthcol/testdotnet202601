/**
 * ============================================================
 * DEMO 2 : Test unitaire avec mock d'une fonction dépendante
 * ============================================================
 * formatTodoTitle(title, capitalizeFn, truncateFn) accepte ses
 * dépendances en paramètres optionnels (pattern d'injection
 * fonctionnelle).
 *
 * En test, on passe des jest.fn() à la place des vraies fonctions.
 * Cela permet de vérifier :
 *  - que formatTodoTitle orchestres ses dépendances correctement
 *  - indépendamment de leur implémentation réelle
 *
 * Avantages vs jest.spyOn sur des exports :
 *  - fonctionne même avec les modules ES compilés par TypeScript
 *  - plus lisible, plus explicite, pas d'effet de bord global
 */
import { capitalize, formatTodoTitle, truncate } from './string.utils';

describe('StringUtils', () => {
  // --- Tests directs des fonctions pures (sans mock) ---

  describe('truncate()', () => {
    it('ne tronque pas si le texte est assez court', () => {
      expect(truncate('Hello', 10)).toBe('Hello');
    });

    it('tronque et ajoute "..." si le texte est trop long', () => {
      expect(truncate('Hello World', 5)).toBe('Hello...');
    });

    it('gère exactement la longueur limite', () => {
      expect(truncate('Hello', 5)).toBe('Hello');
    });
  });

  describe('capitalize()', () => {
    it('met la première lettre en majuscule et le reste en minuscules', () => {
      expect(capitalize('hELLO')).toBe('Hello');
    });

    it('retourne une chaîne vide si le texte est vide', () => {
      expect(capitalize('')).toBe('');
    });

    it('gère un seul caractère', () => {
      expect(capitalize('a')).toBe('A');
    });
  });

  // --- Tests de formatTodoTitle() avec dépendances mockées ---

  describe('formatTodoTitle() — avec fonctions mock injectées', () => {
    it('appelle capitalizeFn avec le titre original', () => {
      const mockCapitalize = jest.fn().mockReturnValue('Capitalized');
      const mockTruncate   = jest.fn().mockReturnValue('Capitalized');

      formatTodoTitle('hello world', mockCapitalize, mockTruncate);

      expect(mockCapitalize).toHaveBeenCalledWith('hello world');
      expect(mockCapitalize).toHaveBeenCalledTimes(1);
    });

    it('appelle truncateFn avec le résultat de capitalizeFn et la limite 30', () => {
      const mockCapitalize = jest.fn().mockReturnValue('Capitalized');
      const mockTruncate   = jest.fn().mockReturnValue('Capitalized');

      formatTodoTitle('hello world', mockCapitalize, mockTruncate);

      expect(mockTruncate).toHaveBeenCalledWith('Capitalized', 30);
    });

    it('retourne le résultat de truncateFn', () => {
      const mockCapitalize = jest.fn().mockReturnValue('X');
      const mockTruncate   = jest.fn().mockReturnValue('MOCKED_RESULT');

      const result = formatTodoTitle('anything', mockCapitalize, mockTruncate);

      expect(result).toBe('MOCKED_RESULT');
    });

    it('orchestre bien capitalize → truncate dans le bon ordre', () => {
      const calls: string[] = [];
      const mockCapitalize = jest.fn().mockImplementation((s: string) => {
        calls.push('capitalize');
        return `CAP(${s})`;
      });
      const mockTruncate = jest.fn().mockImplementation((s: string) => {
        calls.push('truncate');
        return `TRUNC(${s})`;
      });

      formatTodoTitle('test', mockCapitalize, mockTruncate);

      expect(calls).toEqual(['capitalize', 'truncate']);
    });

    it('utilise les vraies fonctions par défaut (sans mock)', () => {
      // Sans injection : les vraies capitalize + truncate sont utilisées
      const result = formatTodoTitle('BONJOUR MONDE');
      expect(result).toBe('Bonjour monde'); // 13 chars < 30
    });
  });
});
