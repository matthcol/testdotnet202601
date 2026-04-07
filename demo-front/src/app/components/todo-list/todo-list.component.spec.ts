/**
 * ============================================================
 * DEMO 5 : Test unitaire d'un composant Angular (CRUD)
 * ============================================================
 * On utilise TestBed pour monter le composant dans un DOM virtuel (jsdom).
 * TodoFacadeService est remplacé par un mock pour :
 *  - contrôler l'état initial (signal de todos)
 *  - vérifier que les interactions utilisateur déclenchent les bonnes méthodes
 *
 * Concepts illustrés :
 *  - ComponentFixture / DebugElement
 *  - Interaction avec le DOM (click, input)
 *  - Change detection
 *  - Mock de service Angular injecté dans un composant
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Todo } from '../../models/todo.model';
import { TodoFacadeService } from '../../services/todo-facade.service';
import { TodoListComponent } from './todo-list.component';

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Sélectionne un élément par data-testid */
function query<T extends HTMLElement>(fixture: ComponentFixture<unknown>, testId: string): T {
  return fixture.debugElement.query(By.css(`[data-testid="${testId}"]`)).nativeElement as T;
}

function queryAll<T extends HTMLElement>(fixture: ComponentFixture<unknown>, testId: string): T[] {
  return fixture.debugElement
    .queryAll(By.css(`[data-testid="${testId}"]`))
    .map(de => de.nativeElement as T);
}

// ── Mock factory ──────────────────────────────────────────────────────────────

const MOCK_TODOS: Todo[] = [
  { id: 1, title: 'Acheter du lait', completed: false },
  { id: 2, title: 'Faire du sport',  completed: true  },
];

function createFacadeMock(overrides: Partial<{
  todosValue: Todo[];
  loadingValue: boolean;
  errorValue: string | null;
}> = {}) {
  const todosValue   = overrides.todosValue   ?? MOCK_TODOS;
  const loadingValue = overrides.loadingValue ?? false;
  const errorValue   = overrides.errorValue   ?? null;

  return {
    todos:          signal(todosValue),
    loading:        signal(loadingValue),
    error:          signal(errorValue),
    get completedCount() { return this.todos().filter((t: Todo) => t.completed).length; },
    get pendingCount()   { return this.todos().filter((t: Todo) => !t.completed).length; },
    loadAll:    jest.fn(),
    addTodo:    jest.fn(),
    toggleTodo: jest.fn(),
    removeTodo: jest.fn(),
  };
}

// ── Tests ─────────────────────────────────────────────────────────────────────

describe('TodoListComponent', () => {
  let fixture: ComponentFixture<TodoListComponent>;
  let facade: ReturnType<typeof createFacadeMock>;

  async function setup(overrides = {}) {
    facade = createFacadeMock(overrides);

    await TestBed.configureTestingModule({
      imports: [TodoListComponent],
      providers: [{ provide: TodoFacadeService, useValue: facade }],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    fixture.detectChanges();
  }

  // --- Rendu initial ---
  describe('rendu initial', () => {
    beforeEach(() => setup());

    it('affiche le titre principal', () => {
      const h1 = fixture.nativeElement.querySelector('h1') as HTMLElement;
      expect(h1.textContent).toContain('Ma liste de todos');
    });

    it('affiche les statistiques correctement', () => {
      const stats = query<HTMLElement>(fixture, 'stats');
      expect(stats.textContent).toContain('1 terminé(s)');
      expect(stats.textContent).toContain('1 en attente');
    });

    it('affiche autant de <li> que de todos', () => {
      const items = queryAll(fixture, 'todo-item');
      expect(items).toHaveLength(2);
    });

    it('affiche les titres des todos', () => {
      const titles = queryAll<HTMLElement>(fixture, 'todo-title');
      expect(titles[0].textContent?.trim()).toBe('Acheter du lait');
      expect(titles[1].textContent?.trim()).toBe('Faire du sport');
    });

    it('appelle loadAll() au démarrage (ngOnInit)', () => {
      expect(facade.loadAll).toHaveBeenCalledTimes(1);
    });
  });

  // --- État loading ---
  describe('état de chargement', () => {
    it('affiche le message de chargement quand loading = true', async () => {
      await setup({ loadingValue: true, todosValue: [] });
      const loading = query<HTMLElement>(fixture, 'loading');
      expect(loading.textContent).toContain('Chargement');
    });

    it('ne montre pas le message de chargement quand loading = false', async () => {
      await setup();
      const loadingEl = fixture.debugElement.query(By.css('[data-testid="loading"]'));
      expect(loadingEl).toBeNull();
    });
  });

  // --- État erreur ---
  describe('affichage d\'erreur', () => {
    it('affiche le message d\'erreur quand error est défini', async () => {
      await setup({ errorValue: 'Réseau indisponible', todosValue: [] });
      const err = query<HTMLElement>(fixture, 'error');
      expect(err.textContent).toContain('Réseau indisponible');
    });
  });

  // --- Ajout d'un todo ---
  describe('ajout d\'un todo', () => {
    beforeEach(() => setup());

    it('appelle addTodo() avec le titre saisi', () => {
      const input = query<HTMLInputElement>(fixture, 'new-todo-input');
      input.value = 'Nouvelle tâche';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      const form = query<HTMLFormElement>(fixture, 'add-form');
      form.dispatchEvent(new Event('submit'));
      fixture.detectChanges();

      expect(facade.addTodo).toHaveBeenCalledWith('Nouvelle tâche');
    });

    it('vide le champ après soumission', async () => {
      const input = query<HTMLInputElement>(fixture, 'new-todo-input');
      input.value = 'Test';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      query<HTMLFormElement>(fixture, 'add-form').dispatchEvent(new Event('submit'));
      // whenStable() attend que ngModel propage le nouveau modèle vers le DOM
      await fixture.whenStable();
      fixture.detectChanges();

      expect(input.value).toBe('');
    });

    it('n\'appelle pas addTodo() si le champ est vide', () => {
      query<HTMLFormElement>(fixture, 'add-form').dispatchEvent(new Event('submit'));
      fixture.detectChanges();
      expect(facade.addTodo).not.toHaveBeenCalled();
    });
  });

  // --- Toggle ---
  describe('basculer un todo', () => {
    beforeEach(() => setup());

    it('appelle toggleTodo() avec l\'id du todo', () => {
      const checkbox = fixture.debugElement
        .query(By.css('[data-testid="toggle-1"]'))
        .nativeElement as HTMLInputElement;

      checkbox.dispatchEvent(new Event('change'));
      fixture.detectChanges();

      expect(facade.toggleTodo).toHaveBeenCalledWith(1);
    });
  });

  // --- Suppression ---
  describe('supprimer un todo', () => {
    beforeEach(() => setup());

    it('appelle removeTodo() avec l\'id du todo', () => {
      const deleteBtn = fixture.debugElement
        .query(By.css('[data-testid="delete-1"]'))
        .nativeElement as HTMLButtonElement;

      deleteBtn.click();
      fixture.detectChanges();

      expect(facade.removeTodo).toHaveBeenCalledWith(1);
    });
  });

  // --- Liste vide ---
  describe('liste vide', () => {
    it('n\'affiche aucun <li> si todos est vide', async () => {
      await setup({ todosValue: [] });
      const items = queryAll(fixture, 'todo-item');
      expect(items).toHaveLength(0);
    });
  });
});
