import { createReducer, on } from '@ngrx/store';
import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';


export const initialState: Todo[] = [];

const _todoReducer = createReducer(
  initialState,
  on(fromTodo.addTodo, (state, action) => {
    const todo = new Todo(action.text);
    return [...state, todo];
  }),
  on(fromTodo.getFromLocalStorage, (state) => {
    if (localStorage.getItem('todos')) {
      const data = JSON.parse(localStorage.getItem('todos')!);
      console.log(data);
      return data;
    }
    return state;
  }),
  on(fromTodo.toggleTodo, (state, action) => {
    return state.map((todoEdit: Todo) => {
      if (todoEdit.id === action.id) {
        return {
          ...todoEdit,
          completed: !todoEdit.completed,
        };
      } else {
        return todoEdit;
      }
    });
  }),
  on(fromTodo.editTodo, (state, action) => {
    return state.map((todoEdit: Todo) => {
      if (todoEdit.id === action.id) {
        return {
          ...todoEdit,
          text: action.text,
        };
      } else {
        return todoEdit;
      }
    });
  }),
  on(fromTodo.deleteTodo, (state, action) => {
    return state.filter((todo) => todo.id !== action.id);
  }),
  on(fromTodo.deleteAllTodo, (state) => {
    return state.filter((todo) => !todo.completed);
  }),
  on(fromTodo.toggleAllTodo, (state, action) => {
    return state.map((todo) => {
      return {
        ...todo,
        completed: action.value,
      };
    });
  })
);

export function todoReducer(state: Todo[] | undefined, action: any) {
  return _todoReducer(state, action);
}
