import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as todoActions from '../todo.actions';

@Component({
  selector: 'app-todos-add',
  templateUrl: './todos-add.component.html',
  styles: [],
})
export class TodosAddComponent implements OnInit {
  txtInput!: FormControl;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.txtInput = new FormControl('', Validators.required);
  }

  addItem() {
    if (this.txtInput.invalid) return;
    this.store.dispatch(todoActions.addTodo({ text: this.txtInput.value }));
    this.txtInput.setValue("")
  }
}
