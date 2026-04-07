# Guide de lancement des tests — demo-front

## Prérequis

```bash
# Depuis le répertoire demo-front/
npm install

# Pour les tests E2E uniquement : installer le navigateur Playwright
npx playwright install chromium
```

---

## Tests unitaires (Jest)

### Lancer tous les tests unitaires

```bash
npm test
```

### Lancer un seul fichier de test

```bash
npx jest math.utils
npx jest string.utils
npx jest todo.service
npx jest todo-facade
npx jest todo-list
```

### Lancer tous les tests d'une catégorie (pattern)

```bash
# Uniquement les utils
npx jest src/app/utils

# Uniquement les services
npx jest src/app/services

# Uniquement les composants
npx jest src/app/components
```

### Mode watch (relance à chaque modification)

```bash
npm run test:watch

# Watch sur un seul fichier
npx jest --watch math.utils
```

### Rapport de couverture de code

```bash
npm run test:coverage
# Le rapport HTML est généré dans coverage/lcov-report/index.html
```

### Afficher le détail de chaque test (verbose)

```bash
npx jest --verbose
```

### Stopper au premier échec

```bash
npx jest --bail
```

---

## Tests E2E (Playwright)

> Les tests E2E démarrent automatiquement `ng serve` sur le port 4200
> via la configuration `webServer` dans `playwright.config.ts`.
> L'application doit pouvoir démarrer sans erreur.

### Lancer tous les tests E2E

```bash
npm run test:e2e
```

### Mode UI interactif (trace visuelle, time-travel)

```bash
npm run test:e2e:ui
```

### Lancer un seul fichier E2E

```bash
npx playwright test e2e/todo.spec.ts
```

### Lancer un seul test par nom (grep)

```bash
npx playwright test --grep "ajoute un nouveau todo"
```

### Voir le rapport HTML après exécution

```bash
npx playwright show-report
```

### Mode debug pas-à-pas (ouvre Playwright Inspector)

```bash
npx playwright test --debug
```

### Lancer en mode headed (navigateur visible)

```bash
npx playwright test --headed
```

### Lancer sur une app déjà démarrée (sans relancer ng serve)

```bash
# Terminal 1
npm start

# Terminal 2
npx playwright test --ignore-https-errors
```

---

## Récapitulatif des scripts npm

| Script | Commande | Description |
|--------|----------|-------------|
| `npm test` | `jest` | Tous les tests unitaires |
| `npm run test:watch` | `jest --watch` | Tests unitaires en mode watch |
| `npm run test:coverage` | `jest --coverage` | Tests unitaires + couverture |
| `npm run test:e2e` | `playwright test` | Tous les tests E2E |
| `npm run test:e2e:ui` | `playwright test --ui` | Tests E2E en mode UI |

---

## Correspondance démos / fichiers

| Démo | Fichier spec | Ce qui est testé |
|------|-------------|-----------------|
| 1 — Fonction TS pure | `src/app/utils/math.utils.spec.ts` | `add`, `multiply`, `divide`, `factorial` |
| 2 — Mock de dépendance | `src/app/utils/string.utils.spec.ts` | `formatTodoTitle` avec fonctions injectées |
| 3 — Mock API HTTP | `src/app/services/todo.service.spec.ts` | `TodoService` via `HttpTestingController` |
| 4 — Mock service | `src/app/services/todo-facade.service.spec.ts` | `TodoFacadeService` avec `TodoService` mocké |
| 5 — Composant CRUD | `src/app/components/todo-list/todo-list.component.spec.ts` | `TodoListComponent` via `TestBed` |
| 6 — E2E | `e2e/todo.spec.ts` | Application complète dans Chromium |
