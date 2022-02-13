import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';
import { toggleTodo, editTodo, deleteTodo } from '../todo.actions';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styles: [],
})
export class TodosItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('txtInputRef') txtInputRef!: ElementRef<HTMLInputElement>;

  txtInput!: FormControl;
  checkboxInput!: FormControl;

  editingItem: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.txtInput = new FormControl(this.todo.text, Validators.required);
    this.checkboxInput = new FormControl(this.todo.completed);

    this.checkboxInput.valueChanges.subscribe(() => {
      this.store.dispatch(toggleTodo({ id: this.todo.id }));
    });

    this.txtInput.valueChanges.subscribe(() => {

    })
  }

  edit() {
    this.editingItem = true;
    setTimeout(() => {
      this.txtInputRef.nativeElement.select();
    }, 1);
  }
  editFinished() {
    this.editingItem = false;
    if(this.txtInput.invalid) return
    if(this.txtInput.value === this.todo.text) return
    this.store.dispatch(editTodo({id: this.todo.id, text: this.txtInput.value}))
  }
  delete() {
    this.store.dispatch(deleteTodo({id: this.todo.id}))
  }
}
