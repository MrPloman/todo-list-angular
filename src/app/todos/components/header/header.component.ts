import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { newToDoAction, setAllToDosStatus } from '../../store/todo.actions';
import { IAppState } from 'src/app/app.state';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private numberOfTodos: number = 0;
  public toogleStatus: boolean = false;
  public newToDo: string = '';
  constructor(private store: Store<IAppState>) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.store.subscribe(({ todos }) => {
      this.numberOfTodos = todos.length;
    });
  }

  public setAllToDosStatus() {
    if (this.numberOfTodos > 0) {
      this.toogleStatus = !this.toogleStatus;
      this.store.dispatch(setAllToDosStatus({ done: this.toogleStatus }));
    }
  }
  public setNewToDo() {
    this.store.dispatch(
      newToDoAction({
        id: new Date().getTime(),
        title: this.newToDo,
        done: false,
      })
    );
    this.newToDo = '';
  }
}
