import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { createTodo, initialTodos, Todo } from './model';
import { Store } from '@ngrx/store';
import { TodosPegeActions, TodosSelector } from './state';
import { Observable } from 'rxjs';

@Component({
    selector: 'ako-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[]> = this.store.select(TodosSelector.todos);

  hasCompletedTodos$: Observable <boolean> = this.store.select(TodosSelector.hasCompletedTodos);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(TodosPegeActions.init())
  }

  addTodo(description: string): void {
    const newTodo = createTodo(description);
    this.store.dispatch(TodosPegeActions.addTodo({ todo: newTodo }));
  }

  removeTodo(todoToRemove: Todo): void {
    this.store.dispatch(TodosPegeActions.removeTodo({ todo: todoToRemove }));
  }

  markAsCompleted(todoToMark: Todo): void {
    this.store.dispatch(TodosPegeActions.marAsCompleted({ todo: todoToMark }));
  }

  markAsPending(todoToMark: Todo): void {
    this.store.dispatch(TodosPegeActions.marAsPending({ todo: todoToMark }));

  }

  clearCompleted(): void {
    this.store.dispatch(TodosPegeActions.clearCompleted());
  }
}
