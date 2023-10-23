import { Component, Input } from '@angular/core';
import { ToDo } from '../../models/todo.model';
import { Store } from '@ngrx/store';
import { deleteToDoAction, modifyToDoAction } from '../../store/todo.actions';
import { IAppState } from 'src/app/app.state';

@Component({
  selector: 'todo-component',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class ToDoComponent {
  @Input() public toDo: ToDo | any = {};
  public isEditingToDo: boolean = false;
  constructor(private store: Store<IAppState>) {}
  public modifyingToDoTitle(event: Event) {
    if (!this.isEditingToDo) {
      const newTitle: string = (<HTMLInputElement>event.target).value;
      this.updateToDoTitle(newTitle);
    }
  }

  public updateToDoTitle(newTitle: string) {
    const toDo: ToDo = {
      id: this.toDo.id,
      title: newTitle,
      done: this.toDo.done,
    };
    this.toDo = toDo;
    this.store.dispatch(
      modifyToDoAction({
        id: this.toDo.id,
        title: this.toDo.title,
        done: this.toDo.done,
      })
    );
  }
  public updateToDoStatus(event: Event) {
    const ischecked = (<HTMLInputElement>event.target).checked;
    const toDo: ToDo = {
      id: this.toDo.id,
      title: this.toDo.title,
      done: ischecked,
    };
    this.toDo = toDo;
    this.store.dispatch(
      modifyToDoAction({
        id: this.toDo.id,
        title: this.toDo.title,
        done: this.toDo.done,
      })
    );
  }
  public destroyToDo(id: number) {
    this.store.dispatch(
      deleteToDoAction({
        id,
      })
    );
  }
}
