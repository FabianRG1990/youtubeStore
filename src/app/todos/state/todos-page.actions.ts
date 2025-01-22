import { createAction, props } from "@ngrx/store";
import { Todo } from "../model";

export const init = createAction('[Todos page] init');

export const addTodo = createAction(
  '[Todos page] Add Todo',
props<{todo: Todo}>()
);

export const removeTodo = createAction(
  '[Todos page] Remove Todo',
props<{todo: Todo}>()
);

export const marAsCompleted = createAction(
  '[Todos page] Mar as Completed',
props<{todo: Todo}>()
);

export const marAsPending = createAction(
  '[Todos page] Mar as Pending',
props<{todo: Todo}>()
);

export const clearCompleted = createAction('[Todos page] Clear Completed');
