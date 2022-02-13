import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';
import { toggleAllTodo } from '../todo.actions';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: [],
})
export class TodosListComponent implements OnInit {
  todos: Todo[] = [];
  completed = false;
  filter!: string;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.todos = [...state.todos].reverse();
      this.filter = state.filter;
    });
  }

  toggleAllTodo() {
    this.completed = !this.completed;
    this.store.dispatch(toggleAllTodo({ value: !this.completed }));
  }
}
