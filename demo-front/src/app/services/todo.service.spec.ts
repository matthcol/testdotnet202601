/**
 * ============================================================
 * DEMO 3 : Test unitaire d'un service avec appel HTTP mocké
 * ============================================================
 * On utilise HttpTestingController (Angular) pour intercepter
 * les requêtes HTTP sans jamais toucher le réseau réel.
 */
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TodoService } from './todo.service';
import { Todo } from '../models/todo.model';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

const MOCK_TODOS: Todo[] = [
  { id: 1, title: 'Acheter du lait', completed: false },
  { id: 2, title: 'Faire du sport',  completed: true  },
];

describe('TodoService — mock HttpClient', () => {
  let service: TodoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(), // Remplace HttpClient par une version contrôlée
        TodoService,
      ],
    });
    service  = TestBed.inject(TodoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Vérifie qu'aucune requête non attendue n'a été faite
    httpMock.verify();
  });

  // --- getAll() ---
  it('getAll() : envoie GET /todos et retourne la liste', () => {
    service.getAll().subscribe(todos => {
      expect(todos).toHaveLength(2);
      expect(todos[0].title).toBe('Acheter du lait');
    });

    const req = httpMock.expectOne(API_URL);
    expect(req.request.method).toBe('GET');
    req.flush(MOCK_TODOS); // Simule la réponse du serveur
  });

  // --- getById() ---
  it('getById(1) : envoie GET /todos/1 et retourne le bon todo', () => {
    service.getById(1).subscribe(todo => {
      expect(todo.id).toBe(1);
      expect(todo.title).toBe('Acheter du lait');
    });

    const req = httpMock.expectOne(`${API_URL}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(MOCK_TODOS[0]);
  });

  // --- create() ---
  it('create() : envoie POST /todos avec le bon corps', () => {
    const newTodo = { title: 'Lire un livre', completed: false };

    service.create(newTodo).subscribe(todo => {
      expect(todo.id).toBe(3);
      expect(todo.title).toBe('Lire un livre');
    });

    const req = httpMock.expectOne(API_URL);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newTodo);
    req.flush({ id: 3, ...newTodo });
  });

  // --- update() ---
  it('update() : envoie PUT /todos/1', () => {
    const changes = { completed: true };

    service.update(1, changes).subscribe(todo => {
      expect(todo.completed).toBe(true);
    });

    const req = httpMock.expectOne(`${API_URL}/1`);
    expect(req.request.method).toBe('PUT');
    req.flush({ ...MOCK_TODOS[0], ...changes });
  });

  // --- delete() ---
  it('delete() : envoie DELETE /todos/1', () => {
    service.delete(1).subscribe(result => {
      expect(result).toBeUndefined();
    });

    const req = httpMock.expectOne(`${API_URL}/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });

  // --- Gestion d'erreur ---
  it('getAll() : propage une erreur HTTP 500', () => {
    service.getAll().subscribe({
      next: () => fail('Devrait échouer'),
      error: err => expect(err.status).toBe(500),
    });

    const req = httpMock.expectOne(API_URL);
    req.flush('Erreur serveur', { status: 500, statusText: 'Server Error' });
  });
});
