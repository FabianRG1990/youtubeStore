import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { createTodo, initialTodos, Todo } from './model';
import { Store } from '@ngrx/store';
import { TodosPegeActions } from './state';

@Component({
    selector: 'ako-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  get hasCompletedTodos(): boolean {
    return this.todos.some((todo) => todo.completed);
  }

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.todos = initialTodos;
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
