import { createReducer, on } from "@ngrx/store";
import { initialTodos, Todo } from "../model";
import { TodosPegeActions } from ".";


export interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
}

export const todosReducer = createReducer(
  initialState,
  on(TodosPegeActions.init,(currentState) => ({
    ...currentState,
    todos: initialTodos
  })),
  on(TodosPegeActions.addTodo, (currentState, action) => ({
    ...currentState,
    todos: [...currentState.todos, action.todo]
      })),
  on(TodosPegeActions.removeTodo, (currentState, action) => ({
    ...currentState,
    todos: currentState.todos.filter((todo) => todo.id !== action.todo.id)
      })),
  on(TodosPegeActions.marAsCompleted, (currentState, action) => ({
    ...currentState,
    todos: currentState.todos.map((todo) =>
      todo.id === action.todo.id ? {...todo, completed: true} : todo
  ),
      })),
  on(TodosPegeActions.marAsPending, (currentState, action) => ({
    ...currentState,
    todos: currentState.todos.map((todo) =>
      todo.id === action.todo.id ? {...todo, completed: false} : todo
  ),
      })),
  on(TodosPegeActions.clearCompleted, (currentState, action) => ({
    ...currentState,
    todos: currentState.todos.filter((todo) =>
      todo.completed === false),
      })),
)
