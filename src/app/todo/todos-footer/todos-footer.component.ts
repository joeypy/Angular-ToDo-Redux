import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { filtersValid, setFilter } from 'src/app/filter/filter.actions';
import { Todo } from '../model/todo.model';
import { deleteAllTodo } from '../todo.actions';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './todos-footer.component.html',
  styles: [],
})
export class TodosFooterComponent implements OnInit {
  filterSelected: filtersValid[] = ['all', 'active', 'completed'];
  filterActual!: string;
  pending: number = 0;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.filterActual = state.filter;
      this.countPending(state.todos)
    });
  }

  changeFilter(newFilter: filtersValid) {
    this.store.dispatch(setFilter({ filterType: newFilter }));
  }

  countPending(todos: Todo[]) {
    this.pending = todos.filter((todo) => !todo.completed).length;
  }

  deleteAllTodo() {
    this.store.dispatch(deleteAllTodo())
  }
}
