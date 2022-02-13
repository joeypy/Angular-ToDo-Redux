import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todo/todo.reducer';
import { filterReducer } from './filter/filter.reducer';

export interface AppState {
  todos: Todo[];
  filter: string;
}

export const rootReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer,
};
