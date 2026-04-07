import { inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { Todo } from '../models/todo.model';
import { TodoService } from './todo.service';

/**
 * Service 2 (Façade) : orchestre la logique métier au-dessus de TodoService.
 * - Maintient un état local via Angular Signals
 * - Ne fait jamais de HTTP directement → dépend uniquement de TodoService
 *
 * Démonstration : on mockera TodoService pour tester cette façade en isolation.
 */
@Injectable({ providedIn: 'root' })
export class TodoFacadeService {
  private todoService = inject(TodoService);

  /** État local observable via signal */
  readonly todos = signal<Todo[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  loadAll(): void {
    this.loading.set(true);
    this.error.set(null);

    this.todoService.getAll().pipe(
      tap({
        next: todos => {
          this.todos.set(todos);
          this.loading.set(false);
        },
        error: err => {
          this.error.set(err.message ?? 'Erreur inconnue');
          this.loading.set(false);
        },
      }),
    ).subscribe();
  }

  addTodo(title: string): void {
    this.todoService.create({ title, completed: false }).pipe(
      tap(newTodo => this.todos.update(list => [...list, newTodo])),
    ).subscribe();
  }

  toggleTodo(id: number): void {
    const todo = this.todos().find(t => t.id === id);
    if (!todo) return;

    this.todoService.update(id, { completed: !todo.completed }).pipe(
      tap(updated => {
        this.todos.update(list => list.map(t => t.id === id ? updated : t));
      }),
    ).subscribe();
  }

  removeTodo(id: number): void {
    this.todoService.delete(id).pipe(
      tap(() => this.todos.update(list => list.filter(t => t.id !== id))),
    ).subscribe();
  }

  get completedCount(): number {
    return this.todos().filter(t => t.completed).length;
  }

  get pendingCount(): number {
    return this.todos().filter(t => !t.completed).length;
  }
}
