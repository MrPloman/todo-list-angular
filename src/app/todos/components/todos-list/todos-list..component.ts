import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToDo } from '../../models/todo.model';
import { IAppState } from 'src/app/app.state';

@Component({
  selector: 'todos-list-component',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
})
export class TodosListComponent {
  title = 'todo-app';
  public toDos: ToDo[] = [];
  constructor(private store: Store<IAppState>) {}
  ngOnInit(): void {
    this.store.subscribe(({ todos, filter }) => {
      console.log(filter);
      if (filter === 'all') this.toDos = todos;
      else if (filter === 'completed')
        this.toDos = todos.filter((todo) => todo.done);
      else if (filter === 'active')
        this.toDos = todos.filter((todo) => !todo.done);
      else this.toDos = todos;
    });
  }
}
