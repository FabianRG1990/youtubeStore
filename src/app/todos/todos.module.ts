import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { todosReducer, todosStateFeatureKey } from './state';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [TodosComponent, AddTodoComponent, TodoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(todosStateFeatureKey, todosReducer)
  ],
  exports: [TodosComponent],
})
export class TodosModule {}
