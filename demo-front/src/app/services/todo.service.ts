import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

/**
 * Service 1 : accès direct à l'API REST JSONPlaceholder.
 * Expose des méthodes CRUD qui dépendent de HttpClient.
 */
@Injectable({ providedIn: 'root' })
export class TodoService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  private http = inject(HttpClient);

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  getById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.apiUrl}/${id}`);
  }

  create(todo: Omit<Todo, 'id'>): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, todo);
  }

  update(id: number, changes: Partial<Todo>): Observable<Todo> {
    return this.http.put<Todo>(`${this.apiUrl}/${id}`, changes);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
