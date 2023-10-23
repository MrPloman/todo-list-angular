import { ActionReducerMap } from '@ngrx/store';
import { ToDo } from './todos/models/todo.model';
import { toDosReducers } from './todos/store/todo.reducers';
import { Filters, filtersReducer } from './todos/store/filter.reducers';

export interface IAppState {
  todos: ToDo[];
  filter: string;
}

export const appReducers: ActionReducerMap<IAppState> = {
  todos: toDosReducers,
  filter: filtersReducer,
};
