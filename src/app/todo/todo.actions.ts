import { createAction, props } from '@ngrx/store';

export const getFromLocalStorage = createAction('[Todo] LocalStore');
export const addTodo = createAction('[Todo] Add', props<{text: string}>());
export const toggleTodo = createAction('[Todo] Toggle', props<{id: number}>());
export const editTodo = createAction('[Todo] Edit', props<{id: number, text: string}>());
export const deleteTodo = createAction('[Todo] Delete', props<{id: number}>());
export const deleteAllTodo = createAction('[Todo] Delete All');
export const toggleAllTodo = createAction('[Todo] Toggle All', props<{value: boolean}>());