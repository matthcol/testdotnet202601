/**
 * ============================================================
 * DEMO 1 : Test unitaire d'une fonction TypeScript pure
 * ============================================================
 * Pas de dépendance externe → pas de mock nécessaire.
 * On teste uniquement la logique métier de chaque fonction.
 *
 * Contient également :
 * DEMO 1b — Tests paramétrés avec it.each / test.each
 * ============================================================
 */
import { add, divide, factorial, multiply } from './math.utils';

describe('MathUtils', () => {
  // --- add ---
  describe('add()', () => {
    it('additionne deux entiers positifs', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('additionne un entier positif et un négatif', () => {
      expect(add(10, -4)).toBe(6);
    });

    it('retourne 0 pour add(0, 0)', () => {
      expect(add(0, 0)).toBe(0);
    });
  });

  // --- multiply ---
  describe('multiply()', () => {
    it('multiplie correctement deux nombres', () => {
      expect(multiply(4, 5)).toBe(20);
    });

    it('retourne 0 si l\'un des opérandes est 0', () => {
      expect(multiply(0, 99)).toBe(0);
    });
  });

  // --- divide ---
  describe('divide()', () => {
    it('divise correctement deux nombres', () => {
      expect(divide(10, 2)).toBe(5);
    });

    it('lève une erreur en cas de division par zéro', () => {
      expect(() => divide(10, 0)).toThrow('Division par zéro impossible');
    });
  });

  // --- factorial ---
  describe('factorial()', () => {
    it('calcule 0! = 1', () => {
      expect(factorial(0)).toBe(1);
    });

    it('calcule 5! = 120', () => {
      expect(factorial(5)).toBe(120);
    });

    it('lève une erreur pour un entier négatif', () => {
      expect(() => factorial(-1)).toThrow();
    });
  });

  // ============================================================
  // DEMO 1b : Tests paramétrés — it.each / test.each
  // ============================================================
  // Plutôt que répéter un it() par cas, on déclare une table de
  // données et Jest génère automatiquement un test par ligne.
  // Deux syntaxes disponibles : tableau de tableaux ou template
  // literal (plus lisible pour beaucoup de colonnes).
  // ============================================================

  describe('Tests paramétrés avec it.each', () => {

    // --- Syntaxe 1 : tableau de tableaux ---
    // Chaque sous-tableau = [arg1, arg2, résultatAttendu]
    // Le nom du test utilise printf-style : %i, %s, %f…
    describe('add() — syntaxe tableau', () => {
      it.each([
        [1,   2,    3],
        [0,   0,    0],
        [-5,  5,    0],
        [10, -3,    7],
        [0.1, 0.2,  0.30000000000000004], // précision flottante JS
      ])('add(%i, %i) = %i', (a, b, expected) => {
        expect(add(a, b)).toBe(expected);
      });
    });

    // --- Syntaxe 2 : template literal (tagged template) ---
    // Les colonnes sont nommées → nom de test plus expressif.
    // Idéale quand les cas ont des étiquettes métier différentes.
    describe('divide() — syntaxe template literal', () => {
      it.each`
        label                        | a     | b    | expected
        ${'division entière'}        | ${10} | ${2} | ${5}
        ${'division décimale'}       | ${7}  | ${2} | ${3.5}
        ${'dividende négatif'}       | ${-9} | ${3} | ${-3}
        ${'résultat inférieur à 1'}  | ${1}  | ${4} | ${0.25}
        ${'diviser 0'}               | ${0}  | ${5} | ${0}
      `('$label : divide($a, $b) = $expected', ({ a, b, expected }) => {
        expect(divide(a, b)).toBe(expected);
      });
    });

    // --- Syntaxe 3 : tableau d'objets nommés ---
    // Utile quand chaque cas porte une intention métier explicite.
    describe('factorial() — syntaxe tableau d\'objets', () => {
      it.each([
        { n: 0, expected: 1,   label: 'cas de base 0! = 1'   },
        { n: 1, expected: 1,   label: 'cas de base 1! = 1'   },
        { n: 4, expected: 24,  label: '4! = 24'              },
        { n: 5, expected: 120, label: '5! = 120'             },
        { n: 6, expected: 720, label: '6! = 720'             },
      ])('$label', ({ n, expected }) => {
        expect(factorial(n)).toBe(expected);
      });
    });

    // --- Cas d'erreur paramétrés ---
    // it.each fonctionne aussi avec des assertions d'exceptions.
    describe('divide() — erreurs paramétrées', () => {
      it.each([
        [5,  0],
        [-3, 0],
        [0,  0],
      ])('divide(%i, 0) lève une erreur', (a, b) => {
        expect(() => divide(a, b)).toThrow('Division par zéro impossible');
      });
    });

  });
});
