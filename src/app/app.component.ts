import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import { getFromLocalStorage } from './todo/todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo-app';

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(getFromLocalStorage())
  }

}
