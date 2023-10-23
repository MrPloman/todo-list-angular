import { NgModule } from '@angular/core';
import { ToDosComponent } from './todos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ToDoComponent } from './components/todo/todo.component';
import { TodosListComponent } from './components/todos-list/todos-list..component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { toDosReducers } from './store/todo.reducers';
import { BrowserModule } from '@angular/platform-browser';
import { appReducers } from '../app.state';

@NgModule({
  declarations: [
    ToDosComponent,
    TodosListComponent,
    FooterComponent,
    HeaderComponent,
    ToDoComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,

    FormsModule,
    StoreModule.forRoot(appReducers),
  ],
  exports: [
    ToDosComponent,
    ToDoComponent,
    TodosListComponent,
    FooterComponent,
    HeaderComponent,
  ],

  providers: [],
})
export class TodosModule {}
