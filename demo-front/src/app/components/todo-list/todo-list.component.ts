import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoFacadeService } from '../../services/todo-facade.service';

/**
 * Composant CRUD de démonstration.
 * Délègue toute la logique métier à TodoFacadeService.
 * Le template expose les actions : charger, ajouter, basculer, supprimer.
 */
@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="todo-container">
      <h1>Ma liste de todos</h1>

      <!-- Statistiques -->
      <p class="stats" data-testid="stats">
        {{ facade.completedCount }} terminé(s) / {{ facade.pendingCount }} en attente
      </p>

      <!-- Formulaire d'ajout -->
      <form (ngSubmit)="onAdd()" data-testid="add-form">
        <input
          data-testid="new-todo-input"
          [(ngModel)]="newTitle"
          name="newTitle"
          placeholder="Nouvelle tâche…"
          [disabled]="facade.loading()"
        />
        <button
          type="submit"
          data-testid="add-btn"
          [disabled]="!newTitle.trim() || facade.loading()"
        >
          Ajouter
        </button>
      </form>

      <!-- État de chargement -->
      @if (facade.loading()) {
        <p data-testid="loading">Chargement…</p>
      }

      <!-- Erreur -->
      @if (facade.error()) {
        <p class="error" data-testid="error">{{ facade.error() }}</p>
      }

      <!-- Liste -->
      <ul data-testid="todo-list">
        @for (todo of facade.todos(); track todo.id) {
          <li
            data-testid="todo-item"
            [class.completed]="todo.completed"
          >
            <input
              type="checkbox"
              [checked]="todo.completed"
              (change)="facade.toggleTodo(todo.id)"
              [attr.data-testid]="'toggle-' + todo.id"
            />
            <span data-testid="todo-title">{{ todo.title }}</span>
            <button
              (click)="facade.removeTodo(todo.id)"
              [attr.data-testid]="'delete-' + todo.id"
            >
              Supprimer
            </button>
          </li>
        }
      </ul>

      <!-- Bouton charger -->
      <button data-testid="load-btn" (click)="facade.loadAll()">
        Charger les todos
      </button>

       <!-- Nettoyer les completed -->
      <button data-testid="clean-btn" (click)="facade.cleanCompleted()">
        Masquer les terminées
      </button>
    </section>
  `,
  styles: [`
    .todo-container { max-width: 500px; margin: 2rem auto; font-family: sans-serif; }
    .stats { color: #666; font-size: 0.9rem; }
    form { display: flex; gap: 0.5rem; margin-bottom: 1rem; }
    input[type="text"], input:not([type]) { flex: 1; padding: 0.5rem; }
    button { padding: 0.5rem 1rem; cursor: pointer; }
    ul { list-style: none; padding: 0; }
    li { display: flex; align-items: center; gap: 0.5rem; padding: 0.4rem 0; border-bottom: 1px solid #eee; }
    li.completed span { text-decoration: line-through; color: #999; }
    .error { color: red; }
  `],
})
export class TodoListComponent implements OnInit {
  protected facade = inject(TodoFacadeService);
  protected newTitle = '';

  ngOnInit(): void {
    this.facade.loadAll();
  }

  protected onAdd(): void {
    const title = this.newTitle.trim();
    if (!title) return;
    this.facade.addTodo(title);
    this.newTitle = '';
  }
}
