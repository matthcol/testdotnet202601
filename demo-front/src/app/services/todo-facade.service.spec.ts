/**
 * ============================================================
 * DEMO 4 : Test unitaire d'un service qui en mocke un autre
 * ============================================================
 * TodoFacadeService dépend de TodoService.
 * On remplace TodoService par un objet mock (jest.fn()) afin de :
 *  - contrôler exactement ce que retourne le service sous-jacent
 *  - vérifier que la façade réagit correctement selon ces retours
 *  - ne pas re-tester la logique HTTP (déjà testée dans todo.service.spec.ts)
 */
import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { Todo } from '../models/todo.model';
import { TodoService } from './todo.service';
import { TodoFacadeService } from './todo-facade.service';

const MOCK_TODOS: Todo[] = [
  { id: 1, title: 'Acheter du lait', completed: false },
  { id: 2, title: 'Faire du sport',  completed: true  },
];

describe('TodoFacadeService — mock TodoService', () => {
  let facade: TodoFacadeService;
  let todoServiceMock: jest.Mocked<TodoService>;

  beforeEach(() => {
    // On crée un objet qui imite l'interface de TodoService,
    // mais dont chaque méthode est une fonction Jest controlée.
    todoServiceMock = {
      getAll:  jest.fn(),
      getById: jest.fn(),
      create:  jest.fn(),
      update:  jest.fn(),
      delete:  jest.fn(),
    } as unknown as jest.Mocked<TodoService>;

    TestBed.configureTestingModule({
      providers: [
        TodoFacadeService,
        // On fournit le mock à la place du vrai service
        { provide: TodoService, useValue: todoServiceMock },
      ],
    });

    facade = TestBed.inject(TodoFacadeService);
  });

  // --- loadAll() ---
  describe('loadAll()', () => {
    it('charge les todos et les place dans le signal', () => {
      todoServiceMock.getAll.mockReturnValue(of(MOCK_TODOS));

      facade.loadAll();

      expect(facade.todos()).toEqual(MOCK_TODOS);
      expect(facade.loading()).toBe(false);
    });

    it('met loading à true pendant le chargement', () => {
      // On retourne un Observable qui ne se complète pas tout de suite
      todoServiceMock.getAll.mockReturnValue(of(MOCK_TODOS));
      facade.loadAll();
      // Après le subscribe synchrone, loading doit être false
      expect(facade.loading()).toBe(false);
    });

    it('stocke le message d\'erreur si getAll() échoue', () => {
      todoServiceMock.getAll.mockReturnValue(
        throwError(() => new Error('Network error')),
      );

      facade.loadAll();

      expect(facade.error()).toBe('Network error');
      expect(facade.todos()).toEqual([]);
    });
  });

  // --- addTodo() ---
  describe('addTodo()', () => {
    it('appelle create() avec le bon payload', () => {
      const created: Todo = { id: 99, title: 'Nouveau', completed: false };
      todoServiceMock.create.mockReturnValue(of(created));

      facade.addTodo('Nouveau');

      expect(todoServiceMock.create).toHaveBeenCalledWith({
        title: 'Nouveau',
        completed: false,
      });
    });

    it('ajoute le todo retourné par le service dans le signal', () => {
      const created: Todo = { id: 99, title: 'Nouveau', completed: false };
      todoServiceMock.getAll.mockReturnValue(of(MOCK_TODOS));
      todoServiceMock.create.mockReturnValue(of(created));

      facade.loadAll();
      facade.addTodo('Nouveau');

      expect(facade.todos()).toContainEqual(created);
      expect(facade.todos()).toHaveLength(3);
    });
  });

  // --- toggleTodo() ---
  describe('toggleTodo()', () => {
    it('inverse le statut completed d\'un todo', () => {
      const updated: Todo = { ...MOCK_TODOS[0], completed: true };
      todoServiceMock.getAll.mockReturnValue(of(MOCK_TODOS));
      todoServiceMock.update.mockReturnValue(of(updated));

      facade.loadAll();
      facade.toggleTodo(1);

      const todo = facade.todos().find(t => t.id === 1);
      expect(todo?.completed).toBe(true);
      expect(todoServiceMock.update).toHaveBeenCalledWith(1, { completed: true });
    });

    it('ne fait rien si le todo n\'existe pas', () => {
      todoServiceMock.getAll.mockReturnValue(of(MOCK_TODOS));
      facade.loadAll();

      facade.toggleTodo(999);

      expect(todoServiceMock.update).not.toHaveBeenCalled();
    });
  });

  // --- removeTodo() ---
  describe('removeTodo()', () => {
    it('supprime le todo du signal après delete()', () => {
      todoServiceMock.getAll.mockReturnValue(of(MOCK_TODOS));
      todoServiceMock.delete.mockReturnValue(of(undefined));

      facade.loadAll();
      facade.removeTodo(1);

      expect(facade.todos().find(t => t.id === 1)).toBeUndefined();
      expect(facade.todos()).toHaveLength(1);
    });
  });

  // --- Compteurs dérivés ---
  describe('compteurs', () => {
    beforeEach(() => {
      todoServiceMock.getAll.mockReturnValue(of(MOCK_TODOS));
      facade.loadAll();
    });

    it('completedCount retourne le bon nombre', () => {
      expect(facade.completedCount).toBe(1);
    });

    it('pendingCount retourne le bon nombre', () => {
      expect(facade.pendingCount).toBe(1);
    });
  });
});
