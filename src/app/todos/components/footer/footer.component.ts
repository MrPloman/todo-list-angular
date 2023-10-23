import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteToDosAlreadyDoneAction } from '../../store/todo.actions';
import { IAppState } from 'src/app/app.state';
import { setFilter } from '../../store/filter.actions';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public counterOfTodos: number = 0;
  public filter: string = 'all';
  constructor(private store: Store<IAppState>) {}
  public clearDoneTodos() {
    this.store.dispatch(deleteToDosAlreadyDoneAction());
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.store.subscribe(({ todos }) => {
      this.counterOfTodos = todos.filter((todoFound) => !todoFound.done).length;
    });
  }
  public setFilter(filter: any) {
    this.filter = filter;
    this.store.dispatch(setFilter({ filter: filter }));
  }
}
